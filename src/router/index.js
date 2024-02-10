import { createRouter, createWebHistory } from 'vue-router'
import SharedFeedback from '../views/shared-feedback.vue';
import Dashboard from '@/layout/Dashboard.vue';
import NotFound from '@/views/notFound.vue';
import Login from '@/views/login.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/shared-feedback',
  component:Dashboard,
  children:[
    {
      path: '/shared-feedback', 
    name: 'shared-feedback',
  component: SharedFeedback
},
{
  path: '/shared-feedback/:id', 
name: 'user-feedback',
component: () => import('@/views/user-feedback.vue')
},
  {
    path: '/my-feedback', 
    name: 'my-feedback',
  component: ()=> import('@/views/my-feedback.vue')
},
  {
    path: '/team-feedback', 
    name: 'team-feedback',
  component: ()=> import('@/views/team-feedback.vue')
},
{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]
  },
  
  { path: "/login", name: 'login', component: Login },

    
  ],

    
    },
    
  
)
export default router;
    