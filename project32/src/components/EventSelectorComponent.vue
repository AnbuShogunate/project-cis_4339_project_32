<template>
  <div class="form-group">
    <label>Event</label>
    <div id="v-model-select">
      <select class="form-control" v-model="locationName" @change='passEvent'>
        <option disabled value="">Please select one</option>
        <option v-for="eventform in EventSelection" :key="eventform._id">
          {{ eventform.locationName }} {{eventform.address}} {{eventform.city}} {{eventform.state}} {{eventform.zip}} {{eventform.eventDate}}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      EventSelection: [],
      selected: "",
      locationName: ''
    };
  },
  created() {

    let apiURL = `http://localhost:3000/eventforms`;

    axios.get(apiURL).then((res) => {
      this.EventSelection = res.data;
    });
  },
  methods:{
    passEvent()
    {
      this.$emit('changeSelection', this.locationName)
    }
  }
};
</script>