import cors from "cors";
import express from "express";
import morgan from "morgan";

import { corsOptions } from "./config/corsOptions";
import { env } from "./config/env";

const app = express();



app.use(morgan("dev"))
app.use(cors(corsOptions))



app.listen(env.PORT, () => console.log(`Server listening on port ${env.PORT} in ${env.NODE_ENV}`))