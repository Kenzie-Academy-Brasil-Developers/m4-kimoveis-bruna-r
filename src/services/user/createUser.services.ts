import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import {
  TUser,
  TUserRequest,
  TUserResponse,
} from "../../interfaces/user.interface";
import { userSchemaResponse } from "../../schemas/user.schema";

const createUserServices = async (
  payload: TUserRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const newUser: User = userRepository.create(payload);
  await userRepository.save(newUser);

  const newUserResponse = userSchemaResponse.parse(newUser);

  return newUserResponse;
};

export { createUserServices };
