import { createWebHistory, createRouter } from 'vue-router'
import { isSignedIn } from '@/store/user-store'
import { Note } from '@/pages/Note'
import { Notes } from '@/pages/Notes'
import { Signin } from '@/pages/Signin'
import { Signup } from '@/pages/Signup'

const authGuard = () => isSignedIn.value || '/signin'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Note,
    beforeEnter: [authGuard],
  },
  {
    path: '/notes',
    name: 'notes',
    component: Notes,
    beforeEnter: [authGuard],
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