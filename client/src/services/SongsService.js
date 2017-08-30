import api from './api'
export default {
  post (song) {
    return api().post('songs', song)
  },
  index () {
    return api().get('songs')
  },
  show (songId) {
    return api().get(`songs/${songId}`)
  }
}
