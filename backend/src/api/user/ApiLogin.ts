import { ApiCall } from "tsrpc";
import { Global } from "../../models/Global";
import { UserUtil } from "../../models/UserUtil";
import { DbUser } from "../../shared/db/DbUser";
import { CurrentUser } from "../../shared/models/CurrentUser";
import { ReqLogin, ResLogin } from "../../shared/protocols/user/PtlLogin";

export async function ApiLogin(call: ApiCall<ReqLogin, ResLogin>) {
  const { username, password } = call.req;
 
  const user = await Global.db
    .collection<DbUser & CurrentUser>("User")
    .findOne({
      username,
    });
  if (!user) {
    call.error("Error username or password");
    return;
  }

  let sso = await UserUtil.createSsoToken(user._id);
  call.succ({
    __ssoToken: sso,
    user: user,
  });
}
