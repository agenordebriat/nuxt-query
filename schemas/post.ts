import { array, number, object, string } from "valibot";

export const PostsSchema = array(
  object({
    id: number(),
    userId: number(),
    title: string(),
    body: string(),
  })
);
