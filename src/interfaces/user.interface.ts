import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaResponseArray,
  userSchemaUpdateRequest,
} from "../schemas/user.schema";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUserResponseArray = z.infer<typeof userSchemaResponseArray>;
type TUserRequestUpdate = z.infer<typeof userSchemaUpdateRequest>;

export {
  TUser,
  TUserRequest,
  TUserResponse,
  TUserResponseArray,
  TUserRequestUpdate,
};
