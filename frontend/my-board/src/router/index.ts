import Vue from 'vue';
import VueRouter from 'vue-router';
import QnaBoardView from '../views/board/QnaBoardView.vue';
import WriteBoardView from '../views/board/WriteBoardView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/board/qna',
    name: 'QnaBoardView',
    component: QnaBoardView,
  },
  {
    path: '/board/write',
    name: 'WriteBoardView',
    component: WriteBoardView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
