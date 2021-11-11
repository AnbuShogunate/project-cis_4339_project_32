


import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import VueChartJS from '@/components/VueChartJS'

// Define some routes
const routes = [
  //Route to Home Page
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //Route to Create Form
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateComponent') 
  },
  //Route to View Forms + Edit/Delete Buttons
  {
    path: '/view',
    name: 'view',
    component: () => import('../views/ListComponent')
  }
  ,
  //Route to the About Page
  {
    path: '/about',
    name: 'About',

    component: () => import( '../views/About.vue')
  }
  //Route to View Event Page + Edit/Delete Button
    ,
  {
    path: '/events',
    name: 'events',
    component: () => import('../views/ListEventComponent')
  }
  ,
  //Route to Bar Chart page for zip codes
  {path: '/activities',
    name: 'VueChartJS',
    component: VueChartJS
  },

  //Route to Create Event Form
  {
    path: '/createEvent',
    name: 'createEvent',
    component: () => import('../views/CreateEventComponent')
  },
  //Route to Edit Event Form after clicking the button in View Event Form Page
  {
    path: '/eventforms/:id',
    name: 'eventforms',
    component: () => import('../components/EditEventComponent')
  },
  //Route to Edit Form after clicking the button in View Form Page
  {
    path: '/forms/:id',
    name: 'forms',
    component: () => import('../components/EditComponent')
  },
  //Route to View the Zip Codes and their count in the DB
  {
    path: '/forms-zip/',
    name: 'formszip',
    component: () => import('../views/ZipCodeTotal.vue')
  },
  // Route to view the Event Types and their count in the DB
  {
    path: '/forms-eventType/',
    name: 'formseventType',
    component: () => import('../views/EventTotal.vue')
  },
  //Route to view the 3 most current event available
  {
    path: '/three-currentevents',
    name: 'threecurrentevents',
    component: () => import('../views/CurrentEvents.vue')
  },
  //Route to view the 3 most current event available
  {
    path: '/most-currentevent/',
    name: 'mostcurrentevent',
    component: () => import('../views/CurrentEvents.vue')
  },
  //Route to view the Users and their activity count in the DB
  {
    path: '/individual-history/',
    name: 'individualhistory',
    component: () => import('../views/IndividualHistory.vue')
  }

]

// Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes 
})

export default router
