import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/home.vue'),
    props: (route:any) => ({ username: route.query.username  }),
  },
  {
    path: '/room',
    component: () => import('@/views/room.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
