<template>
  <div class="body">
    <h1>
      This is the about page {{ name }} he is {{ lee }}
      <p class="yel">yellow</p>
      <h4 class="orange">Orange</h4>
      <button @click="change">change</button>
    </h1>
  </div>
</template>

<script>
import gsap from "gsap";

export default {

  head() {
    return {
      title: "About Page",
      meta: [{ name: "description", content: "just a little something" }]
    };
  },
  data() {
    return {
      name: "Jason",
      loading: false,
      toggle: 0
    };
  },
  methods: {
    change() {
      let tl = gsap.timeline();
      if (this.toggle == 0) {
    
     tl.to(".yel", {
          duration: .5,
          x: 200,
          color: "orange"
        });
        this.toggle++;
       
      } else if(this.toggle == 1){
        tl.to(".yel", {
          duration: .5,
          x: 0,
          color: "green"
        });
         this.toggle--;
      }
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

.orange{
  color: var(--orange)
}
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
