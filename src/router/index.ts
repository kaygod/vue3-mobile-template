import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/Login/index.vue';
import Tabs from '../views/Tabs/index.vue';
import Homepage from '../views/Homepage/index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Tabs',
    component: Tabs,
    children: [
      {
        path: '',
        name: 'Homepage',
        component: Homepage,
      }
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    /*meta: {
      hiddenTab: true, //隐藏tab
    }*/
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

/*router.beforeEach((to, from, next) => {
  const { need_login = false } = to.meta;
  const { user_info } = store.state; //获取用户的登录信息
  if (need_login && !user_info) {
    // 如果页面需要登录但又没有登录跳到登录页面
    const next_page = to.name as string;
    next({
      name: 'Login',
      params: {
        redirect_url: next_page,
        ...from.params,
      },
    });
  } else {
    //不需要登录直接放行
    next();
  }
});*/

export default router;
