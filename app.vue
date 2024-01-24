<script setup lang="tsx">
const users = useQuery({ queryKey: ["users"], queryFn: () => getUsers(3) });
const posts = useQuery({ queryKey: ["posts"], queryFn: getPosts });

await Promise.all([users.suspense(), posts.suspense()]);

// Watch me do it just because I can 👀
const Users = () => <pre>{JSON.stringify(users.data.value, null, 2)}</pre>;
const Posts = () => <pre>{JSON.stringify(posts.data.value, null, 2)}</pre>;
</script>

<template>
  <Users />
  <Posts />
</template>
