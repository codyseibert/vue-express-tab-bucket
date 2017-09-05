import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import addSongStore from '@/store/addSongStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    token: null,
    user: null,
    isDrawerOpen: false,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      state.isUserLoggedIn = token !== null
    },
    setUser (state, user) {
      state.user = user
    },
    setDrawerOpen (state, value) {
      state.isDrawerOpen = value
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setDrawerOpen ({commit}, value) {
      commit('setDrawerOpen', value)
    }
  },
  modules: {
    addSongForm: addSongStore
  }
})

export default store
