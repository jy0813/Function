import { createWebHistory, createRouter } from "vue-router";
import detail from './view/detail.vue';
import index from './view/index.vue';
import list from './components/ListMenu.vue';
import error from './view/error.vue';
import author from './components/author.vue';
import comment from './components/comment.vue';

const routes = [
  {
    path: '/detail/:id(\\d+)',
    component: detail,
    children:[
      {
        path:'author',
        component: author,
      },
      {
        path:'comment',
        component: comment,
      },
    ]
  },
  {
    path: '/index',
    component: index,
  },
  {
    path: '/list',
    component: list,
  },
  {
    path: '/:anything(.*)',
    component: error,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 