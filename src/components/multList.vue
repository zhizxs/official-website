<template>
  <div class="mult-list">
    <div class="choose" @click="chooseShop">
      <img class="pos" src="@img/position.png" alt="" />
      <span>挑选门店</span>
    </div>

    <div class="back" @click="back" v-show="currentIdArr.length">
      <img class="arrow arrow-left" src="@img/arrow01.png" alt="" />
      <span>返回</span>
    </div>
    <p v-for="(items, index) in currentMenu" :key="index + items.id">
      <i @click="changeItem(index)">{{ items.title }}</i>
      <span v-if="items.child || items.type">
        <img class="arrow" src="@img/arrow01.png" alt="" />
      </span>
    </p>
  </div>
</template>

<script>
const menu = require("@json/header.json");
export default {
  data() {
    return {
      menu: menu,
      currentMenu: [],
      currentIdArr: []
    };
  },
  created() {},
  mounted() {
    this.currentMenu = menu;
  },
  methods: {
    changeItem(index) {
      console.log("index", index);
      console.log("menu", this.currentMenu[index]);
      // 没有child且没有 type 直接跳走
      // 有child 遍历 则 child == currentMenu
      this.currentIdArr.push(this.currentMenu[index].id); //  TODO 注意重复添加
      if (this.currentMenu[index].child) {
        let arr = this.currentMenu[index].child.flat();
        this.currentMenu = arr;
      }
    },
    back() {},
    chooseShop() {}
  }
};
</script>
<style lang="scss" scoped>
.mult-list {
  width: 100%;
  background: #fff;
  position: absolute;
  height: 600px;
  p,
  .choose,
  .back {
    text-align: left;
    padding: 13px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  p {
    &:not(:first-child) {
      border-top: 1px solid #aaa;
      .arrow {
        margin-left: 20%;
      }
      i {
        width: 70%;
      }
      span {
        width: 20%;
      }
    }
  }
  .choose {
    background: #000;
    color: #fff;
  }
  .pos {
    width: 18px;
    height: 18px;
  }

  .arrow-left {
    transform: rotate(180deg);
  }
  .arrow {
    width: 12px;
    height: 12px;
  }
}
</style>
