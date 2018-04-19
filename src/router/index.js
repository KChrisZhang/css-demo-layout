import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloLayout from '@/components/HelloLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloLayout',
      component: HelloLayout
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
