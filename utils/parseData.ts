import { safeParse } from "valibot";
import type { BaseSchema, Output } from "valibot";

export const parseData = <S extends BaseSchema>(
  data: unknown,
  schema: S
): Output<S> => {
  const result = safeParse(schema, data);

  if (!result.success) {
    throw showError({ message: JSON.stringify(result.issues) });
  }

  return result.output;
};
