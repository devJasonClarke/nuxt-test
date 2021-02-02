<template>
  <div class="container body">
    <div>
      <Logo />
      <h1 class="title">
        learning-2
      </h1>
      <div class="links">
        <nuxt-link
          v-for="post in thePosts"
          :key="post.id"
          :to="{ name: 'posts-id', params: { id: post.id } }"
        >
          {{ post.id }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  head(){
    return{
      title: 'Jason Test',
      meta:[
      {  name: 'description', content: 'your mother'}
      ]
    }
  },
  computed: {
    ...mapGetters({ thePosts: "posts/getPosts" })
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 9vw;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
