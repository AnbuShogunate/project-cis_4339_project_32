<template>
<div>

<!--Creates a Navigation Bar that is used in all pages -->
  <nav class="navbar navbar-expand navbar-dark bg-dark" style="background-color: #e3f2fd;">
      
      <div class="container-fluid">
        <!--Image Source:  https://iconscout.com/icon/loaf-bread-1508808-->
        <img alt="bread logo" src="./assets/logo.png"> 
        <!-- Links to the Home.vue -->
        <a class="navbar-brand  " href="/">Bread of Life Homepage</a>
        <ul class="nav navbar-nav mr-auto" >
          <!-- Links to the CreateComponent.vue-->
          <li class="nav-item">
            <router-link class="nav-link" to="/create">Create Form</router-link>
          </li>
          <!-- Links to the ListComponent.vue-->
          <li class="nav-item">
            <router-link class="nav-link" to="/view">View Forms</router-link>
          </li>
          <!-- Links to CreateEvents.vue-->
          <li class="nav-item">
            <router-link class="nav-link" to="/createEvent">Create Event</router-link>
          </li>
          <!-- Links to the ListEventComponent.vue-->
          <li class="nav-item">
            <router-link class="nav-link" to="/events">View Events</router-link>
          </li>
          <!-- Links to the VueChartJS.vue-->
          <li class="nav-item">
            <router-link class="nav-link" to="/activities">Activities</router-link>
          </li>
          <!-- Links to ZipCodeTotal.vue-->
          <li class="nav-item">
            <router-link class="nav-link" to="/forms-zip/">Zip Data</router-link>
          </li>
          <!-- Links to the EventTota.vue-->
          <li class="nav-item">
            <router-link class="nav-link" to="/forms-eventType/">Event Type Data</router-link>
          </li>
          <!-- Links to IndividualHistory.vue-->
          <li class="nav-item">
            <router-link class="nav-link" to="/individual-history/">Individual History</router-link>
          </li>
          <!--links to the CurrentEvents.vue-->
          <li class="nav-item">
            <router-link class="nav-link" to="/most-currentevent/">Current Events</router-link>
          </li>
          <!-- Links to the About.vue-->
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
        </ul>
      </div>
    </nav>

<div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>




</template>

