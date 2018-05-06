import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/home'
import Vote from 'views/vote'
import My from 'views/my'
import New from 'views/new'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      iconClass: 'icon-home1',
      name: '主页'
    },
    {
      path: '/',
      component: Vote,
      iconClass: 'icon-toupiao1',
      name: '投票'
    },
    {
      path: '/new',
      component: New,
      iconClass: 'icon-zengjia',
      name: '参加'
    },
    {
      path: '/my',
      component: My,
      iconClass: 'icon-me',
      name: '我的'
    }
  ]
})
