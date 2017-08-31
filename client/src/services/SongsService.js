import api from './api'
export default {
  post (song) {
    return api().post('songs', song)
  },
  put (song) {
    return api().put(`songs/${song.id}`, song)
  },
  index (search) {
    if (search === '') search = null
    return api().get('songs', {
      params: {
        search: search
      }
    })
  },
  show (songId) {
    return api().get(`songs/${songId}`)
  }
}
