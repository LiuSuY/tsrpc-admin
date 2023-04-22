import { ObjectId } from "mongodb";
import { ApiCall } from "tsrpc";
import { Global } from "../../Global";
import { User } from "../../shared/models/User";
import { ReqLogin, ResLogin } from "../../shared/protocols/user/PtlLogin";
import { UserUtil } from "../../utils/UserUtil";

export async function ApiLogin(call: ApiCall<ReqLogin, ResLogin>) {
  const { userName, passWord } = call.req;
  if (!userName || !passWord) {
    call.error("Error username or password is empty");
    return;
  }
  const user = await Global.db.collection<User>("User").findOne({
    userName,
    passWord,
  });
  if (!user) {
    call.error("Error username or password");
    return;
  }

  let sso = await UserUtil.createSsoToken(new ObjectId(user._id));
  call.succ({
    __ssoToken: sso,
    user: {
      uid: user._id.toString(),
      userName: user.userName,
      roles: [user.role],
    },
  });
}
