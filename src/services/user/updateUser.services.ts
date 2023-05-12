import { Repository } from "typeorm";
import { User } from "../../entities";
import { TUser, TUserRequestUpdate } from "../../interfaces/user.interface";
import { AppDataSource } from "../../data-source";
import { userSchema } from "../../schemas/user.schema";

const updateUserServices = async (
  payload: TUserRequestUpdate,
  userData: TUser
): Promise<User> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const newUser = {
    ...userData,
    ...payload,
  };

  const updateUser: TUser = userSchema.parse(newUser);

  const user: User = userRepository.create(updateUser);

  await userRepository.save(user);

  return user;
};

export { updateUserServices };
