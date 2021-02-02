<template>
  <div>
    <ul>
      <h1>{{counter}}</h1>
      <button @click="addOne">addOne</button>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {

computed: {
    ...mapGetters({counter: 'posts/count'})
},
methods: {
    ...mapActions({addOne:'posts/addOne'}),
},


};
</script>

<style lang="scss" scoped></style>
