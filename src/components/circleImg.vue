<template>
  <div class="row circle-img">
    <div class="col-md-4" v-for="(item, index) in list" :key="index">
      <div class="item">
        <img :src="item.img" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.des }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          img: "https://www.xpel.com.cn/uploads/source/51/img/E6p9ucLBAqLrqKVa.jpg",
          title: "我是标题",
          des: "我是一段描述"
        },
        {
          img: "https://www.xpel.com.cn/uploads/source/51/img/E6p9ucLBAqLrqKVa.jpg",
          title: "我是标题",
          des: "我是一段描述"
        },
        {
          img: "https://www.xpel.com.cn/uploads/source/51/img/E6p9ucLBAqLrqKVa.jpg",
          title: "我是标题",
          des: "我是一段描述"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.circle-img {
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
  }
  p {
    margin-top: 10px;
  }
}
</style>
