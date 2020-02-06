<template>
  <div id="app">
    <tab-bar>
      <TabBarItem></TabBarItem>
      <TabBarItem></TabBarItem>
      <TabBarItem></TabBarItem>
      <TabBarItem></TabBarItem>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./components/tabbar/TabBar";
  import TabBarItem from "./components/tabbar/TabBarItem";

  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import "./assets/css/base.css";

</style>
