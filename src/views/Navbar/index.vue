<template>
  <div class="header">
    <!-- 大屏 -->
    <div class="big hidden">
      <div class="logo">
        <img src="@img/logo.png" alt="" />
      </div>
      <div class="content">
        <div class="item" v-for="(item, index) in menu" :key="index + item.id" @mouseenter="makeHover(item.id)" @mouseleave="mouseleave">
          <a @click="chooseMenu(item.id)">{{ item.title }}</a>
          <div v-if="item.child" class="sub-menu" v-show="mouseId == item.id">
            <menu-card :hasAds="item.hasAds" :menu="item.child"></menu-card>
          </div>
        </div>
      </div>
      <div class="search-cont">
        <input type="text" placeholder="请输入你需要搜索的产品" />
        <img class="search" src="@img/search.png" alt="" />
      </div>
    </div>
    <!-- 小屏 -->
    <div class="sm show">
      <div class="left">
        <img src="@img/menu.png" alt="" />
      </div>
      <div class="center">
        <div class="logo">
          <img src="@img/logo.png" alt="" />
        </div>
      </div>
      <div class="right">
        <img class="search" src="@img/search.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
const menu = require("@json/header.json");

import menuCard from "./components/card.vue";
export default {
  data() {
    return {
      menu: menu,
      mouseId: ""
    };
  },
  create() {},
  mounted() {},
  components: { menuCard },
  methods: {
    chooseMenu(id) {
      console.log(id);
    },
    makeHover(id) {
      this.mouseId = id;
    },
    mouseleave() {
      // this.mouseId = "";
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  background: #000;
  margin-right: auto;
  margin-left: auto;
  color: #fff;
  font-weight: bold;
}

.big,
.sm {
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
  align-items: center;
  justify-content: space-around;
}

.sm {
  display: none;
  img {
    width: 3em;
    height: 3em;
  }
}

/************ 不能拿走 *****************/
@media screen and (max-width: 960px) {
  .hidden {
    display: none;
  }
  .show {
    display: flex;
  }
}
/************ 不能拿走 *****************/

.big {
  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      padding: 0 20px;
      position: relative;
      &:hover:after {
        visibility: visible;
        transform: scaleX(1);
      }

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: 0;
        left: 0;
        background-color: #f5af05;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.2s ease-in-out 0s;
      }
    }
    .item {
      padding: 20px;
    }
  }
  .sub-menu {
    background: #fff;
    border-radius: 5px;
    position: absolute;
    overflow: hidden;
    box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.1);
  }
}

.logo {
  img {
    width: 4em;
    height: 4em;
  }
}

input {
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px;
}
.search {
  width: 50px;
  height: 50px;
}
</style>
