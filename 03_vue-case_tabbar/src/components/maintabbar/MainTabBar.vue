<template>
  <div>
    <tab-bar>
      <!--      link与activeColor都是传递给子组件的数据-->
      <tab-bar-item link="/home" activeColor="">
        <img slot="item-icon" src="../../assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-name">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category" activeColor="">
        <img slot="item-icon" src="../../assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-name">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/car" activeColor="">
        <img slot="item-icon" src="../../assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-name">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile" activeColor="">
        <img slot="item-icon" src="../../assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-name">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "@/components/tabbar/TabBar";
  import TabBarItem from "../tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
