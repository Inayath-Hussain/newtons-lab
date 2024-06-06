import { OAuth2Client } from "google-auth-library";
import { env } from "./env";


export const oauthClient = new OAuth2Client({
    clientId: env.CLIENT_ID,
    clientSecret: env.CLIENT_SECRET,
    redirectUri: env.REDIRECT_URI
})