<template>
  <div class="container">
    <div class="row select-cont">
      <p class="col-md-1"></p>
      <select class="col-md-3" v-model="f.p" @change="sel_pro">
        <option :value="i" v-for="(v, i) in pro" :key="v.id">{{ v.name }}</option>
      </select>
      <p class="col-md-1"></p>
      <select class="col-md-3" v-model="f.c" @change="sel_city">
        <option :value="i" v-for="(v, i) in city" :key="v.id">{{ v.name }}</option>
      </select>
      <p class="col-md-1"></p>
      <select class="col-md-3" v-model="f.cc" v-show="county.length > 0" @change="result">
        <option :value="i" v-for="(v, i) in county" :key="v.id">{{ v.name }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pro: "",
      city: "",
      county: "",
      f: {
        p: 0,
        c: 0,
        cc: 0
      }
    };
  },
  props: {
    info: {
      type: Array,
      default: () => {
        return [];
      }
    },
    pindex: { type: [Number, String], default: 0 },
    cindex: { type: [Number, String], default: 0 },
    ccindex: { type: [Number, String], default: 0 }
  },
  mounted: function() {
    this.pro = this.info;
    this.f.p = this.pindex;
    this.city = this.pro[this.pindex]["child"];
    this.f.c = this.cindex;
    this.county = this.city[this.cindex]["child"];
    this.f.cc = this.ccindex;
    this.result();
  },
  methods: {
    sel_pro: function() {
      this.city = this.pro[this.f.p]["child"];
      this.county = this.city[0]["child"];
      this.f.c = 0;
      this.f.cc = 0;
      this.result();
    },
    sel_city: function() {
      this.county = this.city[this.f.c]["child"] ? this.city[this.f.c]["child"] : [];
      this.f.cc = 0;
      this.result();
    },
    result: function() {
      var re = {
        pro: { sid: this.pro[this.f.p].id, name: this.pro[this.f.p].name, index: this.f.p },
        city: { sid: this.city[this.f.c].id, name: this.city[this.f.c].name, index: this.f.c }
      };
      if (this.county.length > 0) {
        re.county = { sid: this.county[this.f.cc].id, name: this.county[this.f.cc].name, index: this.f.cc };
      } else {
        re.county = { sid: "", name: "", index: "" };
      }
      this.$emit("select", re);
    }
  }
};
</script>
<style scoped>
.select-cont {
  width: 90%;
  margin: 0 auto;
}
select {
  padding: 0.5rem;
  border: 1px solid #eee;
  border-radius: 0.3rem;
  font-size: 1.2rem;
}
</style>
