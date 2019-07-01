import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueMintUI from '@/components/Vue-MintUi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        HelloWorld,
        VueMintUI
      }
    }
  ]
})
