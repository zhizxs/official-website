<template>
  <div>
    <tree-menu :list="list"></tree-menu>
  </div>
</template>
<script>
import treeMenu from "@components/treeMenu";
export default {
  components: {
    treeMenu
  },
  data() {
    return {
      list: [
        {
          name: "黄焖鸡米饭111111111",
          cList: [
            { name: "二级黄焖鸡" },
            {
              name: "one chicken",
              cList: [{ name: "三级黄焖鸡3333", cList: [{ name: "四级黄焖鸡" }] }]
            }
          ]
        },
        { name: "2222222222" },
        {
          name: "黄焖鸡米饭33333333",
          cList: [{ name: "二级黄焖鸡" }, { name: "one chicken" }]
        }
      ]
    };
  },
  methods: {}
};
</script>
