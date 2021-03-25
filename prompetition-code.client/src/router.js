import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/account/:id',
    name: 'User',
    component: loadPage('AccountPage')
  },
  {
    path: '/prompts',
    name: 'Topics',
    component: loadPage('TopicsPage')
  },
  {
    path: '/responses/:topicId',
    name: 'Responses',
    component: loadPage('ResponsesPage')
  },
  {
    path: '/write/:topicId',
    name: 'Write',
    component: loadPage('WritePage')
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
