import { ApiCall } from "tsrpc";
import { ReqLogout, ResLogout } from "../../shared/protocols/user/PtlLogout";
import { UserUtil } from "../../utils/UserUtil";

export async function ApiLogout(call: ApiCall<ReqLogout, ResLogout>) {
    call.req.__ssoToken && UserUtil.destroySsoToken(call.req.__ssoToken);
    call.succ({
        __ssoToken: ''
    });
}