//使用vuex练习
//1. 引入插件
import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutations-types'

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
    ],
    info: {
      name: 'weer',
      age: 18,
      height: 1.78
    }
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
    addCount(state, payLoad) {
      //普通风格操作
      // state.counter += payLoad;

      //特殊风格操作
      state.counter += payLoad.num;
    },
    addStudent(state, stu) {
      state.students.push(stu)

      //当动态的往state里面添加数据时，
      // 利用 Vue.set(); 可以实现响应式添加数据
      // Vue.delete(); 可以实现动态删除数据
    },
    [INCREMENT]() {

    }
  },
  //官方强调不能再mutations，里进行异步操作
  //推荐actions，类似mutations,但是是用来替代mutations进行异步操作的
  actions: {
    //context 就相当于store 对象
    aUpdateSate(context, payload) {
      setTimeout(() => {
        context.commit('');
        console.log(payload);
      }, 1000)
    }
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
