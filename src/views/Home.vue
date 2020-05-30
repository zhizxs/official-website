<template>
  <div class="home">
    <img alt="Vue logo" src="@img/logo.png" />
    <div>
      <button @click="test">test vuex</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
  methods: {
    test() {
      this.$router.push({ name: "testvuex" });
    }
  }
};
</script>
