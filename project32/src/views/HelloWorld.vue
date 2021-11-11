<template>
<!-- Home page-->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Welcome to the Bread of Life home page!<br>
      Below we have several links to get you started
    </p>

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Bread of Life</h5>
    
    <br>

    <h6 class="card-subtitle mb-2 text-muted">Form Links</h6>

    <br>

    <ul>
          <li class="nav-item">
            <b-link to="/create">Create Form</b-link>
          </li>

          <br>

          <li class="nav-item">
            <b-link to="/createEvent">Create Event</b-link>
          </li>


    </ul>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Bread of Life</h5>
    
    <br>

    <h6 class="card-subtitle mb-2 text-muted">View Links</h6>

    <br>

    <ul>

          <li class="nav-item">
            <b-link  to="/view">View Forms</b-link>
          </li>

          <br>

          <li class="nav-item">
            <b-link  to="/events">Events</b-link>
          </li>

          <br>

          <li class="nav-item">
            <b-link  to="/activities">Activities</b-link>
          </li>
    </ul>
  </div>
</div>

  </div>
</template>



<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
