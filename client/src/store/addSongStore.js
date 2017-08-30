export default {
  state: {
    title: null,
    artist: null,
    genre: null,
    youtubeId: null,
    lyrics: null,
    tab: null
  },
  mutations: {
    setFieldInAddSongForm (state, message) {
      state[message.key] = message.value
    },
    clearAddSongForm (state) {
      Object.keys(state).forEach((key) => {
        state[key] = null
      })
    }
  },
  actions: {
    setFieldInAddSongForm ({commit}, message) {
      commit('setFieldInAddSongForm', message)
    },
    clearAddSongForm ({commit}) {
      commit('clearAddSongForm')
    }
  }
}
