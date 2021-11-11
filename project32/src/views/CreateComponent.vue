<template>
<!--Create Form for the Front End -->
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Form</h3>
            <form @submit.prevent="handleSubmitForm">
               

<br>
<!--Table that displays currently available events -->
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
                    <!-- Iterates through eventforms array and gets respective values from these keys-->
                   <tr v-for="eventform in eventforms" :key="eventform._id">
                        <td scope="row">{{ eventform.eventType }}</td>
                        <td scope="row">{{ eventform.locationName }}</td>
                        <td scope="row">{{ eventform.address }}</td>
                        <td scope="row">{{ eventform.city }}</td>
                        <td scope="row">{{ eventform.state }}</td>
                        <td scope="row">{{ eventform.zip }}</td>
                        <td scope="row">{{ eventform.eventDate }}</td>
                   </tr>
                  </tbody>
</table>



<br>
<hr>
<br>
<!-- Inputs that users must fill out that will be inserted into the backend-->
<!-- Note this uses the form schema, instead of the eventform found at the top for the table-->
<div class="form-group">
  <label>Event Type</label>
  <input type="text" class="form-control" v-model="form.eventType" required>
</div>

<br>
<div class="form-group">
  <label>Location Name</label>
  <input type="text" class="form-control" v-model="form.locationName" required>
</div>

<br>

<br>

<div class="form-group">
  <label>Address</label>
  <input type="text" class="form-control" v-model="form.address" required>
</div>

<br>

<div class="form-group">
  <label>City</label>
  <input type="text" class="form-control" v-model="form.city" required>
</div>

<br>

<div class="form-group">
  <label>State</label>
  <input type="text" class="form-control" v-model="form.state" required>
</div>

<br>

<div class="form-group">
  <label>Zip</label>
  <input type="number" class="form-control" v-model="form.zip" required>
</div>

<br>

<div class="form-group">
  <label>Event Date</label>
  <input type="date" class="form-control" v-model="form.eventDate" required>
</div>

<br>
<hr>
<br>

<div class="form-group">
  <label>Signup Date</label>
  <input type="date" class="form-control" v-model="form.signupDate" required>
</div>

<br>

<div class="form-group">
  <label>First Name</label>
  <input type="text" class="form-control" v-model="form.firstName" required>
</div>

<br>

<div class="form-group">
  <label>Last Name</label>
  <input type="text" class="form-control" v-model="form.lastName" required>
</div>

<br>

<div class="form-group">
  <label>Date of Birth</label>
  <input type="date" class="form-control" v-model="form.dob" required>
</div>

<br>

<div class="form-group">
  <label>Phone Number</label>
  <input type="text" class="form-control" v-model="form.phone" required>
</div>

<br>

<div class="form-group">
  <label>In what form did you hear about this event?</label>
  <input type="text" class="form-control" v-model="form.type" placeholder="Social Media, TV Station, Radio Station, etc..." required>
</div>

<br>

<div class="form-group">
  <label>Please specify where you heard about this event</label>
  <input type="text" class="form-control" v-model="form.specify" placeholder="Facebook, Channel 13, 104.1 FM, etc..." required>
</div>

<br>
<!-- Displays a dropdown for input-->
<div class="form-group">
  <label>Do you want the vaccine?</label>
  <div id="v-model-select">
    <select class="form-control" v-model="form.wantTheVaccine" required>
      <option disabled value="">Please select one</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>
</div>

<br>
<!-- Displays a dropdown for input-->
<div class="form-group">
  <label>COVID Vaccine Preference</label>
  <div id="v-model-select">
    <select class="form-control" v-model="form.vaccinePreference" required>
      <option disabled value="">Please select one</option>
      <option value="Moderna">Moderna</option>
      <option value="Pfizer">Pfizer</option>
    </select>
  </div>
</div>

<br>
<!-- Displays a dropdown for input-->
<div class="form-group">
  <label>Have you received the COVID vaccine?</label>
  <div id="v-model-select">
    <select class="form-control" v-model="form.vaccinationStatus" required>
      <option disabled value="">Please select one</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>
</div>

<br>
<!-- Displays a dropdown for input-->
<div class="form-group">
  <label>Need Additional Support Services?</label>
  <div id="v-model-select">
    <select class="form-control" v-model="form.needAdditionalSupportServices" required>
      <option disabled value="">Please select one</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>
</div>

<br>

<div class="form-group">
  <label>Number of Children in Household?</label>
  <input type="number" class="form-control" v-model="form.numberChildInHH" required>
</div>

<br>
<!-- Displays a dropdown for input-->
<div class="form-group">
  <label>Are you or anyone in your household 65+ in age?</label>
  <div id="v-model-select">
    <select class="form-control" v-model="form.anyoneInHHover65" required>
      <option disabled value="">Please select one</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>
</div>

<br>
<!-- Displays a dropdown for input-->
<div class="form-group">
  <label>Are you a veteran</label>
  <div id="v-model-select">
    <select class="form-control" v-model="form.veteran" required>
      <option disabled value="">Please select one</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>
</div>

<br>
<!-- Displays a dropdown for input-->
<div class="form-group">
  <label>Race</label>
  <div id="v-model-select">
    <select class="form-control" v-model="form.race" required>
      <option disabled value="">Please select one</option>
      <option value="Asian or Pacific Islander">Asian or Pacific Islander</option>
      <option value="Black or African American">Black or African American</option>
      <option value="Hispanic or Latino">Hispanic or Latino</option>
      <option value="Native American or Alaskan Native">Native American or Alaskan Native</option>
      <option value="White or Caucasian">White or Caucasian</option>
      <option value="Multiracial or Biracial">Multiracial or Biracial</option>
      <option value="A race/ethnicity not listed here">A race/ethnicity not listed here</option>
    </select>
  </div>
</div>

<br>
<!-- Button will lead the user to ListComponent.vue if succesfully inputted-->
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
                eventforms: [],
                form: {
                   eventType: '',
                   locationName: '',
                   address: '',
                   city: '',
                   state: '',
                   zip: '',
                   eventDate: '',
                   signupDate: '',
                   firstName: '',
                   lastName: '',
                   dob: '',
                   phone: '',
                   type: '',
                   specify: '',
                   wantTheVaccine: '',
                   vaccinePreference: '',
                   vaccinationStatus:'',
                   needAdditionalSupportServices:'',
                   numberChildInHH: '',
                   anyoneInHHover65: '',
                   veteran: '',
                   race: ''
                }
            }
        },
        created() {
          // This route gets the top 3 most current events
            let apiURL = 'http://localhost:3000/three-currentevents/';
            axios.get(apiURL).then(res => {
                this.eventforms = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods:{
            handleSubmitForm() {
                let apiURL = 'http://localhost:3000/form';
                axios.post(apiURL, this.form).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/view')
                  this.form = {
                   eventType: '',
                   locationName: '',
                   address: '',
                   city: '',
                   state: '',
                   zip: '',
                   eventDate: '',
                   signupDate: '',
                   firstName: '',
                   lastName: '',
                   dob: '',
                   phone: '',
                   type: '',
                   specify: '',
                   wantTheVaccine: '',
                   vaccinePreference: '',
                   vaccinationStatus:'',
                   needAdditionalSupportServices:'',
                   numberChildInHH: '',
                   anyoneInHHover65: '',
                   veteran: '',
                   race: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
        }
    }
    }
</script>