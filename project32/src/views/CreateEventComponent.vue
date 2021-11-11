<template>
<!-- This page is used to create an event by using the eventform model -->
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Event</h3>
            <form @submit.prevent="handleSubmitEventForm"> 

        <div class="form-group">
        <label>Event Type</label>
        <input type="text" class="form-control" v-model="eventform.eventType" required>
        </div>

        <br>

        <br>
        <div class="form-group">
        <label>Location Name</label>
        <input type="text" class="form-control" v-model="eventform.locationName" required>
        </div>
        <br>

        <br>
        <div class="form-group">
        <label>Address</label>
        <input type="text" class="form-control" v-model="eventform.address" required>
        </div>

        <br>

        <div class="form-group">
        <label>City</label>
        <input type="text" class="form-control" v-model="eventform.city" required>
        </div>

        <br>

        <div class="form-group">
        <label>State</label>
        <input type="text" class="form-control" v-model="eventform.state" required>
        </div>

        <br>

        <div class="form-group">
        <label>Zip</label>
        <input type="number" class="form-control" v-model="eventform.zip" required>
        </div>

        <br>

        <div class="form-group">
        <label>Event Date</label>
        <input type="date" class="form-control" v-model="eventform.eventDate" required>
        </div>

        <br>
        <button class="btn btn-danger mt-3">Create</button>
        <br>

</form>
</div>
</div>

</template>



<script>
    import axios from "axios";

    export default {
        data() {
            return {
                eventform: {
                    eventType: '',
                    locationName: '',
                    address: '',
                    city: '',
                    state: '',
                    zip: '',
                    eventDate: ''
                }
            }
        },
        methods: {
            handleSubmitEventForm() {
                let apiURL = 'http://localhost:3000/eventform';

                axios.post(apiURL, this.eventform).then(() => {
                    this.$router.push('/events')
                    this.eventform = {
                        eventType: '',
                        locationName: '',
                        address: '',
                        city: '',
                        state: '',
                        zip: '',
                        eventDate: ''
                    }
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>




