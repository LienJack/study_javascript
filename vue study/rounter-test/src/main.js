// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import DemoHome from './components/DemoHome'
import DemoAbout from './components/DemoAbout'
import DemoContact from './components/DemoContact'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: DemoHome,},
    { path: '/about', component: DemoAbout },
    { path: '/contact', component: DemoContact }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
