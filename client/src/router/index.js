import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Songs from '@/components/Songs'
import Logout from '@/components/Logout'
import ViewSong from '@/components/ViewSong'
import AddSong from '@/components/AddSong'
import EditSong from '@/components/EditSong'

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
      path: '/songs/:songId/edit',
      name: 'editSong',
      component: EditSong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
