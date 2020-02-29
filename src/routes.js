import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  }
]