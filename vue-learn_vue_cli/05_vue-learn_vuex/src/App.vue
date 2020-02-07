<template>
  <div id="app">
    <h2>{{message}}</h2>
    <button @click="counter++">+</button>
    <h2>{{counter}}</h2>
    <button @click="counter--">-</button>
  </div>
</template>

<script>
export default {
  name: 'App',
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
