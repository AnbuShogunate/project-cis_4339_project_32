<template>
<div>
    <!-- Table that displays all zip codes & their count-->
<h1>Total Zip codes </h1>

  <div class="row">
        <div class="col-md-12">
            <table class="table table-striped table-light table-bordered table-hover" >
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Zip</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                      <!-- Iterates through ZipCount array and gets respective values from these keys-->
                   <tr v-for="form in ZipCount" :key="form._id">
                        <td scope="row">{{form._id.zip}}</td>
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
                ZipCount: []

                }
            },
        created() {
            // Endpoint in backend (app.js) that retrieves zip codes & their count
            let apiURL = 'http://localhost:3000/forms-zip/';
            axios.get(apiURL).then(res => {
                this.ZipCount = res.data;
            }).catch(error => {
                console.log(error)
            });
        }
    }
</script>

<style>

</style>