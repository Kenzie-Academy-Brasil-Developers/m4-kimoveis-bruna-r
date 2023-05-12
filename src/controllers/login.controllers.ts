import { Request, Response } from "express";
import { createLoginServices } from "../services/login/createLogin.services";

const loginUser = async (req: Request, res: Response): Promise<Response> => {
  const payload = req.body;

  const token = await createLoginServices(payload);

  return res.status(200).json({ token });
};

export { loginUser };
