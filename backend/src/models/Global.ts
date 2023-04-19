import { Collection, Db, MongoClient, OptionalId } from "mongodb";
import { Logger } from "tsrpc";
import { DbRecordLog } from "../shared/db/DbRecordLog";
import { dbConfig } from "./dbConfig";

export class Global {
  static db: Db;

  static async init(logger?: Logger) {
    logger?.log("start connecting db...");
    const client = await new MongoClient(dbConfig.url).connect();
    logger?.log("db connected successfully...");
    this.db = client.db();
  }

  static collection<T extends keyof DbCollectionType>(col: T): Collection<OptionalId<DbCollectionType[T]>> {
    return this.db.collection(col);
}
}

export interface DbCollectionType {
  RecordLog: DbRecordLog;
}
