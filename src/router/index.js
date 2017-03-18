import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Show from '@/components/Show'
import Results from '@/components/Results'
import Profile from '@/components/Profile'
import Rank from '@/components/Rank'

Vue.use(Router)

export default new Router({
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
      path: '/rank',
      name: 'Rank',
      component: Rank
    }
  ]
})
