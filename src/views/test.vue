<template>
  <div>
    <show-des></show-des>
    <circle-img></circle-img>
    <mult-select :info="pro"></mult-select>
  </div>
</template>

<script>
const pro = require("@json/area.json");
import showDes from "@components/showDes";
import circleImg from "@components/circleImg";
import multSelect from "@components/multSelect";
export default {
  data() {
    return {
      pro: pro
    };
  },
  components: { showDes, circleImg, multSelect },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped></style>
