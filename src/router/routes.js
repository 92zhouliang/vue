// 不作为Main组件的子页面展示的页面单独写
export const loginRouter = {
    path: '/',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/components/login.vue')
};

export const page404 = {
    path: '/404',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/components/404.vue')
};
export const otherRouter={
    path: '/home',
    name: 'home',
    meta: {
        title: '主应用'
    },
    component: ()=>import('@/components/Main'),
    children:[
        {
            path: '/',
            name: 'HelloWorld',
            component: ()=>import('@/components/HelloWorld')
          },
          {
            path: 'deal-table',
            name: 'DealTable',
            component: ()=>import('@/components/DealTable')
          },
          {
            path: 'shop-table',
            name: 'ShopTable',
            component: ()=> import('@/components/ShopTable')
          }
    ]
}
export const routers = [
    loginRouter,
    otherRouter,
    page404
];