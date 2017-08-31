import api from './api'
export default {
  post (recent) {
    return api().post('recents', recent)
  },
  index () {
    return api().get('recents')
  }
}
