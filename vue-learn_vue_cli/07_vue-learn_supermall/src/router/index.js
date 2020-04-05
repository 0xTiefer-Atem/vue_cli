import Vue from 'vue'
import VueRouter from 'vue-router';
const logo  = () => import( "../components/logo/logo");
const hotCompetitons = ()=> import( "../components/hotCompetitons/hotCompetitons");
const competitor = ()=> import("../components/competitor/competitor");
const team = ()=> import("../components/team/teamConfig");

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
  },
  {
    path: '/com',
    component: competitor,
  },
  {
    path: '/team',
    component: team,
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router
