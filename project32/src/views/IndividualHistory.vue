<template>
<div>
    <!-- Table that displays all individuals & the count (times they submitted a form)-->
<h1>History of Individuals </h1>

  <div class="row">
        <div class="col-md-12">
            <table class="table table-striped table-light table-bordered table-hover" >
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                       <!-- Iterates through Individual array and gets respective values from these keys-->
                       <!-- Note the way the keys are put together, have to see the object returned through postman in order to format the keys in the rows-->
                   <tr v-for="form in Individual" :key="form._id">
                        <td scope="row">{{form._id.firstName}}</td>
                        <td scope="row">{{form._id.lastName}}</td>
                        <td scope="row">{{form.myCount }}</td>
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
                Individual: []

                }
            },
        created() {
            // Endpoint in backend (app.js) that retrieves all individuals & the count (times they submitted a form)
            let apiURL = 'http://localhost:3000/individual-history/';
            axios.get(apiURL).then(res => {
                this.Individual = res.data;
            }).catch(error => {
                console.log(error)
            });
        }
    }
</script>

<style>

</style>