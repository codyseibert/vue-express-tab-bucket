import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import base64 from 'base-64'

import addSongStore from './addSongStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    user: {},
    basicAuthHeader: null,
    isDrawerOpen: false
  },
  mutations: {
    setCredentials (state, credentials) {
      if (!credentials) {
        state.basicAuthHeader = null
      } else {
        state.basicAuthHeader = base64.encode(`${credentials.email}:${credentials.password}`)
      }
    },
    setDrawerOpen (state, value) {
      state.isDrawerOpen = value
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setCredentials ({commit}, credentials) {
      commit('setCredentials', credentials)
    },
    setDrawerOpen ({commit}, value) {
      commit('setDrawerOpen', value)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  },
  modules: {
    addSongForm: addSongStore
  }
})

export default store
