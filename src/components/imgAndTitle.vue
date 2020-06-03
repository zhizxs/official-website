<template>
  <div class="row">
    <div :class="'col-md-' + list.length / num" v-for="(item, index) in list" :key="index">
      <img src="" alt="" />
      <p>
        <span>test</span>
        <i class="fa fa-arrow-right"></i>
      </p>
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
