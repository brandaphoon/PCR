import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/router/pages/dashboard'
import request from '@/router/pages/request'
import create from '@/router/pages/create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/create',
      name: 'create',
      component: create
    },
    {
      path: '/request',
      name: 'request',
      component: request
    }
  ]
})
