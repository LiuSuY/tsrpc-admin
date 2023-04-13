import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { client } from './client';
import './index.less';
import 'antd/dist/reset.css';
import { Button } from 'antd';
import { DbBook } from './shared/db/DbBook';

const App = () => {
    const [books, setBooks] = useState<DbBook[]>();
    useEffect(() => {
        client.callApi('book/Add', {
            book: {
                "title": "一千零一页",
                "author": "夏天",
                "price": 20
            }
        });



        handelGetBook();



    }, []);

    const handelGetBook = () => {
        client.callApi('book/Get', {}).then(res => {
            res.isSucc && setBooks(res.res.books);
        })
    }

    const handleDel = async (item: DbBook) => {
        let re = await client.callApi('book/Del', { ...item });
        re.isSucc && alert(re.res.deletedCount)
        handelGetBook();
    }

    const handleEdit = async (item: DbBook) => {
        item.author = '想他';
        item.price = 30;
        console.log(item);
        let re = await client.callApi('book/Edit', { book: item });
        re.isSucc && alert(re.res?.msg);
        handelGetBook();
    }
    return <div className='App'>
        <Button type="primary">click me</Button>
        {books && books.map((item) => {
            return <div key={item._id}>
                <span>书名:{item.title}</span>
                <span>作者:{item.author}</span>
                <span>价格:{item.price}</span>
                <span onClick={() => handleDel(item)}>删除</span>
                <span onClick={() => handleEdit(item)}>更新</span>
            </div>
        })}
    </div>
}
// async function main() {
//     // let ret = await client.callApi('user/Add',{
//     //     user:{
//     //         age: 15,
//     //         name: '王某某',
//     //         role: '管理员'
//     //     }
//     // })
//     // console.log(ret)
//     let t = await client.callApi('user/Get', {});
//     if (t.isSucc) {
//         let user = t.res.users[0];
//         let user2 = t.res.users[1];
//         user.age = 1000
//         let c = await client.callApi('user/Edit', { user })
//         console.log(c);
//         let d = await client.callApi('user/Del', { _id: user2._id })
//         console.log(d);
//     }
// }
// main()
ReactDOM.render(<App />, document.getElementById('app'));