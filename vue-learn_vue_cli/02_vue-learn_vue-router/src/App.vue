<template>
  <div id="app">
<!--    配置路由,在url上配置参数,在对应的组件上获取url上的参数-->
<!--    参数传递 利用get请求形式-->
<!--    全局导航守卫: 修改网页标题 具体代码在index.js界面-->
<!--    生命周期函数，keep-alive 与 activated/deactivated的使用-->

<!--    通过标签来进行路由跳转-->
<!--    其他属性: tag改变router-link标签的样式  -->
<!--    replace 让浏览器无法返回-->
<!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace>关于</router-link>-->

<!--    通过url传递参数-->
<!--    <router-link v-bind:to="'/user/' + user_name" tag="button" replace>用户</router-link>-->
<!--    <router-link :to="{path: '/profile', query: {name: 'wq', age: 18}}" tag="button" replace>档案</router-link>-->

    <!--    用来展示router-link所连接的组件-->

<!--    通过代码进行跳转-->
<!--    通过按钮传在url里递参数-->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

<!--    keep-alive组件用来保存某些组件的状态,保证不会被频繁创建和销毁,与activated/deactivated两个函数连用-->
<!--    exclude属性表示某个组件状态不会被保存-->
<!--    include属性表示只保存某些组件的状态-->
    <keep-alive exclude="Profile,User" include="">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user_name: 'wq'
    }
  },
  methods: {
    homeClick() {
      //$router 是index.js里面 new VueRouter 所返回的对象
      this.$router.replace("/home")
      // console.log("home");
    },
    aboutClick() {
      this.$router.replace('/about')
      // console.log("about");
    },
    userClick() {
      this.$router.replace('/user/'+this.user_name)
      // console.log("user");
    },
    profileClick() {
      this.$router.replace({
        path: '/profile',
        query: {
          name: 'qwe',
          age: 10
        }
      });
      console.log("profile");
    }
  }
}
</script>

<style>
  .router-link-active{
    color: red;
  }
</style>
