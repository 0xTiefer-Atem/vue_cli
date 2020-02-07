//使用vuex练习
//1. 引入插件
import Vue from 'vue'
import Vuex from 'vuex'

//2. 使用Vue插件
Vue.use(Vuex);

//3. 创建Vuex对象
const store = new Vuex.Store({

  //里面放入的对象参数

  //存放一些变量的值
  state: {
    counter: 1000,
    students: [
      {id: 1, name: 'wq', age: 18},
      {id: 2, name: 'kobe', age: 34},
      {id: 3, name: 'james', age: 29},
      {id: 4, name: 'curry', age: 10}
    ]
  },

  //定义一些对state里面变量的方法函数
  mutations: {
    //上面的state是自动往这里面的函数里传入的
    add(state) {
      state.counter++
    },
    sub(state) {
      state.counter--
    },

    //额外参数叫做payload 载荷
    addCount(state, count) {
      state.counter += count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    }
  },
  actions: {

  },
  getters: {
    //相当于计算属性，对state里的变量进行某些操作后再返回
    //state默认传入
    powerCounter(state){
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },

    //里面还可以传入getters
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },

    //在函数里面传入自己需要的参数
    moreAgeStu(state) {
      // return function (age) {
      //   return state.students.filter( s => s.age > age)
      // }

      //或者简化写成箭头函数
      return age => state.students.filter( s => s.age > age)
    }

  },
  modules: {

  }
});

//4. 导出Vuex创建的对象
export default store
//5. 在main.js中挂在store
