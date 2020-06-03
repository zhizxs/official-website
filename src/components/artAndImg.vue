<template>
  <div class="row art">
    <div class="left col-md-5">
      <img src="https://www.xpel.com.cn/uploads/source/51/img/E6p9ucLBAqLrqKVa.jpg" alt="" />
    </div>
    <div class="right col-md-7">
      <h2 class="title">革命性产品</h2>
      <div class="des">从漆面保护膜到汽车窗膜和大灯保护膜，我们提供的产品都处于技术和质量创新的前沿。</div>
      <div class="contant">
        <p>
          <strong>电子邮件</strong>
          <a class="link-arrow" href="mailto:info@xpel.com.cn">info@xpel.com.cn</a>
        </p>
        <span class="link-pipe">|</span>
        <p>
          <strong>联系电话</strong>
          <a class="link-arrow" href="tel:18622252733">18622252733</a>
        </p>
      </div>
      <div class="btn btn-locate"><i class="fa fa-map-marker"></i>挑选专业门店</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.art {
  margin-top: 50px;
  padding-bottom: 50px;
  border-bottom: 2px solid #aaa;
}
.left {
  img {
    max-width: 100%;
    height: auto;
  }
}

.btn {
  width: 30%;
  letter-spacing: 0.03em;
  font-size: 1rem;
  text-align: center;
  line-height: 1;
  padding: 20px 24px;
  display: block;
  margin-bottom: 10px;
}

@media screen and (max-width: 960px) {
  .right {
    margin-top: 10px;
  }
  .btn {
    width: 50%;
    margin: 0 auto;
  }
}

.btn-locate {
  color: #1c1b1b;
  font-weight: 600;
  text-transform: uppercase;
  background: #f5af05;
}

.contant {
  display: flex;
  justify-content: flex-start;
  align-self: center;
  a {
    color: #f5af05;
    margin-left: 3px;
  }
  a:after {
    content: "\f061";
    margin-left: 5px;
    color: #f5af05;
    font-size: 0.9375rem;
    font-family: fontawesome;
  }
  .link-pipe {
    margin: 0 15px;
  }
}
</style>
