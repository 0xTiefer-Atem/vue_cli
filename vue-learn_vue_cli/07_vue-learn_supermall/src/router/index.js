import Vue from 'vue'
import VueRouter from 'vue-router';
const logo  = () => import( "../components/logo/logo");
const hotCompetitons = ()=> import( "../components/hotCompetitons/hotCompetitons")
Vue.use(VueRouter);


const routes = [
  {
    path: '',
    redirect: '/logo'
  },
  {
    path: '/logo',
    component: logo,
  },
  {
    path: '/hot',
    component: hotCompetitons,
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router
