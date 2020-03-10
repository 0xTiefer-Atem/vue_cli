import Vue from 'vue'
import VueRouter from 'vue-router';
const logo  = () => import( "../components/logo/logo");
Vue.use(VueRouter);


const routes = [
  {
    path: '',
    redirect: '/logo'
  },
  {
    path: '/logo',
    component: logo,
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router
