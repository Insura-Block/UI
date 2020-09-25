import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../views/Signup.vue';
import InsurancePlan from '../views/InsurancePlan.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
      path: '/signup/:type',
      name: 'signup',
      component: SignUp,
      meta: { title: 'Sign up' }
  }, {
      path: '/new/insurance-plan',
      name: 'insurancePlan',
      component: InsurancePlan
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    if(to.meta && to.meta.title) document.title = to.meta.title + " | Insura Block";
    else document.title = 'Insura Block';
    next();
});

export default router
