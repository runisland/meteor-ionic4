import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './home-page';
import ToDoPage from './todo-page';
import MobilePreviewPage from './mobile-preview-page';


Vue.use(VueRouter);

export default [{
  path: '/',
  name: 'Home page',
  component: HomePage,
  props: {},
}, {
  path: '/todo',
  name: 'To-Do List',
  component: ToDoPage,
  props: {},
}, {
  path: '/mobile',
  name: 'Mobile Preview',
  component: MobilePreviewPage,
  props: {},
}];
