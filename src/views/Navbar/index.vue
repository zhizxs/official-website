<template>
  <div class="header">
    <div class="main">
      <!-- 大屏 -->
      <div class="big hidden">
        <div class="logo">
          <img src="@img/logo.png" alt="" />
        </div>
        <div class="content">
          <div class="item" v-for="(item, index) in menu" :key="index + item.id" @mouseenter="makeHover(item.id)" @mouseleave="mouseleave">
            <a @click="chooseMenu(item.id)">{{ item.title }}</a>
            <div v-if="item.child" :class="['sub-menu', 'left' + index]" v-show="mouseId == item.id">
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
    <!-- 下啦 -->
    <ul class="sm-list">
      <!-- <li>
        <img class="arrow arrow-left" src="@img/arrow01.png" alt="" />
        <span>返回</span>
      </li> -->
      <li>
        <img class="pos" src="@img/position.png" alt="" />
        <span>挑选门店</span>
      </li>
      <li v-for="(items, index) in currentMenu" :key="index + items.id">
        <span @click="changeItem(index)">{{ items.title }}</span>
        <span v-if="items.child || items.type">
          <img class="arrow" src="@img/arrow01.png" alt="" />
        </span>
      </li>
    </ul>
    <!-- 搜索 -->
    <div class="search-cont sm-search" v-show="showSearch">
      <input type="text" placeholder="请输入你需要搜索的产品" />
      <img class="search" src="@img/search-dark.png" alt="" />
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
      currentMenu: [],
      mouseId: "",
      showSearch: false
    };
  },
  create() {},
  mounted() {
    this.currentMenu = menu;
  },
  components: { menuCard },
  methods: {
    chooseMenu(id) {
      console.log(id);
    },
    makeHover(id) {
      this.mouseId = id;
    },
    mouseleave() {
      this.mouseId = "";
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  position: relative;
}
.main {
  background: #000;
  color: #fff;
  font-weight: bold;
}

.big,
.sm {
  display: flex;
  align-items: center;
}

.sm {
  display: none;
  padding: 10px 20px;
  justify-content: space-between;
  .left img {
    width: 27px;
    height: 27px;
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
  padding: 10px 20px;
  justify-content: space-around;

  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      padding: 0 10px;
      position: relative;
      font-size: 20px;
      &:hover:after {
        visibility: visible;
        transform: scaleX(1);
      }

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -5px;
        left: 0;
        background-color: #f5af05;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.2s ease-in-out 0s;
      }
    }
    .item {
      position: relative;
      padding: 10px;
    }
  }
  .left1 {
    left: -150%;
  }
  .left3 {
    left: -200%;
  }
  .sub-menu {
    background: #fff;
    border-radius: 5px;
    position: absolute;
    top: 120%;
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
  padding: 6px 40px 6px 10px;
  background: rgba(179, 157, 157, 0.5);
  color: #d5d5d5;
  width: 100%;
}
.search {
  width: 20px;
  height: 20px;
}
.search-cont {
  color: #fff;
  display: flex;
  align-items: center;
  position: relative;
  .search {
    position: absolute;
    right: 4px;
  }
  &.sm-search {
    color: #000;
    padding: 10px 20px;
    input {
      background: #fff;
      color: #000;
      padding-top: 10px;
      padding-bottom: 10px;
      border: 1px solid #999;
    }
    .search {
      right: 26px;
    }
  }
}

.sm-list {
  width: 100%;
  background: #fff;
  position: absolute;
  height: 600px;
  li {
    text-align: left;
    padding: 10px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &:not(:first-child) {
      border-top: 1px solid #aaa;
      .arrow {
        margin-left: 20%;
      }
      span {
        width: 40%;
        margin-left: 10%;
      }
    }
    &:first-child {
      margin-left: 10%;
    }
  }
}
.arrow {
  width: 12px;
  height: 12px;
}

.pos {
  width: 18px;
  height: 18px;
}

.arrow-left {
  transform: rotate(180deg);
}
</style>
