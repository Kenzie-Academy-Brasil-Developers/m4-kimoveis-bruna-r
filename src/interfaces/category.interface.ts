import { z } from "zod";
import {
  categoriesSchema,
  categorySchema,
  categorySchemaRequest,
} from "../schemas/category.schema";

type TCategory = z.infer<typeof categorySchema>;
type TCategoryRequest = z.infer<typeof categorySchemaRequest>;
type TCategories = z.infer<typeof categoriesSchema>;

export { TCategory, TCategoryRequest, TCategories };
