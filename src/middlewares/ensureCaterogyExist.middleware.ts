import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { Category } from "../entities";

const ensureCategoryExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload: string = req.params.name;

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categoryName = await categoryRepository.findOneBy({
    name: payload,
  });

  if (categoryName) {
    throw new AppError("Category already exists", 409);
  }

  next();
};

export { ensureCategoryExistMiddleware };
