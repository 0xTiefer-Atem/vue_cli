<template>
  <div>
    <h2>{{$store.state.counter}}</h2>


    <h4>------------state里的counter取平方----------------</h4>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>

  </div>
</template>

<script>
  export default {
    name: "HelloVuex"
  }
</script>

<style scoped>

</style>
