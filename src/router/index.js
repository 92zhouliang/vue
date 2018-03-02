import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DealTable from '@/components/DealTable'
import ShopTable from '@/components/ShopTable'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/deal-table',
      name: 'DealTable',
      component: DealTable
    },
    {
      path: '/shop-table',
      name: 'ShopTable',
      component: ShopTable
    }
    
  ]
})
