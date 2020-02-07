<template>
  <div id="app">
    <h3>------------App内容-------------</h3>
    <h2>{{message}}</h2>
    <button @click="$store.state.counter++">+</button>
    <h2>{{$store.state.counter}}</h2>
    <button @click="$store.state.counter--">-</button>

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
    }
  }
</script>

<style>
</style>
