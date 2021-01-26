import { createWebHistory, createRouter } from 'vue-router';
import { Note}  from '../pages/Note'
import { Notes } from '../pages/Notes'

const routes = [
  { path: '/', 
    name: 'note', 
    component: Note,
  },
  { path: '/notes', 
    name: 'notes', 
    component: Notes,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router