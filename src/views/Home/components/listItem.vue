<template>
  <div :class="['list-content', !list.hasImg && !list.hasVideo ? 'bg-dark' : '']">
    <!-- 展示视频 -->
    <div class="video-content" v-if="list.hasVideo">
      <div class="title title-dark">
        {{ list.title }}
      </div>
      <div class="row item-container ">
        <div class="col-md-4" v-for="(item, index) in list.child" :key="index + item.id">
          <div class="item">
            <img src="@img/s-car.jpg" alt="" />
            <i class="fa fa-play-circle-o"></i>
            <p>{{ item.title }}</p>
            <p>{{ item.subTitle }}</p>
          </div>
        </div>
      </div>
      <button>{{ list.button }}</button>
    </div>

    <!-- 展示图片 -->
    <div class="img-content item-container" v-else-if="list.hasImg">
      <div class="title title-dark">
        {{ list.title }}
      </div>
      <div class="row  ">
        <div class="col-md-4" v-for="(item, index) in list.child" :key="index + item.id">
          <div class="item">
            <img src="@img/s-car.jpg" alt="" />
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
      <button>{{ list.button }}</button>
    </div>

    <div class="row" v-else>
      <div class="col-md-4 title">
        <img src="@img/logo.png" alt="" />
      </div>

      <!-- 正常图文 -->
      <div class="col-md-8 item-container art-content">
        <div class="row">
          <div class="col-md-4" v-for="(item, index) in list.child" :key="index + item.id">
            <div class="item">
              <i class="fa fa-file-text"></i>
              <span>{{ item.title }}</span>
              <i class="fa fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.bg-dark {
  background: #333;
  color: #fff;
}
.row {
  width: 90%;
  margin: 0 auto;
}
.list-content {
  color: #000;
  .title {
    font-size: 30px;
    font-weight: bold;
    color: #f5af05;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 44px;
    }
  }
  .title-dark {
    padding: 60px 0 30px;
    color: #000;
  }
  .item-container {
    .item {
      padding: 10px;
    }
  }
  .video-content {
    .item {
      width: 341px;
      text-align: left;
      position: relative;
      img {
        width: 100%;
      }
      i {
        font-size: 3.75rem;
        color: #f5af05;
        position: absolute;
        left: calc(50% - 25px);
        top: calc(50% - 70px);
        z-index: 9;
      }
    }
  }
  .art-content {
    color: #ffffff;
    padding: 30px 0;
    span {
      margin: 0 5px;
    }
    .fa-arrow-right {
      margin-left: 5px;
      color: #f5af05;
    }
  }
  .img-content {
    img {
      width: 384px;
    }
  }
  button {
    display: inline-block;
    outline: none;
    border: 0;
    border-radius: 5px;
    padding: 15px 18px;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    color: #1c1b1b;
    text-transform: uppercase;
    background: #f5af05;
  }
}
</style>
