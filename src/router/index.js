import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import InfoPlayer from '../components/InfoPlayer.vue'
import ListLeagues from '../components/ListLeagues.vue'
import EventName from '../components/EventName.vue'
import MileStones from '../components/MileStones.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/player/:id',
      name: 'infoplayer',
      component: InfoPlayer
    },
    {
      path: '/list',
      name: 'list',
      component: ListLeagues
    },
    {
      path: '/event',
      name: 'event',
      component: EventName
    },
    {
      path: '/stones/:id',
      name: 'stones',
      component: MileStones
    },
  ]
})

export default router
