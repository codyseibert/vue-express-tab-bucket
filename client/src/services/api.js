import axios from 'axios'
import store from '../store/store'
// import base64 from 'base-64'

export default () => {
  const connector = axios.create({
    baseURL: `http://localhost:8081/`,
    headers: {
      Authorization: `Bearer ${store.state.basicAuthHeader}`
    }
  })
  connector.post = (function (fun) {
    return function () {
      return fun.apply(this, arguments)
        .then((r) => r.data)
        .catch((error) => {
          return Promise.reject({
            status: error.response.status,
            data: error.response.data
          })
        })
    }
  })(connector.post)
  connector.get = (function (fun) {
    return function () {
      return fun.apply(this, arguments)
        .then((r) => r.data)
        .catch((error) => {
          return Promise.reject({
            status: error.response.status,
            data: error.response.data
          })
        })
    }
  })(connector.get)
  connector.delete = (function (fun) {
    return function () {
      return fun.apply(this, arguments)
        .then((r) => r.data)
        .catch((error) => {
          return Promise.reject({
            status: error.response.status,
            data: error.response.data
          })
        })
    }
  })(connector.delete)
  return connector
}
