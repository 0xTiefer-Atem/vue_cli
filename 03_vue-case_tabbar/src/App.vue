<template>
  <div id="app">
    <tab-bar>
      <TabBarItem>
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <div slot="item-name">首页</div>
      </TabBarItem>
      <TabBarItem>
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
        <div slot="item-name">分类</div>
      </TabBarItem>
      <TabBarItem>
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
        <div slot="item-name">购物车</div>
      </TabBarItem>
      <TabBarItem>
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
        <div slot="item-name">我的</div>
      </TabBarItem>
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
