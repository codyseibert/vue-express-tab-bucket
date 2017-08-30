import App from './App'
import router from './router'

Vue.config.productionTip = false

import Vue from 'vue'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'

import App from './App'
import store from './store/store'

Vue.use(Vuetify)

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})