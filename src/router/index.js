import { createRouter, createWebHistory } from 'vue-router'
import CustomerView from '../views/CustomerView.vue'
import AddCustomerView from '../views/AddCustomerView.vue'
import CustomerDetailView from '../views/CustomerDetailView.vue'
import EditCustomerView from '../views/EditCustomerView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: CustomerView
  },
  {
    path: '/add',
    name: 'add',
    component: AddCustomerView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/customer/:id',
    name: 'details',
    component: CustomerDetailView
  },
  {
    path: '/editcustomer/:id',
    name: 'edit',
    component: EditCustomerView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
