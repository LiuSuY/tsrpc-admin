import { Db, MongoClient } from "mongodb";
import { Logger } from "tsrpc";

export class Global {
  static db: Db;

  static async init(logger?: Logger) {
    const url = "mongodb://localhost:27017/tsrpc-example";
    const client = await new MongoClient(url).connect();
    this.db = client.db();
  }
}
