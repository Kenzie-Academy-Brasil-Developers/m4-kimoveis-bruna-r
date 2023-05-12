import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TCategories } from "../../interfaces/category.interface";
import { Category } from "../../entities";

const readCategoriesServices = async (): Promise<TCategories> => {
  const userRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categories: TCategories | null = await userRepository.find();

  return categories;
};

export { readCategoriesServices };
