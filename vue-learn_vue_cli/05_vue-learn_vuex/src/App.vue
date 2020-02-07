<template>
  <div id="app">
    <h3>------------App内容-------------</h3>
    <h2>{{message}}</h2>
    <button @click="addCount">+</button>
    <h2>{{$store.state.counter}}</h2>
    <button @click="subCount">-</button>

    <h4>------------HelloVuex内容----------------</h4>
    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return {
        message: "App组件",
      }
    },
    methods: {
      //利用函数调用Vuex里的mutations里的方法
      addCount() {
        this.$store.commit('add')
      },
      subCount() {
        this.$store.commit('sub')
      }
    }
  }
</script>

<style>
</style>
