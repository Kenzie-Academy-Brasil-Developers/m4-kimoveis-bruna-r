import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { User } from "../entities";

const ensureEmailExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload: string = req.body.email;
  if (!payload) {
    return next();
  }

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userEmail = await userRepository.findOneBy({
    email: payload,
  });

  if (userEmail) {
    throw new AppError("Email already exists", 409);
  }

  next();
};

export { ensureEmailExistMiddleware };
