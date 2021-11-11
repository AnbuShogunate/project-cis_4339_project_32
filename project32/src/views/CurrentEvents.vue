<template>
<div>
    <!-- This page gets the top 3 most current events-->
<h1>Three most current events </h1>

  <div class="row">
        <div class="col-md-12">
            <table class="table table-striped table-light table-bordered table-hover" >
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Event Type</th>
                      <th scope="col">Location Name</th>
                      <th scope="col">Event Date</th>
                    </tr>
                  </thead>
                  <tbody>
                      <!-- Iterates through eventforms array and gets respective values from these keys-->
                   <tr v-for="eventform in eventforms" :key="eventform._id">
                        <td scope="row">{{ eventform.eventType }}</td>
                        <td scope="row">{{ eventform.locationName }}</td>
                        <td scope="row">{{ eventform.eventDate }}</td>
                   </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
        data() {
            return {
                eventforms: []
                }
            },
        created() {
            let apiURL = 'http://localhost:3000/most-currentevent/';
            axios.get(apiURL).then(res => {
                this.eventforms = res.data;
            }).catch(error => {
                console.log(error)
            });
        }
    }
</script>

<style>

</style>