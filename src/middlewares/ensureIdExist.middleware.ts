import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { User } from "../entities";

const ensureIdExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload: number = parseInt(req.params.id);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const idUser: User | null = await userRepository.findOneBy({
    id: payload,
  });

  if (!idUser) {
    throw new AppError("User not found", 404);
  }

  res.locals.user = idUser;

  next();
};

export { ensureIdExistMiddleware };
