import Vue from 'vue'
import App from './App'
import VueRouter from 'router'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  VueRouter,
  render: h => h(App)
});

// require("./assets/css/base.css")
