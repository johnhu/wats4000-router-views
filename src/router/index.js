import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
// TODO: Import the Survey component
import Survey from '@/views/Survey'
// TODO: Import the Secret component
import Secret from '@/views/Secret'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/survey',
    name: 'survey',
    component: Survey
  },
  {
    path: '/secret',
    name: 'secret',
    component: Secret
  }
  // TODO: Add the Survey route definition
  // TODO: Add the Secret route definition
]

const router = new VueRouter({
  routes
})

export default router
