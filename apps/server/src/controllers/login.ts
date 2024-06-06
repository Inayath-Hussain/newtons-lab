import { RequestHandler } from "express";
import { env } from "../config/env";

export const loginController: RequestHandler = (req, res, next) => {
    const URL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${env.CLIENT_ID}&redirect_uri=${env.REDIRECT_URI}&scope=https://www.googleapis.com/auth/business.manage`
    res.redirect(URL)
}