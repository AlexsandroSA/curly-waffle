import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import Dashboard from '@/components/Dashboard'
import Terms from '@/components/Terms'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Auth },
    { path: '/login', component: Auth },
    { path: '/dashboard', component: Dashboard },
    { path: '/terms', component: Terms }
  ]
})
