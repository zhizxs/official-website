<template>
  <div class="show-des">
    <div class="des-content" v-for="(item, index) in info" :key="index">
      <h2 :class="['title', item.data ? '' : 'title-bf']" @click="chooseItem(item.id)">{{ item.head }}</h2>
      <template v-if="item.data">
        <div class="des-content-s" v-for="(v, i) in item.data" :key="i">
          <h3 class="title-s title-bf" @click="chooseItem(v.id)">{{ v.head }}</h3>
          <div v-show="choose == v.id" class="des" v-html="v.info"></div>
        </div>
      </template>
      <template v-else>
        <div v-show="choose == item.id" class="des" v-html="item.info"></div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {
      choose: ""
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
.des-content {
  padding: 25px 25px 5px;
  &:not(:first-child) {
    border-top: 2px solid #ccc;
  }
}
.des-content-s {
  padding: 15px 25px 5px;
}

.title-bf {
  position: relative;
  &:before {
    font-family: fontawesome;
    content: "\f078";
    color: #f5af05;
    font-size: 0.75rem;
    position: absolute;
    left: -25px;
  }
}
.title {
  font-size: 1.5rem;
}
.title-s {
  font-size: 1rem;
}
</style>
