// // import { Button, ConfigProvider, Form, Radio, RadioChangeEvent, Select, Space, TimePicker } from 'antd';
// // import { useState } from 'react';
// // import type { Locale } from 'antd/es/locale';
// // import enUS from 'antd/locale/en_US';
// // import zhCN from 'antd/locale/zh_CN';
// // import dayjs from 'dayjs';
// // import 'dayjs/locale/zh-cn';
// // import Login from './pages/login';

// // dayjs.locale('en');

// // const { Option } = Select;

// // const options = {
// //   en: 'English',
// //   cn: '中文',
// // };

// // const App = () => {
// //   const [locale, setLocal] = useState<Locale>(enUS);

// //   const changeLocale = (e: RadioChangeEvent) => {
// //     const localeValue = e.target.value;
// //     setLocal(localeValue);
// //   };

// //   dayjs.locale(locale === enUS ? 'en' : 'zh-cn');

// //   return (
// //     <Form>
// //       <ConfigProvider locale={locale} componentSize="small">
// //         <Space wrap>
// //           <Form.Item label="Change locale of components:">
// //             <Radio.Group value={locale} onChange={changeLocale}>
// //               {Object.entries(options).map(([key, value]) => (
// //                 <Radio.Button key={key} value={key === 'en' ? enUS : zhCN}>
// //                   {value}
// //                 </Radio.Button>
// //               ))}
// //             </Radio.Group>
// //             <Button type="primary">click me</Button>
// //           </Form.Item>
// //           <Form.Item name="select" label="Select">
// //             <Select showSearch style={{ width: 200 }}>
// //               <Option value="jack">jack</Option>
// //               <Option value="lucy">lucy</Option>
// //             </Select>
// //           </Form.Item>
// //           <Form.Item name="timePicker" label="TimePicker">
// //             <TimePicker />
// //           </Form.Item>
// //         </Space>
// //         <Login></Login>
// //       </ConfigProvider>
// //     </Form>
// //   );
// // };

// // export default App;

// import { useEffect, useState } from 'react';
// import { client } from './client';
// import './index.less';
// import 'antd/dist/reset.css';
// import { Button } from 'antd';
// import { DbBook } from './shared/db/DbBook';

// const App = () => {
//     const [books, setBooks] = useState<DbBook[]>();
//     useEffect(() => {
//         client.callApi('book/Add', {
//             book: {
//                 "title": "一千零一页",
//                 "author": "夏天",
//                 "price": 20
//             }
//         });



//         handelGetBook();



//     }, []);

//     const handelGetBook = () => {
//         client.callApi('book/Get', {}).then(res => {
//             res.isSucc && setBooks(res.res.books);
//         })
//     }

//     const handleDel = async (item: DbBook) => {
//         let re = await client.callApi('book/Del', { ...item });
//         re.isSucc && alert(re.res.deletedCount)
//         handelGetBook();
//     }

//     const handleEdit = async (item: DbBook) => {
//         item.author = '想他';
//         item.price = 30;
//         console.log(item);
//         let re = await client.callApi('book/Edit', { book: item });
//         re.isSucc && alert(re.res?.msg);
//         handelGetBook();
//     }
//     const handleLogin = async () => {
//         let re = await client.callApi('user/Login', {
//             username: 'admin',
//             password: 'admin'
//         });
//         if (re.isSucc) {
//             alert('登录成功')
//         }
//     }
//     const handleLogout = async () => {
//         let re = await client.callApi('user/Logout', {});
//         if (re.isSucc) {
//             alert('退出成功')
//         }
//     }

//     const hanldeAdd = async () => {
//         let ret = await client.callApi('user/Add', {
//             user: {
//                 age: 15,
//                 username: '王某某',
//                 roles: ['admin'],
//                 password: 'admin'
//             }
//         })
//         console.log(ret)
//     }
//     const handleTest = async () => {
//         let re = await client.callApi('book/Get', {});
//         if (re.isSucc) {
//             console.log(re)
//         }
//     }
//     return <div className='App'>
//         <Button onClick={handleLogin}>login</Button>
//         <Button onClick={handleLogout}>logout</Button>
//         <Button onClick={hanldeAdd}>add</Button>
//         <Button type="primary">click me</Button>
//         <Button type='primary' onClick={handleTest}>test </Button>
//         {books && books.map((item) => {
//             return <div key={item._id}>
//                 <span>书名:{item.title}</span>
//                 <span>作者:{item.author}</span>
//                 <span>价格:{item.price}</span>
//                 <span onClick={() => handleDel(item)}>删除</span>
//                 <span onClick={() => handleEdit(item)}>更新</span>
//             </div>
//         })}
//     </div>
// }
// export default App;