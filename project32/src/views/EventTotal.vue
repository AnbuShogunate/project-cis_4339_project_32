<template>
<div>

    <!-- Table that displays event types & their count-->
<h1>Total Events by Type</h1>

  <div class="row">
        <div class="col-md-12">
            <table class="table table-striped table-light table-bordered table-hover" >
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Event Type</th>
                      <th scope="col"> Total</th>
                    </tr>
                  </thead>
                  <tbody>
                      <!-- Iterates through Events array and gets respective values from these keys in the endpoint-->
                   <tr v-for="eventform in Events" :key="eventform._id">
                        <td scope="row">{{eventform._id.eventType}}</td>
                        <td scope="row">{{eventform.myCount }}</td>
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
                Events: []

                }
            },
        created() {
             // Endpoint in backend (app.js) that retrieves event types & their count
            let apiURL = 'http://localhost:3000/forms-eventType/';
            axios.get(apiURL).then(res => {
                this.Events = res.data;
            }).catch(error => {
                console.log(error)
            });
        }
    }
</script>

<style>

</style>