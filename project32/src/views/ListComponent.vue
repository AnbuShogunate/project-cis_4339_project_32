<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped table-light table-bordered table-hover table-sm" >
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Event Type</th>
                        <th scope="col">Location Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Zip</th>
                        <th scope="col">Event Date</th>
                        <th scope="col">Signup Date</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Date of Birth</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Type</th>
                        <th scope="col">Specify</th>
                        <th scope="col">Want the Vaccine</th>
                        <th scope="col">Vaccine Preference</th>
                        <th scope="col">Need Additional Support Services</th>
                        <th scope="col">Number of Child In Household</th>
                        <th scope="col">Over 65</th>
                        <th scope="col">Veteran</th>
                        <th scope="col">Race</th>


                    </tr>
                </thead>
                <tbody>
                     <!-- Iterates through Forms array and gets respective values from these keys-->
                    <tr v-for="form in Forms" :key="form._id">
                        <td scope="row">{{ form.eventType }}</td>
                        <td scope="row">{{ form.locationName }}</td>
                        <td scope="row">{{ form.address }}</td>
                        <td scope="row">{{ form.city }}</td>
                        <td scope="row">{{ form.state }}</td>
                        <td scope="row">{{ form.zip }}</td>
                        <td scope="row">{{ form.eventDate }}</td>
                        <td scope="row">{{ form.signupDate }}</td>
                        <td scope="row">{{ form.firstName }}</td>
                        <td scope="row">{{ form.lastName }}</td>
                        <td scope="row">{{ form.dob }}</td>
                        <td scope="row">{{ form.phone }}</td>
                        <td scope="row">{{ form.type }}</td>
                        <td scope="row">{{ form.specify }}</td>
                        <td scope="row">{{ form.wantTheVaccine }}</td>
                        <td scope="row">{{ form.vaccinePreference }}</td>
                        <td scope="row">{{ form.needAdditionalSupportServices }}</td>
                        <td scope="row">{{ form.numberChildInHH }}</td>
                        <td scope="row">{{ form.anyoneInHHover65 }}</td>
                        <td scope="row">{{ form.veteran }}</td>
                        <td scope="row">{{ form.race }}</td>

                        <td>
                            <router-link :to="{name: 'forms', params: { id: form._id }}" class="btn btn-success">Edit
                            </router-link>
                        <button @click.prevent="deleteForms(form._id)" class="btn btn-danger">Delete</button>
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
                Forms: []
            }
        },
        // this is using created hook, end point that shows all forms submitted
        created() {
            let apiURL = 'http://localhost:3000/forms';
            axios.get(apiURL).then(res => {
                this.Forms = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteForms(id){
                console.log(id)
                let apiURL = `http://localhost:3000/delete-forms/${id}`;
                let indexOfArrayItem = this.Forms.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Forms.splice(indexOfArrayItem, 1);
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
