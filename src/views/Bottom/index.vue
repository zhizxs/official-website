<template>
  <div>
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
