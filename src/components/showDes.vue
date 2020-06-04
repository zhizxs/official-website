<template>
  <div class="show-des">
    <div class="des-content" v-for="(item, index) in info" :key="index">
      <div class="title" @click="chooseItem(item.id)">{{ item.title }}</div>
      <div v-show="choose == item.id" class="des" v-html="item.des"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choose: "",
      info: [
        {
          id: 1,
          title: "我是标题",
          des: "我是描述"
        },
        {
          id: 2,
          title: "我是标题",
          des: "我是描述"
        },
        {
          id: 3,
          title: "我是标题",
          des: "我是描述"
        },
        {
          id: 4,
          title: "我是标题",
          des: "我是描述"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    chooseItem(id) {
      this.choose = this.choose == id ? "" : id;
    }
  }
};
</script>
<style lang="scss" scoped>
.show-des {
}
</style>
