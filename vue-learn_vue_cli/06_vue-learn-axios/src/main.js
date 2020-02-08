import Vue from 'vue'
import App from './App'
//1. 导入axios框架
import axios from 'axios'

//2. 使用axios

//axios全局默认配置,举例
//baseURL,之后的url直接拼资源路径就行了
axios.defaults.baseURL = "http://47.107.64.157";

//默认已毫秒为单位
axios.defaults.timeout = 5000



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
// axios({
//   url: 'http://123.207.32.32:8000/home/multdata?k1=v1&k2=v2',
//   method: 'post',
//   data: 'json格式'
// }).then(res => {
//   console.log(res);
// });

//axios同时发送几个并发请求
// axios.all([axios({
//   url: 'url1'
// }), axios({
//   url: 'url2'
// })]).then(results => {
//   console.log(results);
// });


//创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'url1',
//   timeout: 5000
// });
//
// instance1({
//   url: '地址资源1'
// }).then(res => {
//   //处理结果
// });


// const instance2 = axios.create({
//   baseURL: 'url2',
//   timeout: 7000
// });

// instance2({
//   url: '资源地址2',
//   method: 'post',
//   data: 'json数据'
// }).then(res => {
//   console.log(res);
// })


//封装request请求模块
import {request} from './network/request'
request({
  url: '资源地址'
}).then(res => {

}).catch(err => {

});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
