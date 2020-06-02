<template>
  <div class="home-container">
    <div class="home-banner">
      <div class="home-banner-img">
        <a href="https://www.xpel.com.cn/info-806.html" target="_blank">
          <img src="https://www.xpel.com.cn/upload/source/libs_tu/70/img/dFQeBWkLM6iBedw1.jpg" />
        </a>
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
      menu: menu
    };
  },
  components: { listItem },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped></style>
