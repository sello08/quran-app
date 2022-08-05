import { createRouter, createWebHashHistory } from 'vue-router'
import ChapterDetails from '../views/ChapterDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
