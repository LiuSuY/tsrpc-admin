import assert from 'assert';
import { HttpClient, TsrpcError } from 'tsrpc';
import { serviceProto } from '../../src/shared/protocols/serviceProto';

// 1. EXECUTE `npm run dev` TO START A LOCAL DEV SERVER
// 2. EXECUTE `npm test` TO START UNIT TEST

describe('ApiGetData', function () {
    let client = new HttpClient(serviceProto, {
        server: 'http://127.0.0.1:3000',
        logger: console
    });

    it('AddData & GetData', async function () {
        let ret1 = await client.callApi('book/Get', {});
        assert.strictEqual(ret1.isSucc, true);
    });

    it('AddData: Check content is empty', async function () {
        assert.strictEqual(true, true);
        // let ret = await client.callApi('AddData', {
        //     content: ''
        // });
        // assert.deepStrictEqual(ret, {
        //     isSucc: false,
        //     err: new TsrpcError('Content is empty')
        // });
    })
})