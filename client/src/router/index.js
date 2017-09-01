import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'
import Songs from '@/components/songs/Songs'
import Logout from '@/components/logout/Logout'
import ViewSong from '@/components/viewSong/ViewSong'
import AddSong from '@/components/addSong/AddSong'
import EditSong from '@/components/editSong/EditSong'
import About from '@/components/about/About'
import store from '@/store/store'

Vue.use(Router)

const verifyUserIsLoggedIn = (to, from, next) => {
  if (!store.state.isUserLoggedIn) {
    next({
      name: 'login'
    })
  } else {
    next()
  }
}

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
      component: AddSong,
      beforeEnter: verifyUserIsLoggedIn
    },
    {
      path: '/songs/:songId/edit',
      name: 'editSong',
      component: EditSong,
      beforeEnter: verifyUserIsLoggedIn
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
