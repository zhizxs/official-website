<template>
  <div class="home-container">
    <div class="home-banner row">
      <div class="home-banner-img">
        <img class="col-md-12" src="https://www.xpel.com.cn/upload/source/libs_tu/70/img/dFQeBWkLM6iBedw1.jpg" />
      </div>
    </div>
    <list-item v-for="(item, index) in menu" :key="index + item.id" :list="item"></list-item>
  </div>
</template>

<script>
const menu = require("@json/home.json");

import listItem from "./components/listItem.vue";

export default {
  data() {
    return {
      menu: menu,
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active"
        }
      }
    };
  },
  components: { listItem },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped></style>
