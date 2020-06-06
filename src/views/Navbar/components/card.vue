<template>
  <div class="card-content">
    <div class="ads" v-if="hasAds">
      <img src="@img/logo.png" alt="" />
      <p>我是小菜鸟？</p>
      <div>
        <h3>成为大神</h3>
        <img src="@img/arrow01.png" alt="" />
      </div>
    </div>
    <div class="menu-card">
      <template v-if="menu[0].length">
        <ul v-for="(items, index) in menu" :key="index">
          <li :class="{ title: item.type }" v-for="(item, index) in items" :key="index + item.id">
            <span>{{ item.title }}</span>
            <span v-if="item.isNew" style="color: red;"> &nbsp;&nbsp;&nbsp;&nbsp;NEW!</span>
            <template v-if="item.child">
              <p v-for="(v, i) in item.child" :key="i + v.id">
                {{ v.title }}
                <span v-if="v.isNew" style="color: red;"> &nbsp;&nbsp;&nbsp;&nbsp;NEW!</span>
              </p>
            </template>
          </li>
        </ul>
      </template>
      <template v-else>
        <ul>
          <li v-for="(items, index) in menu" :key="index + items.id">{{ items.title }}</li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ["menu", "hasAds"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.card-content {
  display: flex;
  color: #000;
  font-weight: normal;
  text-align: left;
  h3 {
    margin: 0;
    font-size: 18px;
  }
  .ads {
    padding: 60px 20px;

    text-align: left;
    background: rgba(0, 0, 0, 0.5);
    div {
      display: flex;
      align-items: center;
      img {
        margin-left: 20px;
        width: 20px;
        height: 20px;
      }
    }
  }
  .menu-card {
    display: flex;
    ul {
      padding: 10px 40px;
    }
    ul:not(:first-child) {
      border-left: 1px solid #ddd;
    }
    li {
      min-width: 200px;
      margin-top: 30px;
    }
    .title {
      font-weight: bold;
      p {
        font-weight: normal;
        margin: 0.5rem 0;
        width: max-content;
      }
    }
  }
}
</style>
