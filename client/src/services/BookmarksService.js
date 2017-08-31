import api from './api'
export default {
  post (bookmark) {
    return api().post('bookmarks', bookmark)
  },
  index (query) {
    return api().get('bookmarks', {params: query})
  },
  delete (bookmarkId) {
    return api().delete(`bookmarks/${bookmarkId}`)
  }
}
