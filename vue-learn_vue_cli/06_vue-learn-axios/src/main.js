import Vue from 'vue'
import App from './App'
//1. 导入axios框架
import axios from 'axios'

//2. 使用axios
axios({
  url: 'http://123.207.32.32:8000/home/multdata'
}).then(res => {
  console.log(res);
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
