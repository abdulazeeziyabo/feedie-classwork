import { createRouter, createWebHistory } from 'vue-router'
import SharedFeedback from '../views/shared-feedback.vue';
import MyFeedback from '../views/my-feedback.vue';
import TeamFeedback from '../views/team-feedback.vue'
import Dashboard from '@/layout/Dashboard.vue'

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
    path: '/my-feedback', 
    name: 'my-feedback',
  component: ()=> import('@/views/shared-feedback.vue')
},
  {
    path: '/team-feedback', 
    name: 'team-feedback',
  component: ()=> import('@/views/team-feedback.vue')
}
  ]
  }
        
    
  ],

    
    },
    
  
)
export default router;
    