import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { LoginUser } from "../../interfaces/login.interface";
import { AppError } from "../../error";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

const createLoginServices = async (payload: LoginUser): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      email: payload.email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  if (user.deletedAt) {
    throw new AppError("Invalid credentials", 401);
  }

  const comparePassword = await compare(payload.password, user.password);

  if (!comparePassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = sign(
    {
      admin: user.admin,
    },
    String(process.env.SECRET_KEY),
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );

  return token;
};

export { createLoginServices };
