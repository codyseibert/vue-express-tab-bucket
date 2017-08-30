import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Songs from '@/components/Songs'
import Logout from '@/components/Logout'
import SongView from '@/components/SongView'
import AddSong from '@/components/AddSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/add',
      name: 'addSong',
      component: AddSong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: SongView
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
