<template>
  <div>
    <h1>{{ username }}'s page</h1>
  </div>
</template>

<script>
export default {
  name: "User",
  props: ["username"]
};
</script>

<style scoped lang="scss">
</style>