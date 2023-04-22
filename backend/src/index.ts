import * as path from "path";
import { HttpServer } from "tsrpc";
import { Global } from "./Global";
import { enableAuthentication } from "./utils/enableAuthentication";
import { parseCurrentUser } from "./utils/parseCurrentUser";
import { serviceProto } from "./shared/protocols/serviceProto";

// Create the Server
const server = new HttpServer(serviceProto, {
  port: 3000,
  // Remove this to use binary mode (remove from the client too)
  json: true,
});

// Initialize before server start
async function init() {
  // Auto implement APIs
  await server.autoImplementApi(path.resolve(__dirname, "api"));

  await Global.init();
  // TODO
  // Prepare something... (e.g. connect the db)
}

parseCurrentUser(server);
enableAuthentication(server);
// Entry function
async function main() {
  await init();
  await server.start();
}
main().catch((e) => {
  server.logger.error(e);
  process.exit(-1);
});
