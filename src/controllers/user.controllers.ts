import { Request, Response } from "express";
import { createUserServices } from "../services/user/createUser.services";
import {
  TUser,
  TUserRequestUpdate,
  TUserResponse,
  TUserResponseArray,
} from "../interfaces/user.interface";
import { readUsersServices } from "../services/user/readUsers.services";
import { userSchemaResponse } from "../schemas/user.schema";
import { User } from "../entities";
import { updateUserServices } from "../services/user/updateUser.services";
import { deleteUserServices } from "../services/user/deleteUser.services";

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const payload = req.body;

  const newUser = await createUserServices(payload);

  return res.status(201).json(newUser);
};

const readUsers = async (req: Request, res: Response): Promise<Response> => {
  const users: TUserResponseArray = await readUsersServices();

  return res.json(users);
};

const updateUser = async (req: Request, res: Response): Promise<Response> => {
  const payload: TUserRequestUpdate = req.body;
  const userData: TUser = res.locals.user;

  const user = await updateUserServices(payload, userData);

  const userUpdate: TUserResponse = userSchemaResponse.parse(user);

  return res.status(200).json(userUpdate);
};

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const user: User = res.locals.user;

  await deleteUserServices(user);

  return res.status(204).send();
};

export { createUser, readUsers, updateUser, deleteUser };
