import { Request, Response } from "express";
import {
  TCategories,
  TCategoryRequest,
} from "../interfaces/category.interface";
import { createCategoryServices } from "../services/category/createCategory.services";
import { readCategoriesServices } from "../services/category/readCategories.services";
//import { readRealEstatesByCategoryServices } from "../services/category/readRealEstatesByCategory.services";

const createCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload: TCategoryRequest = req.body;

  const newCategory = await createCategoryServices(payload);

  return res.status(201).json(newCategory);
};

const readCategories = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const Categories: TCategories = await readCategoriesServices();

  return res.json(Categories);
};

const readRealEstatesByCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);

  //const RealEstates: TCategories = await readRealEstatesByCategoryServices(id);

  return res.send(); //json(RealEstates);
};

export { createCategory, readCategories, readRealEstatesByCategory };
