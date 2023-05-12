import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import {
  TCategory,
  TCategoryRequest,
} from "../../interfaces/category.interface";
import { categorySchema } from "../../schemas/category.schema";

const createCategoryServices = async (
  payload: TCategoryRequest
): Promise<TCategory> => {
  const categoryRepository: Repository<TCategory> =
    AppDataSource.getRepository(Category);

  const newCategory: TCategory = categoryRepository.create(payload);
  await categoryRepository.save(newCategory);

  return newCategory;
};

export { createCategoryServices };
