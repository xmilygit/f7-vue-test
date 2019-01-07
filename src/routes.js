import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

import accountlist from './pages/accountlist.vue';
import account from './pages/account.vue'
import addaccount from './pages/addaccount.vue'
import importaccount from './pages/import.vue';
import schooltermlist from './pages/schoolterm/list.vue';
import schooltermadd from './pages/schoolterm/add.vue';
import subjectlist from './pages/Subject/list.vue';
import subjectadd from './pages/Subject/add.vue';
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
    path:'/account/add',
    component:addaccount
  },
  {
    path:'/account/import',
    component:importaccount,
  },
  {
    path:'/account/:id',
    component:account,
  },
  {
    path:'/mark/schoolterm/',
    component:schooltermlist,
  },
  {
    path:'/mark/schoolterm/add/',
    component:schooltermadd,
  },
  {
    path:'/subject/list/:term',
    component:subjectlist,
  },
  {
    path:'/subject/add/',
    component:subjectadd,
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
