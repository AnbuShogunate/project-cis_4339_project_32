<template>
<!-- This components allows us to edit the forms which were created/inserted-->
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update form content -->
            <h3 class="text-center">Update Forms</h3>
            <form @submit.prevent="handleUpdateForm">
<br>

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

<div class="form-group">
  <label>Event Date</label>
  <input type="date" class="form-control" v-model="form.eventDate" required>
</div>

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
  <label>Type</label>
  <input type="text" class="form-control" v-model="form.type" required>
</div>

<br>

<div class="form-group">
  <label>Specify</label>
  <input type="text" class="form-control" v-model="form.specify" required>
</div>

<br>

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
            form: { }
        }
    },
    created() {
        let apiURL = `http://localhost:3000/forms/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.form = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:3000/forms/${this.$route.params.id}`;

            axios.put(apiURL, this.form).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>