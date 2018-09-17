import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

import accountlist from './pages/accountlist.vue';
import account from './pages/account.vue'
import test1 from './pages/test.vue';
import test2 from './pages/test2.vue';

export default [
  {
    path: '/',
    component: HomePage,
    //component:accountlist
    // component:test1,
  },
  {
    path:'/account/:username/:id',
    component:account,
  },
  {
    path:'/test',
    component:test1,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path:'/accountlist/',
    component:accountlist,
  },
  // {
  //   path: '/dynamic-route/blog/:blogId/post/:postId/',
  //   component: DynamicRoutePage,
  // },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
