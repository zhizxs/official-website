<template>
  <div class="page-bottom">
    <div class="row big sm">
      <div class="col-md-4">
        <div class="item">
          <div>
            <span class="icon-span"><i class="fa fa-map-marker"></i></span>
            <span class="hidden-md">电子质保查询</span>
          </div>
          <i class="fa fa-arrow-right"></i>
        </div>
      </div>
      <div class="col-md-4">
        <div class="item">
          <div>
            <span class="icon-span"><i class="fa fa-search"></i></span>
            <span class="hidden-md">挑选专业门店</span>
          </div>
          <i class="fa fa-arrow-right"></i>
        </div>
      </div>
      <div class="col-md-4">
        <div class="item">
          <div>
            <span class="icon-span"><i class="fa fa-user-plus"></i></span>
            <span class="hidden-md">成为经销商</span>
          </div>
          <i class="fa fa-arrow-right"></i>
        </div>
      </div>
    </div>
    <tree-menu :list="list"></tree-menu>
  </div>
</template>
<script>
const menu = require("@json/bottom");
import treeMenu from "@components/treeMenu";
export default {
  components: {
    treeMenu
  },
  data() {
    return {
      list: menu
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.page-bottom {
  margin-top: 30px;
  .item {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.big {
  background: #f5af05;
}

@media screen and (max-width: 960px) {
  .sm {
    background: #000;
    i,
    .fa-arrow-right {
      color: #f5af05;
    }
    .hidden-md {
      color: #fff;
    }
  }
}

.icon-span {
  display: inline-block;
  background-color: #323232;
  border-radius: 50%;
  height: 40px;
  line-height: 40px;
  margin-right: 10px;
  vertical-align: middle;
  width: 40px;
  text-align: center;
  i {
    color: #fff;
  }
}
.hidden-md {
  color: #323232;
  font-size: 20px;
}
.fa-arrow-right {
  color: #323232;
  display: inline-block;
  float: none;
  margin-left: 10px;
  text-align: left;
}
</style>
