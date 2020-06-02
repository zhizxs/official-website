<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      <p :class="{ needTop: item.head }">
        <span @click="jumpUrl(item.id)">{{ item.title }}</span>
        <i v-if="item.head" @click="changeStatus(index)"> + </i>
      </p>
      <tree-menus v-if="scopesDefault[index]" :list="item.child"></tree-menus>
    </li>
  </ul>
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
