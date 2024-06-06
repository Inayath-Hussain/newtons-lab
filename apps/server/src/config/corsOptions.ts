import { CorsOptions } from "cors";
import { env } from "./env";


export const corsOptions: CorsOptions = env.isProduction ?
    {
        origin: []
    }
    :
    {
        origin: "*"
    }