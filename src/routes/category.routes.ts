import { Router } from "express";
import { ensureTokenValidMiddleware } from "../middlewares/ensureTokenValid.middleware";
import { ensureIsAdminMiddleware } from "../middlewares/ensureIsAdmin.middleware";
import { ensureBodyValidMiddleware } from "../middlewares/ensureBodyValid.middleware";
import {
  createCategory,
  readCategories,
} from "../controllers/category.controllers";
import { categorySchemaRequest } from "../schemas/category.schema";
import { ensureCategoryExistMiddleware } from "../middlewares/ensureCaterogyExist.middleware";

const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "",
  ensureTokenValidMiddleware,
  ensureIsAdminMiddleware,
  ensureCategoryExistMiddleware,
  ensureBodyValidMiddleware(categorySchemaRequest),
  createCategory
);

categoriesRoutes.get("", readCategories);

categoriesRoutes.get("/:id/realEstate", ensureCategoryExistMiddleware);

export { categoriesRoutes };
