export const getUsers = async (limit?: number) => {
  const response = parseData(
    await $fetch("https://jsonplaceholder.typicode.com/users"),
    UsersSchema
  );

  return limit ? response.slice(0, limit) : response;
};
