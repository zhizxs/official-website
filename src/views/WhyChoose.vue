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

    <div class="kh text_margin">
      <h1>客户赞许</h1>
      <h3 class="highlight">听听我们的客户和经销商对XPEL的看法。</h3>
      <h3 class="highlight">如果您有话要说？请通过info@XPEL.com.cn向我们提供反馈。</h3>
      <div class="kh-img">
        <circle-img></circle-img>
        <circle-img></circle-img>
      </div>
    </div>
  </div>
</template>

<script>
import circleImg from "@components/circleImg";
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
  components: { artAndImg, listItem, circleImg },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
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

.text_margin {
  margin: 90px 0 30px 0;
  h1 {
    margin: 0;
  }
}
.kh-img {
  margin-top: 30px;
}

.highlight {
  color: #f5af05;
}
</style>
