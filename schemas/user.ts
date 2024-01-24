import { array, number, object, string } from "valibot";

export const UsersSchema = array(
  object({
    id: number(),
    name: string(),
    username: string(),
    email: string(),
  })
);
