import { createRouter, createWebHistory } from  'vue-router'

//组件模块
import SuspenseDemo from './components/SuspenseDemo'
import TeleportDemo from './components/TeleportDemo'
import FragmentDemo from './components/FragmentDemo'
import TodoMvcDemo from './components/TodoMvcDemo'
import VueCli from './components/VueCli'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/SuspenseDemo',
      name: 'SuspenseDemo',
      component: SuspenseDemo
    },
    {
      path: '/TeleportDemo',
      name: 'TeleportDemo',
      component: TeleportDemo
    },
    {
      path: '/FragmentDemo',
      name: 'FragmentDemo',
      component: FragmentDemo
    },
    {
      path: '/TodoMvcDemo',
      name: 'TodoMvcDemo',
      component: TodoMvcDemo
    },
    {
      path: '/VueCli',
      name: 'VueCli',
      component: VueCli
    }
  ]
})

export default router