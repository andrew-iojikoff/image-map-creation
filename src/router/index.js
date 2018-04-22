import Vue from 'vue'
import Router from 'vue-router'
import LoadImage from '@/components/LoadImage'
import EditeMap from '@/components/EditeMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoadImage',
      component: LoadImage
    },
    {
      path: '/addMap',
      name: 'EditeMap',
      component: EditeMap
    }
  ]
})
