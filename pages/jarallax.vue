<template>
  <div class="page">
    <div class="jarallax">
      <img
        class="jarallax-img"
        src="https://cdn.pixabay.com/photo/2020/07/06/07/47/road-5375897_1280.jpg"
        alt="image"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page {
  height: 200vh;
}
.jarallax {
  position: relative;
  z-index: 0;
  height: 100vh;
}
.jarallax > .jarallax-img {
  position: absolute;
  object-fit: cover;
  /* support for plugin https://github.com/bfred-it/object-fit-images */
  font-family: "object-fit: cover;";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
