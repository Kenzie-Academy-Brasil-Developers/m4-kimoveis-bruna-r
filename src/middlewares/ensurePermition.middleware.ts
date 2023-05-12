import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const ensurePermitionMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = parseInt(req.params.id);
  const admin = res.locals.token.admin;
  const idtoken = parseInt(res.locals.token.id);

  if (admin || id === idtoken) {
    return next();
  } else {
    throw new AppError("Insufficient permission", 403);
  }
};
export { ensurePermitionMiddleware };
