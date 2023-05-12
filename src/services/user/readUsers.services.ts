import { Repository } from "typeorm";
import { TUserResponseArray } from "../../interfaces/user.interface";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { userSchemaResponseArray } from "../../schemas/user.schema";

const readUsersServices = async (): Promise<TUserResponseArray> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: User[] | null = await userRepository.find();

  const allUsers: TUserResponseArray = userSchemaResponseArray.parse(users);

  return allUsers;
};

export { readUsersServices };
