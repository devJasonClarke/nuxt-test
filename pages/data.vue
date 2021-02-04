<template>
  <div>
    <ul>
      <h1>{{ counter }}</h1>
      <button @click="addOne">addOne</button>
    </ul>
    <button @click="fetchSomething">App di</button>
{{list}}
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      ip: {}
    };
  },
  computed: {
    ...mapGetters({ counter: "posts/count" }),
    ...mapGetters({list : 'posts/list'})
  },
  methods: {
    ...mapActions({ addOne: "posts/addOne" }),
    ...mapActions({listAll: "posts/list"}),
    async fetchSomething() {
      const ip = await this.$axios.$get(
        "https://jsonplaceholder.typicode.com/posts/12"
      );
      this.ip = ip;
    }
  },
  created() {
    this.listAll()
  }
};
</script>

<style lang="scss" scoped></style>
