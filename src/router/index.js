import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AsynchAwait from '@/views/AsynchAwait'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/await',
      name: 'AsynchAwait',
      component: AsynchAwait
    }
  ]
})
