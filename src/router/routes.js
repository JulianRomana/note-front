import { createWebHistory, createRouter } from 'vue-router'
import { isSignedIn } from '@/store/user-store'
import { Note } from '@/pages/Note'
import { Notes } from '@/pages/Notes'
import { Signin } from '@/pages/Signin'
import { Signup } from '@/pages/Signup'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Note,
    beforeEnter() {
      if(!isSignedIn.value) return '/signin'
    },
  },
  {
    path: '/notes',
    name: 'notes',
    component: Notes,
    beforeEnter() {
      if(!isSignedIn.value) return '/signin'
    },
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router