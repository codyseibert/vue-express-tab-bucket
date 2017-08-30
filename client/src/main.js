import router from './router'

Vue.config.productionTip = false

import Vue from 'vue'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
import App from './App'
import store from './store/store'

Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
