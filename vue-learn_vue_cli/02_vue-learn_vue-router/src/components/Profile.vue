<template>
  <div>
    <h2>我是Profile</h2>
    <h3>我是Profile内容，12345577</h3>
    get方法传递过来的参数
    <h3>{{obj}}</h3>

    <h3>name: {{name}}</h3>
    <h3>age: {{age}}</h3>


  </div>
</template>

<script>
  export default {
    name: "Profile",
    computed: {
      obj() {
        return this.$route.query;
      },
      name() {
        return this.$route.query.name;
      },
      age() {
        return this.$route.query.age;
      }
    },

    //组件内守卫
    // beforeRouteEnter (to, from, next) {
    //   // 在渲染该组件的对应路由被 confirm 前调用
    //   // 不！能！获取组件实例 `this`
    //   // 因为当守卫执行前，组件实例还没被创建
    // },
    // beforeRouteUpdate (to, from, next) {
    //   // 在当前路由改变，但是该组件被复用时调用
    //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    //   // 可以访问组件实例 `this`
    // },
    // beforeRouteLeave (to, from, next) {
    //   // 导航离开该组件的对应路由时调用
    //   // 可以访问组件实例 `this`
    // }
  }
</script>

<style scoped>

</style>
