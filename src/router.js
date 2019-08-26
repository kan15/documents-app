import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   component: () => import('./views/Dashboard.vue'),
    // },
    {
      path: '/contracts',
      name: 'contracts',
      component: () => import('./views/Contracts.vue'),
        children: [
          {
            path: ':id/edit',
            name: 'contract-form',
            component: () => import('./views/Contract-form.vue'), props: true,
          },
        ]
    },

    {
      path: '/invoices',
      name: 'invoices',
      component: () => import('./views/Invoices.vue')
    },
    {
      path: '/acts',
      name: 'acts',
      component: () => import('./views/Acts.vue')
    },
  ]
})
