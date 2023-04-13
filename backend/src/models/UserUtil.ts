import { ObjectId } from "mongodb";
import * as uuid from "uuid";
import { Global } from "../db";
import { DbUser } from "../shared/db/DbUser";
import { CurrentUser } from "../shared/models/CurrentUser";

const SSO_VALID_TIME = 86400000 * 7;

export class UserUtil {
  // Store data in memory for test
  // You can store data into database

  static ssoTokenInfo: {
    [token: string]: { expiredTime: number; _id: ObjectId };
  } = {};

  static async createSsoToken(_id: ObjectId): Promise<string> {
    console.log(_id)
    let token = uuid.v1();
    // Expired after some time without any action
    let expiredTime = Date.now() + SSO_VALID_TIME;

    this.ssoTokenInfo[token] = {
      _id,
      expiredTime,
    };

    return token;
  }

  static async destroySsoToken(ssoToken: string): Promise<void> {
    delete this.ssoTokenInfo[ssoToken];
  }

  static async parseSSO(ssoToken: string): Promise<CurrentUser | undefined> {
    let info = this.ssoTokenInfo[ssoToken];
    // Token not exists or expired
    if (!info || info.expiredTime < Date.now()) {
      return undefined;
    }

    // Parse User
    let user = await Global.db
    .collection<DbUser & CurrentUser>("User")
    .findOne({
      _id: info._id,
    });
    if (!user) {
      return undefined;
    }

    // Extend expired time
    info.expiredTime = Date.now() + SSO_VALID_TIME;

    // Return parsed CurrentUser
    return {
      _id: user._id,
      username: user.username,
      roles: user.roles,
    };
  }
}
