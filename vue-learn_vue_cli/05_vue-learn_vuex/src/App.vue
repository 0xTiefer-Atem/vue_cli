<template>
  <div id="app">
    <h3>------------App内容-------------</h3>
    <h2>{{message}}</h2>
    <button @click="addCount">+</button>
    <h2>{{$store.state.counter}}</h2>
    <button @click="subCount">-</button>
    <button @click="addCount1(5)">+5</button>
    <button @click="addCount1(10)">+10</button>
    <button @click="addStu">添加学生</button>

    <h4>------------App  getter相关内容----------------</h4>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(8)}}</h2>

    <h4>------------HelloVuex内容----------------</h4>
    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import {INCREMENT} from './store/mutations-types'
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
        this.$store.commit(INCREMENT);
      },
      subCount() {
        this.$store.commit('sub')
      },
      addCount1(num) {
        //普通提交风格
        // this.$store.commit('addCount', num)

        //特殊提交风格
        this.$store.commit({
          type: 'addCount',
          num
        })

      },
      addStu() {
        const stu = {
          id: 5,
          name: 'qwe',
          age: 13
        }
        // this.$store.commit('addStudent', stu)
        //调用store里的actions函数 也可以在后面传递参数
        this.$store.dispatch('aUpdateSate', '参数');
      }
    }
  }
</script>

<style>
</style>
