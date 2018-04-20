import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloLayout from '@/components/HelloLayout'
import HelloResponsive from '@/components/HelloResponsive'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/layout',
      name: 'HelloLayout',
      component: HelloLayout
    },
    {
      path: '/',
      name: 'HelloResponsive',
      component: HelloResponsive
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
