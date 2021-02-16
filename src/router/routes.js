import { createWebHistory, createRouter } from 'vue-router'
import { Note } from '@/pages/Note'
import { Notes } from '@/pages/Notes'
import { Signin } from '@/pages/Signin'
import { Signup } from '@/pages/Signup'

const routes = [
  {
    path: '/',
    name: 'note',
    component: Note,
  },
  {
    path: '/notes',
    name: 'notes',
    component: Notes,
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