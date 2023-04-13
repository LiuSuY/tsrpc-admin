import { Button, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { client } from "src/client";
import { setStatus } from "src/test";

const Login = () => {
    const handleLogin = async () => {
        // todo 登录 
        // let ret = await client.callApi('user/Login', {
        //     username: 'Admin',
        //     password: '123456'
        // });

        // if (!ret.isSucc) {
        //     alert(ret.err.message);
        //     return;
        // }

        // localStorage.setItem('LoginedRole', 'Admin');
        // setStatus(true);
    }
    const handleLoout = async () => {
        // // todo 登录 
        // let ret = await client.callApi('user/Logout', {});

        // if (!ret.isSucc) {
        //     alert(ret.err.message);
        //     return;
        // }

        // setStatus(false);
    }
    return <div>
        <Form >
            <FormItem label="用户名">
                <Input placeholder="请输入用户名"></Input>
            </FormItem>
            <FormItem label="密码">
                <Input placeholder="请输入密码"></Input>
            </FormItem>
            <FormItem className="text-center">
                <Button type="primary" onClick={handleLogin}>login</Button>
                <Button type="primary" onClick={handleLoout}>logout</Button>
                <Button>cancel</Button>
            </FormItem>
        </Form>


    </div>
}

export default Login;