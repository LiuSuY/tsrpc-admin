import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { client } from 'src/client';

const Login = () => {
    const [form] = Form.useForm();
    const handleLogin = () => {
        form.validateFields().then(values => {
            if (values) {
                const { username: userName, password: passWord } = values;
                client.callApi('user/Login', {
                    userName,
                    passWord
                }).then((res) => {
                    if (res.isSucc) {
                        message.success('登录成功');
                    } else {
                        message.error(res.err.message)
                    }
                })
            }
        })

    }
    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className='w-80'>
                <div className='py-8 text-center'>灵图考试系统登录</div>
                <Form form={form}>
                    <Form.Item
                        name="username"
                        label="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    >
                        <Input placeholder={'用户名: admin'} prefix={<UserOutlined className={'prefixIcon'} />}></Input>
                    </Form.Item>
                    <Form.Item rules={[
                        {
                            required: true,
                            message: '请输入密码！',
                        },
                    ]} name="password" label="password">
                        <Input.Password placeholder={'密码: admin'} prefix={<LockOutlined className={'prefixIcon'} />}></Input.Password>
                    </Form.Item>


                    <div>
                        <Form.Item noStyle name="autoLogin">
                            <Checkbox>自动登录</Checkbox>
                        </Form.Item>
                        <Button type='link' className='float-right px-0'>忘记密码</Button>
                    </div>
                    <div className='py-4'>
                        <Button type="primary" block onClick={handleLogin}> login </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;