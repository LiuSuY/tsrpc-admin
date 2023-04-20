import { ApiCall } from "tsrpc";
import { Global } from "../../models/Global";
import { UserUtil } from "../../models/UserUtil";
import { DbUser } from "../../shared/db/DbUser";
import { ReqLogin, ResLogin } from "../../shared/protocols/user/PtlLogin";

export async function ApiLogin(call: ApiCall<ReqLogin, ResLogin>) {
  const { userName, passWord } = call.req;
  if (!userName || !passWord) {
    call.error("Error username or password is empty");
    return;
  }
  const user = await Global.db.collection<DbUser>("User").findOne({
    userName,
    passWord,
  });
  if (!user) {
    call.error("Error username or password");
    return;
  }

  let sso = await UserUtil.createSsoToken(user._id);
  call.succ({
    __ssoToken: sso,
    user: {
      uid: user._id,
      username: user.userName,
      roles: [user.role],
    },
  });
}
