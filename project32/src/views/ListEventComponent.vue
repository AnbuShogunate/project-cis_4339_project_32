<template>
<!-- This component allows you to see all events created/inserted -->
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped table-light table-bordered table-hover" >
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Event Type</th>
                      <th scope="col">Location Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">City</th>
                      <th scope="col">State</th>
                      <th scope="col">Zip</th>
                      <th scope="col">Event Date</th>
                    </tr>
                  </thead>
                  <tbody>
                       <!-- Iterates through EventForms array and gets respective values from these keys-->
                    <tr v-for="eventform in EventForms" :key="eventform._id">
                        <td scope="row">{{ eventform.eventType }}</td>
                        <td scope="row">{{ eventform.locationName }}</td>
                        <td scope="row">{{ eventform.address }}</td>
                        <td scope="row">{{ eventform.city }}</td>
                        <td scope="row">{{ eventform.state }}</td>
                        <td scope="row">{{ eventform.zip }}</td>
                        <td scope="row">{{ eventform.eventDate }}</td>
                        <td>
                            <router-link :to="{name: 'eventforms', params: { id: eventform._id }}" class="btn btn-success">Edit
                            </router-link>
                        <button @click.prevent="deleteEventForms(eventform._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
    import axios from "axios";

    export default {
        data() {
            return {
                EventForms: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:3000/eventforms';
            axios.get(apiURL).then(res => {
                this.EventForms = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteEventForms(id){
                console.log(id)
                let apiURL = `http://localhost:3000/event-delete-forms/${id}`;
                let indexOfArrayItem = this.EventForms.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.EventForms.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>


<style>
    .btn-success {
        margin-right: 10px;
    }
</style>