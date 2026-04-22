import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ContactPage from '../views/ContactPage.vue'
import CalendarPage from '../views/CalendarPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/contact', name: 'contact', component: ContactPage },
    { path: '/calendrier', name: 'calendar', component: CalendarPage },
  ],
})

export default router
