<template>
  <div class="row">
    <div :class="'col-md-' + list.length / num" v-for="(item, index) in list" :key="index">
      <img src="https://www.xpel.com.cn/uploads/source/51/img/E6p9ucLBAqLrqKVa.jpg" alt="" />
      <h3>
        <span>test</span>
        <i class="fa fa-arrow-right"></i>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["num", "list"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped></style>
