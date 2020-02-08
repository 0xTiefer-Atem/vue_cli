import Vue from 'vue'
import App from './App'
//1. 导入axios框架
import axios from 'axios'

//2. 使用axios

//简单get方法
// axios({
//   url: 'http://123.207.32.32:8000/home/multdata',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// });

//含有参数的get方法(1)
// axios({
//   url: 'http://123.207.32.32:8000/home/multdata?k1=v1&k2=v2',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// });

//含有参数的get方法(2) get请求参数拼接
// axios({
//   url: 'http://123.207.32.32:8000/home/multdata',
//   method: 'get',
//   params: {
//     key1: 'value1',
//     key2: 'value2'
//
//   }
// }).then(res => {
//   console.log(res);
// });

//post方法
axios({
  url: 'http://123.207.32.32:8000/home/multdata?k1=v1&k2=v2',
  method: 'post',
  data: 'json格式'
}).then(res => {
  console.log(res);
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
