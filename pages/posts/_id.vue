<template>
  <div class="body">
      <h1>{{post.title}}</h1>
      <b>{{post.id}}</b>
      <p>{{post.info}}</p>
<aside>
    <ul>
        <li v-for="(related, index) in relatedPosts" :key="index">
         <nuxt-link :to="{name:'posts-id', params:{id: related.id} }">{{related.id}}</nuxt-link>
        </li>
    </ul>
</aside>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    head(){
        return{
            title: this.post.id,
            meta:[
                {name: 'description', content: this.post.title}
            ]
        }
    },
  data() {
    return {
        id: this.$route.params.id,
    };
  },
  computed: {
      ...mapGetters({thePosts:'posts/getPosts'}),
      post() {
          return this.thePosts.find(post => post.id === this.id)
          
      },
      relatedPosts(){
          return this.thePosts.filter(post => post.id !== this.id)
      }
  },
};
</script>

<style lang="scss" scoped></style>
