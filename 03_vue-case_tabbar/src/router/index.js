//0.引入插件
import Vue from "vue"
import VueRouter from "vue-router"

//1. 加载VueRouter插件
Vue.use(VueRouter);
const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const Car = () => import('../views/car/Car');
const Profile = () => import('../views/profile/Profile');
//2. 创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/car',
    component: Car
  },
  {
    path: '/profile',
    component: Profile
  }
];
const router = new VueRouter({
  routes,
  mode: 'history'
});

//3. 导出
export default router

//4. 去main.js引入
