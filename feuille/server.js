import { createServer } from "http";
import {index} from "./index.js"

const server = createServer(index);
const port = process.env.PORT || 3000;

server.listen(port,() => console.log(`Server launched on port ${port}`));