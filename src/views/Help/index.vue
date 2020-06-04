<template>
  <div class="help help-container">
    <div class="row ">
      <div class="left-menu col-md-3">
        <ul>
          <li v-for="item in menu" :key="item.id" :class="{ current: currentId == item.id }">{{ item.title }}</li>
        </ul>
      </div>
      <div class="col-md-9 right-menu"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: []
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
@media (min-width: 768px) {
  .help-container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .help-container {
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .help-container {
    width: 1170px;
  }
}

@media (min-width: 1366px) {
  .help-container {
    width: 1336px;
  }
}

.help-container {
  box-sizing: border-box;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto;
  margin-top: 80px;
  h2 {
    margin: 60px 0 40px;
  }
}

.help {
  text-align: left;
  .left-menu {
    font-size: 1rem;
    border-bottom: 2px solid #323232;
    background: #000;
    margin-bottom: 0;
    color: #fff;
    li {
      position: relative;
      padding: 15px 45px 15px 15px;
      font-weight: 600;
    }
    li:after {
      position: absolute;
      right: 20px;
      line-height: 1.5;
      content: "\f061";
      color: #f5af05;
      font-family: FontAwesome;
    }
  }
  .current {
    color: #f5af05;
  }
}
</style>
