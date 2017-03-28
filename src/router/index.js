import Vue from 'vue'
import Router from 'vue-router'
import Show from '@/components/Show'
import Results from '@/components/Results'
import Profile from '@/components/Profile'
import Rank from '@/components/Rank'
import Album from '@/components/Album'



Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
  {
    path: '/',
    name: 'Show',
    component: Show
  },
  {
    path: '/result',
    name: 'Results',
    component: Results
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
    {
      path: '/album',
      name: 'Album',
      component: Album
    },


    {
    path: '/rank',
    name: 'Rank',
    component: Rank
  }
]
})

export default router
