import { Router } from "express";
import {
  createUser,
  deleteUser,
  readUsers,
  updateUser,
} from "../controllers/user.controllers";
import { ensureBodyValidMiddleware } from "../middlewares/ensureBodyValid.middleware";
import {
  userSchemaRequest,
  userSchemaUpdateRequest,
} from "../schemas/user.schema";
import { ensureEmailExistMiddleware } from "../middlewares/ensureEmailExist.middleware";
import { ensureTokenValidMiddleware } from "../middlewares/ensureTokenValid.middleware";
import { ensureIsAdminMiddleware } from "../middlewares/ensureIsAdmin.middleware";
import { ensurePermitionMiddleware } from "../middlewares/ensurePermition.middleware";
import { ensureIdExistMiddleware } from "../middlewares/ensureIdExist.middleware";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureEmailExistMiddleware,
  ensureBodyValidMiddleware(userSchemaRequest),
  createUser
);

usersRoutes.get(
  "",
  ensureTokenValidMiddleware,
  ensureIsAdminMiddleware,
  readUsers
);
usersRoutes.patch(
  "/:id",
  ensureIdExistMiddleware,
  ensureTokenValidMiddleware,
  ensurePermitionMiddleware,
  ensureEmailExistMiddleware,
  ensureBodyValidMiddleware(userSchemaUpdateRequest),
  updateUser
);

usersRoutes.delete(
  "/:id",
  ensureIdExistMiddleware,
  ensureTokenValidMiddleware,
  ensureIsAdminMiddleware,
  deleteUser
);

export { usersRoutes };
