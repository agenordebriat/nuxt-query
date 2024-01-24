export const getPosts = async () => {
  return parseData(
    await $fetch("https://jsonplaceholder.typicode.com/posts"),
    PostsSchema
  );
};
