import Vue from 'vue'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'
import store from './store/store'

Vue.use(VueRouter)
Vue.use(Vuetify)

import Login from './components/Login.vue'

const router = new VueRouter({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
