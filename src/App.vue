<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <vue-drawer-layout ref="drawer" :z-index="0" :content-drawable="true" :backdrop-opacity-range="[0, 0.4]" @mask-click="handleMaskClick">
      <div class="drawer-content" slot="drawer">
        <mult-list></mult-list>
      </div>
      <div class="page-container" slot="content">
        <Navbar @changeMenu="changeMenu" />
        <router-view></router-view>
        <Bottom />
      </div>
    </vue-drawer-layout>
  </div>
</template>
<script>
import Bottom from "./views/Bottom";
import Navbar from "./views/Navbar";
import multList from "@components/multList";
export default {
  name: "navbar",
  components: {
    Navbar,
    Bottom,
    multList
  },
  methods: {
    handleMaskClick() {
      this.$refs.drawer.toggle(false);
    },
    changeMenu() {
      this.$refs.drawer.toggle(true);
    }
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
.page-container {
  height: 100%;
  overflow-y: auto;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
}

.title-background {
  height: 425px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  background-size: cover !important;
  margin: auto;
  background-repeat: no-repeat !important;
  background-position: center center;
  position: relative;
}

@media only screen and (min-width: 768px) {
  .title-background {
    height: 345px;
  }
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
</style>
