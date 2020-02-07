<template>
  <div id="app">
    <h2>{{message}}</h2>
    <button @click="counter++">+</button>
    <h2>{{counter}}</h2>
    <button @click="counter--">-</button>
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
        counter: 0
      }
    }
  }
</script>

<style>
</style>
