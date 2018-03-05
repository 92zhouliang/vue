import Vue from 'vue'
import Router from 'vue-router'
import routes from '@router/routes'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: ()=>import('@/components/HelloWorld')
    },
    {
      path: '/deal-table',
      name: 'DealTable',
      component: ()=>import('@/components/DealTable')
    },
    {
      path: '/shop-table',
      name: 'ShopTable',
      component: ()=> import('@/components/ShopTable')
    }
    
  ]
})
