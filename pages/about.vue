<template>
  <div class="body">
   <h1>
      This is the about page {{ name }} he is {{ lee }}
      <p>yellow</p>
    </h1>
  </div>
</template>

<script>
export default {
  head(){
    return{
title: 'About Page',
meta:[
  {name: 'description', content: 'just a little something'}
]
    }
  },
  data() {
    return {
      name: "Jason",
      loading: false
    };
  },
    mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  
},
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    }
  },
  computed: {
    lee() {
      return 5 + 4;
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: red;
  p {
    color: green;
  }
}
.loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 0, 0, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
  }
</style>
