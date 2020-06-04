<template>
  <!-- 页面也用于软件 Soft -->
  <div class="product">
    <div class="title-background">
      <div class="mask">
        <h1>购买XPEL</h1>
      </div>
    </div>
    <div class="pro-container">
      <div class="row">
        <div class="col-md-6">
          <div class="item">
            <a href="http://www.xpel.com.cn/list-2.html">
              <img src="http://www.xpel.com.cn/uploads/source/212/img/4VOOboh3qxLn6Nqt.jpg" class="img-responsive" />
              <h4>漆面保护膜 <i class="fa fa-arrow-right"></i></h4>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="item">
            <a href="http://www.xpel.com.cn/list-91.html">
              <img src="http://www.xpel.com.cn/uploads/source/213/img/V0cxpecdkj74wClA.jpg" class="img-responsive" />
              <h4>汽车车窗膜 <i class="fa fa-arrow-right"></i></h4>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="item">
            <a href="http://www.xpel.com.cn/list-95.html">
              <img src="http://www.xpel.com.cn/uploads/source/214/img/0AaHSdSz4K4P9h1V.jpg" class="img-responsive" />
              <h4>大灯保护膜 <i class="fa fa-arrow-right"></i></h4>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="item">
            <a href="http://www.xpel.com.cn/list-92.html">
              <img src="http://www.xpel.com.cn/uploads/source/215/img/Gdxzp9hN4buMnxsB.jpg" class="img-responsive" />
              <h4>RX抑菌保护膜 <i class="fa fa-arrow-right"></i></h4>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="item">
            <a href="http://www.xpel.com.cn/list-108.html">
              <img src="http://www.xpel.com.cn/uploads/source/216/img/R9DCjeqWzQylnQXb.jpg" class="img-responsive" />
              <h4>其它配套展示 <i class="fa fa-arrow-right"></i></h4>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="item">
            <a href="http://www.xpel.com.cn/list-66.html">
              <img src="http://www.xpel.com.cn/uploads/source/271/img/AJTFFAh1IVDlsCxW.jpg" class="img-responsive" />
              <h4>陶瓷涂层 <i class="fa fa-arrow-right"></i></h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.product {
  @media (min-width: 768px) {
    .pro-container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .pro-container {
      width: 970px;
    }
  }

  @media (min-width: 1200px) {
    .pro-container {
      width: 1170px;
    }
  }

  @media (min-width: 1366px) {
    .pro-container {
      width: 1336px;
    }
  }

  .pro-container {
    box-sizing: border-box;
    padding-right: 15px;
    padding-left: 15px;
    margin: 0 auto;
    margin-top: 80px;
  }

  .item {
    margin-top: 20px;
    h4 {
      text-align: left;
      margin-top: 30px;
      color: #323232;
      font-size: 22px;
    }
    img {
      max-width: 100%;
    }
    a {
      text-decoration: none;
      cursor: pointer;
    }
    i {
      margin-left: 10px;
      font-size: 16px;
      color: #ffc333;
    }
  }
}
</style>
