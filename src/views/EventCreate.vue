<template>
  <div>
    <h1>Creating Event {{ user.name }}</h1>
    <p>{{ user.id }}</p>
    <p>There are {{ catLength }} categories</p>
    <p>{{ getEventById(2) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "EventCreate",
  computed: {
    getEvent() {
      return this.$store.getters.getEventById;
    },
    catLength() {
      return this.$store.getters.catLength;
    },
    ...mapGetters(["getEventById"]),
    ...mapState(["user", "categories"])
  }
};
</script>

<style scoped lang="scss">
</style>