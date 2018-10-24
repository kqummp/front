import Vue from 'vue'
import Router from 'vue-router'

import Sign from '@/pages/sign.vue'
import Main from '@/pages/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sign',
      component:Sign
    },
    {
      path: '/',
      component:Sign
    },
    {
      path: '/std/main/:uid',
      component: Main
    }
  ]
})
