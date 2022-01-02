<template>
  <div>
    <img :src="headingImage" alt="image_header" class="icones-header">
    <h1 class="titre-header">{{ headingTitle }}</h1>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'heading',
  props: {
    headingImage: {
      default: '@/assets/img/logo-ubfc2.png'
    },
    headingTitle: {
      default: 'POTHEM'
    }
  },
  data() {
    return {
      show:true
    }
  },
};
</script>

<style scoped lang="less">
.icones-header {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
@media screen and (min-width: 800px) {
  width: 6vw;
  height: auto;
  top: 6vw;
  left: 50%;
  transform: translateX(-50%);
  }
}
.titre-header {
  text-align: center;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  color: white;
  width: 100%;
@media screen and (min-width: 800px) {
  font-size: 2vw;
  top: 11vw;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 1.3vw;
  position: absolute;
  }
}
</style>
