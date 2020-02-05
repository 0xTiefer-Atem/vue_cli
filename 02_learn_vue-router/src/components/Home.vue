<template>
  <div>
    <h2>我是Home</h2>
    <h3>呵呵呵呵</h3>
    <router-link to="/home/news" tag="button">新闻</router-link>
    <router-link to="/home/message" tag="button">消息</router-link>
    <router-view></router-view>
<!--    <h2>{{message}}</h2>-->
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        message: 'hello',
        path: "/home/news"
      }
    },

    //组件生命周期中的回调函数
    created() {
      console.log("home created");
    },
    mounted() {
      // console.log("mounted");
    },
    updated() {
      // console.log("updated");
    },
    destroyed() {
      console.log("home destroy");
    },

    //这两个函数，只有该组件被保存了状态使用了keep-alive时，才是有效的
    activated() {
      // this.$router.replace(this.path)
    },
    deactivated() {

    }
    // beforeRouteLeave(to, from, next)  {
    //   this.path = this.$route.path;
    //   next();
    // }
  }
</script>

<style scoped>

</style>
