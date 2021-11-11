<template>
<!-- This component allows us to edit the events that were created/inserted -->
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update Event content -->
            <h3 class="text-center">Update Event</h3>
            <form @submit.prevent="handleUpdateEventForm">
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
        <button class="btn btn-danger mt-3">Update</button>
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
            eventform: {}
        }
    },
    created() {
        let apiURL = `http://localhost:3000/eventforms/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.eventform = res.data;
        })
    },
    methods: {
        handleUpdateEventForm() {
            let apiURL = `http://localhost:3000/eventforms/${this.$route.params.id}`;

            axios.put(apiURL, this.eventform).then((res) => {
                console.log(res)
                // When you submit the form, it'll take you to the page that /events is routed to
                this.$router.push('/events')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>