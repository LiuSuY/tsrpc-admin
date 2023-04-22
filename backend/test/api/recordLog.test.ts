import assert from "assert";
import { before } from "mocha";
import { HttpClient, TsrpcError } from "tsrpc";
import { BaseResponse } from "../../src/shared/protocols/base";
import { serviceProto } from "../../src/shared/protocols/serviceProto";

describe("recordLog", async function () {
  let client = new HttpClient(serviceProto, {
    server: "http://127.0.0.1:3000",
    logger: console,
  });
  let ssoToken: string;
  before(async () => {
    client.flows.postApiReturnFlow.push((v) => {
      if (v.return.isSucc) {
        let res = v.return.res as BaseResponse;
        if (res.__ssoToken !== undefined) {
          ssoToken = res.__ssoToken;
        }
      } else if (v.return.err.code === "NEED_LOGIN") {
        ssoToken = "";
      }
      return v;
    });

    client.flows.preCallApiFlow.push((v) => {
      if (ssoToken) {
        v.req.__ssoToken = ssoToken;
      }
      return v;
    });

    await client.callApi("user/Login", {
      userName: "admin",
      passWord: "admin",
    });
  });

  it("ApiGet", async function () {
    let ret = await client.callApi("recordLog/Get", {});
    assert.strictEqual(ret.isSucc, true);
  });

  it("ApiSave", async function () {
    let ret = await client.callApi("recordLog/Save", {
      recordLog: {
        title: "测试签到",
        startTime: new Date(),
      },
    });
    assert.deepStrictEqual(ret, {
      isSucc: true,
      res: {},
    });
  });
  it("ApiSave", async function () {
    let ret = await client.callApi("recordLog/Save", {
      recordLog: {
        title: "",
        startTime: new Date(),
      },
    });
    assert.deepStrictEqual(ret, {
      isSucc: false,
      err: new TsrpcError('title is empty'),
    });
  });
});
