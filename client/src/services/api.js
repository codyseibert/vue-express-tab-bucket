import axios from 'axios'
import store from '../store/store'
// import base64 from 'base-64'

export default () =>
  axios.create({
    baseURL: `http://localhost:8081/`,
    headers: {
      Authorization: `Bearer ${store.basic}`
    }
  })
