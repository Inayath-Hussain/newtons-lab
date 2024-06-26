import { config } from "dotenv";
import { cleanEnv, port, str } from "envalid";

config();

export const env = cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port({ default: 8080 }),
    CLIENT_ID: str(),
    CLIENT_SECRET: str(),
    REDIRECT_URI: str(),
    FRONTEND_URL: str()
})