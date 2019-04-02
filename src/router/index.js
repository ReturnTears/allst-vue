import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/MainPage'
import TaskTotal from '@/components/TaskTotal'
import LabourTotal from '@/components/LabourTotal'
import MaterialTotal from '@/components/MaterialTotal'
import CurrDayProdInfo from '../components/CurrDayProdInfo'
import VideoPage from '../components/VideoPage'
import BIMPage from '../components/BIMPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/task',
      name: 'TaskTotal',
      component: TaskTotal
    },
    {
      path: '/labour',
      name: 'LabourTotal',
      component: LabourTotal
    },
    {
      path: '/material',
      name: 'MaterialTotal',
      component: MaterialTotal
    },
    {
      path: '/prod',
      name: 'CurrDayProdInfo',
      component: CurrDayProdInfo
    },
    {
      path: 'video',
      name: 'VideoPage',
      component: VideoPage
    },
    {
      path: 'bim',
      name: 'BIMPage',
      component: BIMPage
    }
  ]
})
