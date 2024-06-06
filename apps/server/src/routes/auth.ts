import { Router } from "express";
import { loginController } from "../controllers/login";
import { getTokensController } from "../controllers/getTokens";

const router = Router();


router.get("/login", loginController);
router.get("/token", getTokensController);


export { router as authRouter }