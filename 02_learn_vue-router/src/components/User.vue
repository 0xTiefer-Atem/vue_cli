<template>
  <div>
    <h2>我是User</h2>
    <h3>我是User内容，哈哈哈哈</h3>
    <h4>{{user_name}}</h4>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "User",
    methods: {
      btnClick() {
        //所有组件都继承自vue的原型
        // console.log(this.$router);
        // console.log(this.$route);
      }
    },
    //获取url上的参数
    computed: {
      user_name() {
        //$route 表示的是此时正在使用的url对应的路由
        return this.$route.params.user_name
      }
    }
  }
</script>

<style scoped>

</style>
