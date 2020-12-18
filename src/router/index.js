import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      requiresAuth: true
    },
    component: Login
  },
  {
    path: '/',
    name: 'Index',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "Home_welcome" */ '@/views/home/Index.vue'),
    children: [{
      path: '/home',
      component: () => import(/* webpackChunkName: "Home_welcome" */ '@/views/home/Home.vue'),
      meta: {
        requiresAuth: true
      },
    },{
      path: '/bill',
      component: () => import(/* webpackChunkName: "Home_welcome" */ '@/views/home/Bill.vue'),
    },{
      path: '/my',
      component: () => import(/* webpackChunkName: "Home_welcome" */ '@/views/home/My.vue'),
    },
    {
      path: '/new',
      meta: {
        requiresAuth: true
      },
      component: () => import(/* webpackChunkName: "Home_welcome" */ '@/views/home/New.vue'),
    }]
  },{
    path: '/register',
    name: 'Register',
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "Login_home_welcome" */ '@/views/Register.vue') 
  },{
    path: '/retrieve',
    name: 'Retrieve',
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "Login_home_welcome" */ '@/views/Retrieve.vue') 
  }
  ,{
    path: '/loan',
    name: 'Loan',
    meta: {
      requiresAuth: true
    },
    component: () =>  import('@/views/Loan.vue')
  }
  ,{
    path: '/loandetail',
    name: 'LoanDetail',
    component: () =>  import('@/views/LoanDetail.vue')
  }
  ,{
    path: '/loandetail2',
    name: 'LoanDetail2',
    component: () =>  import('@/views/LoanDetail2.vue')
  }
  ,{
    path: '/billdetail',
    name: 'BillDetail',
    component: () =>  import('@/views/BillDetail.vue')
  }
  ,{
    path: '/card',
    name: 'Card',
    component: () =>  import('@/views/Card.vue')
  }
  ,{
    path: '/addcard',
    name: 'AddCard',
    component: () =>  import('@/views/AddCard.vue')
  }
  ,{
    path: '/coupon',
    name: 'Coupon',
    component: () =>  import('@/views/Coupon.vue')
  }
  ,{
    path: '/feedback',
    name: 'Feedback',
    component: () =>  import('@/views/Feedback.vue')
  }
  ,{
    path: '/set',
    name: 'Set',
    component: () =>  import('@/views/Set.vue')
  }
  ,{
    path: '/modifypwd',
    name: 'ModifyPWD',
    component: () =>  import('@/views/ModifyPWD.vue')
  }
  ,{
    path: '*',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  routes
})
import { Toast } from 'vant';
router.beforeEach((to,from,next) => {
  if(!to.meta.requiresAuth){
    if(localStorage.getItem('token')){
      next();
    }else{
      Toast({
        message: '请先登录！',
        duration: 1000
      });
      next({path: '/login'});
    }
  }
  else{
    next()
  }
})

export default router
