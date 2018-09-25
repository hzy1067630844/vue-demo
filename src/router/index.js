import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import message from '@/components/message.vue'
import shopping from '@/components/shopping.vue'
import use from '@/components/use.vue'
import newsList from '@/components/childComponents/newsList.vue'
import coupon from '@/components/childComponents/coupon.vue'
import iphoneXs from '@/components/childComponents/iphoneXs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      component: home,
    },
    {
      path: '/message',
      component: message
    },
    {
      path: '/shopping',
      component: shopping
    },
    {
      path: '/use',
      component: use
    },
    {
      path: '/home/newsList',
      component: newsList
    },
    {
      path: '/home/coupon',
      component: coupon
    },
    {
      path: '/home/iphoneXs',
      component: iphoneXs,
      name:'iphoneXs'
    }  
    
    
  ]
})
