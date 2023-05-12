import { Router } from "express";
import { loginUser } from "../controllers/login.controllers";
import { ensureBodyValidMiddleware } from "../middlewares/ensureBodyValid.middleware";
import { loginSchema } from "../schemas/login.schema";

const loginRoutes: Router = Router();

loginRoutes.post("", ensureBodyValidMiddleware(loginSchema), loginUser);

export { loginRoutes };
