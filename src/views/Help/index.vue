<template>
  <div class="help help-container">
    <div class="row ">
      <div class="left-menu col-md-3">
        <ul>
          <li v-for="(item, index) in menu" :key="item.id + index" :class="{ current: currentIdx == index }" @click="checkMenu(index)">{{ item.title }}</li>
        </ul>
      </div>
      <div class="col-md-2 right-menu"></div>
      <div class="col-md-7 right-menu">
        <show-des :info="currentMenu"></show-des>
      </div>
    </div>
  </div>
</template>

<script>
const menu = require("@json/help.json");
import showDes from "@components/showDes";
export default {
  data() {
    return {
      menu: menu,
      currentMenu: [],
      currentIdx: 0
    };
  },
  components: { showDes },
  created() {},
  mounted() {
    this.currentMenu = this.menu[0].des;
  },
  methods: {
    checkMenu(idx) {
      this.currentIdx = idx;
      this.currentMenu = this.menu[idx].des;
    }
  }
};
</script>
<style lang="scss" scoped>
@media (min-width: 768px) {
  .help-container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .help-container {
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .help-container {
    width: 1170px;
  }
}

@media (min-width: 1366px) {
  .help-container {
    width: 1336px;
  }
}

.help-container {
  box-sizing: border-box;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto;
  margin-top: 80px;
  h2 {
    margin: 60px 0 40px;
  }
}

.help {
  text-align: left;
  .left-menu {
    height: fit-content;
    font-size: 1rem;
    border-bottom: 2px solid #323232;
    background: #000;
    margin-bottom: 0;
    color: #fff;
    li {
      position: relative;
      padding: 15px 45px 15px 15px;
      font-weight: 600;
    }
    li:after {
      position: absolute;
      right: 20px;
      line-height: 1.5;
      content: "\f061";
      color: #f5af05;
      font-family: FontAwesome;
    }
  }
  .current {
    color: #f5af05;
  }
}
</style>
