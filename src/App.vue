<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Bottom />
  </div>
</template>
<script>
import Bottom from "./views/Bottom";
import Navbar from "./views/Navbar";
export default {
  name: "navbar",
  components: {
    Navbar,
    Bottom
  }
};
</script>

<style lang="scss">
@import "@style/reset";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
