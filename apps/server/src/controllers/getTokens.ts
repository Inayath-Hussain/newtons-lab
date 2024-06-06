import axios, { AxiosError } from "axios";
import { RequestHandler } from "express";
import { env } from "../config/env";
import { oauthClient } from "../config/OAuth";

export const getTokensController: RequestHandler = async (req, res, next) => {
    const code = req.query.code as string;

    if (!code) return res.status(400).json({ message: "code is required" })

    try {
        const result = await oauthClient.getToken(code)

        const URL = `${env.FRONTEND_URL}?accessToken=${result.tokens.access_token}`
        res.redirect(URL)
    }

    catch (ex) {
        if (ex instanceof AxiosError && ex.response?.status) {
            console.log(ex.response.status, ex.response?.data)
            return res.status(ex.response.status).json(ex.response?.data)
        }

        console.log(ex)
        res.status(500).json({ message: "Internal server error" })
    }

}