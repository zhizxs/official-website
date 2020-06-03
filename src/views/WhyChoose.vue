<template>
  <div class="why">
    <div class="title-background">
      <div class="mask">
        <h1>为何选择XPEL</h1>
      </div>
    </div>
    <div class="row why-info">
      <div class="col-md-2"></div>
      <div class="col-md-8" align="center">
        <div>
          <p>在XPEL，我们不仅仅是一个企业，我们也是汽车保护的爱好者。凭借我们所做的一切，我们将质量和声誉置于行业前沿，并自1997年以来一直这样做。我们的全球装贴团队都由有能力和训练有素的技术人员组成。我们提供的产品经过精心测试，选用优质的原材料，全新的制造工艺。即使是最恶劣的条件下使用，同时保持漆面最佳的外观。相信XPEL是您的爱车漆面保护的屏障。</p>
        </div>
        <div class="landing-button-row">
          <p class="btn btn-locate"><i class="fa fa-map-marker"></i>挑选专业门店</p>
          <p class="btn btn-dealer">成为经销商</p>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
    <h1>我们提供什么</h1>
    <div class="why-content">
      <art-and-img></art-and-img>
      <art-and-img></art-and-img>
      <art-and-img></art-and-img>
      <art-and-img></art-and-img>
    </div>
    <!-- 专题报道 -->
    <div class="topic">
      <h2>专题报道</h2>
      <list-item :list="video"></list-item>
    </div>
  </div>
</template>

<script>
import artAndImg from "@components/artAndImg";
import listItem from "./Home/components/listItem.vue";
export default {
  data() {
    return {
      video: {
        title: "",
        id: "",
        button: "",
        hasVideo: "1",
        child: [
          {
            id: "",
            icon: "",
            img: "@img/logo.png",
            title: "Ferrari 458",
            subTitle: "全车保护及更多"
          },
          {
            id: "",
            icon: "",
            img: "@img/logo.png",
            title: "LUX PLUS",
            subTitle: "行业领先的漆面保护膜"
          },
          {
            id: "",
            icon: "",
            img: "@img/logo.png",
            title: "PRIME XR PLUS",
            subTitle: "窗膜能阻挡98%的红外线"
          }
        ]
      }
    };
  },
  components: { artAndImg, listItem },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.title-background {
  height: 425px;
}
@media only screen and (min-width: 768px) {
  .title-background {
    height: 345px;
  }
}

.why-info {
  margin-top: 60px;
}
h1 {
  margin: 60px 0;
}

.btn {
  letter-spacing: 0.03em;
  font-size: 1rem;
  text-align: center;
  line-height: 1;
  padding: 20px 24px;
  display: block;
  margin-bottom: 10px;
}

.btn-locate {
  color: #1c1b1b;
  font-weight: 600;
  text-transform: uppercase;
  background: #f5af05;
}

.btn-dealer {
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  background: #1c1b1b;
}

.btn {
  display: inline-block;
}

.btn:last-child {
  margin-left: 15px;
}

@media screen and (max-width: 960px) {
  .btn:last-child {
    margin-left: 5px;
  }
}

.title-background {
  text-align: center;
  width: 100%;
  max-width: 100%;
  background-size: cover !important;
  margin: auto;
  background-repeat: no-repeat !important;
  background-position: center center;
  position: relative;
}

.mask {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.35);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.why-content {
  text-align: left;
  width: 90%;
  margin: 0 auto;
}

.topic {
  margin-top: 120px;
  background: #000;
  color: #fff;
  font-weight: 600;
  padding: 40px 0;
}
</style>
