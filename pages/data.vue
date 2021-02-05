<template>
  <div>
    <ul>
      <h1>{{ counter }}</h1>
      <button @click="addOne">addOne</button>
    </ul>
    <button @click="listThem">App di</button>
    <p v-if="!loaded">Loading</p>
    <p v-else>{{ list }}</p>

    {{ added }}

    <button @click="add">Added it</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      ip: {},
      loaded: false,
      added: null
    };
  },
  computed: {
    ...mapGetters({ counter: "posts/count" }),
    ...mapGetters({ list: "posts/list" })
  },
  methods: {
    ...mapActions({ addOne: "posts/addOne" }),
    ...mapActions({ listAll: "posts/list" }),
    add() {
      this.added++;
    },
    listThem() {
      this.ip = this.listAll();
      setTimeout(() => {
        this.loaded = true;
      }, 500);
    }
  },
  mounted() {
    if (localStorage.add) {
      this.added = localStorage.add;
    }
      this.listThem();
  },
  watch: {
    added(newValue) {
      localStorage.add = newValue;
    },
  
  }
};
</script>

<style lang="scss" scoped></style>
