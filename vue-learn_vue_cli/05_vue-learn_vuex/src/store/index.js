//使用vuex练习
//1. 引入插件
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";

//2. 使用Vue插件
Vue.use(Vuex);


 //里面放入的对象参数
  //存放一些变量的值
const state = {
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
  };
//3. 创建Vuex对象
const store = new Vuex.Store({

  state,

  //定义一些对state里面变量的方法函数
  mutations,
  //官方强调不能再mutations，里进行异步操作
  //推荐actions，类似mutations,但是是用来替代mutations进行异步操作的
  actions,
  getters,

  //vue在运行时会自动将a模块加载到state中
  modules: {
    //分模块进行操作
    //当state里的数据过多，分类抽离出来，各自进行操作
    a: moduleA
  }
});

//4. 导出Vuex创建的对象
export default store
//5. 在main.js中挂在store


//补充: 对象的解构
const  obj = {
  name: 'asd',
  age: 18
};

const {name, age} = obj;
console.log(name);
console.log(age);
