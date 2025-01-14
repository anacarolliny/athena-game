import 'dotenv/config'
import './db/MongoConnection'
import { serverHttp } from "./server";

const nodePort = process.env.NODE_PORT || 3333
serverHttp.listen(nodePort, () => {
  console.log(`Server is running on http://localhost:${nodePort}`)
})
