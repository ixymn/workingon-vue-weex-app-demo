import Router from 'vue-router'

import index from '../pages/index.vue'
import login from '../pages/login/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      component:index,
      // children: [
      //   { path:"/index",
      //    component:index,
      //   }
      // ]
    },
    {path:'/login',component:login}
  ]
})
