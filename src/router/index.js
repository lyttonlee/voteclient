import Vue from 'vue'
import Router from 'vue-router'
// import Home from 'views/home'
// import Vote from 'views/vote'
// import My from 'views/my'
// import New from 'views/new'
const views = name => () => import(`views/${name}`)
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: [
    {
      path: '/home',
      component: views('home'),
      iconClass: 'icon-home1',
      name: '主页'
    },
    {
      path: '/',
      component: views('vote'),
      iconClass: 'icon-toupiao1',
      name: '投票'
    },
    {
      path: '/new',
      component: views('new'),
      iconClass: 'icon-zengjia',
      name: '参加'
    },
    {
      path: '/my',
      component: views('my'),
      iconClass: 'icon-me',
      name: '我的'
    }
  ]
})
