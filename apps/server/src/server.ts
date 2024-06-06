import cors from "cors";
import express from "express";
import morgan from "morgan";

import { corsOptions } from "./config/corsOptions";
import { env } from "./config/env";
import { authRouter } from "./routes/auth";

const app = express();



app.use(morgan("dev"))
// @ts-ignore
app.use(cors("*"))
app.use(express.json())


app.use("/auth", authRouter)


app.listen(env.PORT, () => console.log(`Server listening on port ${env.PORT} in ${env.NODE_ENV}`))