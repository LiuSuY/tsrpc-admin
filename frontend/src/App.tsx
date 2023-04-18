import { Button, Form, Input, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useEffect, useState } from "react";
import { client } from "./client";
import { DbRecordLog } from "./shared/db/DbRecordLog";


const App = () => {
    const [recordLog, setRecordLog] = useState<DbRecordLog[]>();
    const [title, setTitle] = useState<string>('');
    const handleGetRecordLog = () => {
        client.callApi('recordLog/Get', {}).then((res) => {
            if (res.isSucc) {
                setRecordLog(res.res.records)
            }
        })
    }
    useEffect(() => {
        handleGetRecordLog();
    }, []);
    const handleStart = () => {
        if (title) {
            client.callApi('recordLog/Save', {
                recordLog: {
                    title,
                    startTime: new Date
                }
            }).then((res) => {
                if (res.isSucc) {
                    message.success('保存成功');
                    handleGetRecordLog();
                }
            })
        } else {
            message.error('标题不能为空');
        }

    }

    return (<div>
        <div className="text-center pt-10">学习记录</div>
        <div className="p-4">
            {recordLog && recordLog.map((item) => {
                return <div key={item._id}>
                    <div className=" mt-4 mb-4"><span>学习标题:</span><span>{item.title}</span></div>
                    <div className=" mt-4 mb-4"><span>学习开始时间:</span><span >{item.startTime.toLocaleString()}</span></div>
                    <div className=" mt-4 mb-4"><span>学习结束时间:</span><span >{item.endTime ? item.endTime.toLocaleString() : ''}</span></div>
                </div>
            })}
        </div>
        <Form>
            <FormItem label="学习标题">
                <Input placeholder="请输入学习标题" value={title} onChange={(e) => setTitle(e.target.value)}></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" onClick={handleStart}>开始学习</Button>
            </FormItem>
        </Form>
    </div>)
}

export default App;