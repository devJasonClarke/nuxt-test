<template>
    <nav>
  <nuxt-link :to="{name: 'about'}">About</nuxt-link>
      <nuxt-link :to="{name: 'index'}">Home</nuxt-link>
      <nuxt-link :to="{name: 'data'}">Data</nuxt-link>
       <nuxt-link to="/posts/jason">Jason</nuxt-link>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
nav{

    display: flex;
    justify-content: center;

    a{
        color: black;
        text-decoration: none;
    }
}
</style>