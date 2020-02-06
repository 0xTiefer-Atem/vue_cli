//配置路由相关信息

import VueRouter from 'vue-router'
import Vue from 'vue'

//正常加载文件
// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";



//路由懒加载,以组件为单位打包js文件,使打包后的js文件更多更小,提高传输速度
const Home = () => import( "../components/Home");
const About = () => import( "../components/About");
const User = () => import( "../components/User");
const HomeNews = () => import("../components/HomeNews");
const HomeMessage = () => import("../components/HomeMessage");
const Profile = () => import('../components/Profile');


//1. 通过 Vue.use(VueRouter),安装插件
Vue.use(VueRouter);

//2. 创建路由对象
const routes = [
  //默认路径直接重定向
  {
    path: '',
    //重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: "首页"
    },
    //子路径就不要加 /
    children: [
      //子路径配置默认路径
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews,
        meta: {
          title: "新闻"
        }
      },
      {
        path: 'message',
        component: HomeMessage,
        meta: {
          title: "消息"
        }
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: "关于"
    },
    //路由独享守卫
    // beforeEnter: (to, from, next) => {
    //   // console.log("进入关于组件");
    //   next();
    // }
  },
  {
    path: '/user/:user_name',
    component: User,
    meta: {
      title: "用户"
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: "档案"
    }
  }
];

const router = new VueRouter({

  //配置url和组件之间的映射关系
  routes,

  //改变浏览器的模式
  mode: 'history'
});

//全局守卫配置
//前置钩子(hook, 回调函数) 路径跳转前执行
// router.beforeEach(((to, from, next) => {
//   //从from跳转到to
//   // console.log(to);
//   document.title = to.matched[0].meta.title;
//   next();
// }));

//后置钩子, 路径跳转后执行
// router.afterEach((to, from) => {
//
// });

//3. 将router对象传入Vue实例中
export default router
