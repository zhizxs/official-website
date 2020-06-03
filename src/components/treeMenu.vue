<template>
  <div class="list-content">
    <div class="big">
      <div class="item" v-for="(item, index) in list" :key="index">
        <p>{{ item.title }}</p>
        <ul>
          <li v-for="(v, i) in item.child" :key="i">{{ v.title }}</li>
        </ul>
      </div>
    </div>
    <ul class="sm">
      <li v-for="(item, index) in list" :key="index">
        <p :class="{ needTop: item.head && index }">
          <span @click="jumpUrl(item.id)">{{ item.title }}</span>
          <i v-if="item.head" @click="changeStatus(index)"> + </i>
        </p>
        <tree-menus v-if="scopesDefault[index]" :list="item.child"></tree-menus>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "treeMenus",
  props: {
    list: Array
  },
  data() {
    return {
      scopesDefault: [],
      scopes: []
    };
  },

  methods: {
    changeStatus(index) {
      if (this.scopesDefault[index] == true) {
        this.$set(this.scopesDefault, index, false);
      } else {
        this.$set(this.scopesDefault, index, this.scopes[index]);
      }
    },
    scope() {
      this.list.forEach((item, index) => {
        this.scopesDefault[index] = false;
        if ("child" in item) {
          this.scopes[index] = true;
        } else {
          this.scopes[index] = false;
        }
      });
    },
    jumpUrl(id) {}
  },
  created() {
    this.scope();
  }
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 960px) {
  .big {
    display: none !important;
  }
  .sm {
    display: block !important;
  }
}
.list-content {
  background: #000;
}
.sm {
  display: none;
}
.big {
  display: flex;
  height: 100%;
  justify-content: space-around;
  .item {
    text-align: left;
    min-width: 18%;
    p {
      color: #fff;
      border-bottom: 2px solid #f5af05;
      margin-bottom: 15px;
      padding: 12px 0;
      width: 150px;
    }
  }
  ul {
    padding: 0;
  }
}

ul {
  background: #000;
  color: #fff;
  padding: 10px;
  p {
    display: flex;
    padding: 10px 5px;
    margin: 0;
    justify-content: space-between;
  }
  .needTop {
    border-top: 1px solid #777;
  }
  i {
    color: yellowgreen;
  }
}
</style>
