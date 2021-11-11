<template>
  <section class="container">
    <h1>Chart</h1>
    <div class="columns">
      <div class="column">
      </div>
      <div class="column">
        <h3>Bar Chart - Receiving Data from backend</h3>
        <div>
          <div>
            <CountZipBar
              v-if="!loading && !error"
              :label="labels"
              :chart-data="myCount"
            ></CountZipBar>

            <!-- Start of loading animation -->
            <div class="mt-40" v-if="loading">
              <p
                class="
                  text-6xl
                  font-bold
                  text-center text-gray-500
                  animate-pulse
                "
              >
                Loading...
              </p>
            </div>
            <!-- End of loading animation -->

            <!-- Start of error alert -->
            <div class="mt-12 bg-red-50" v-if="error">
              <h3 class="px-4 py-1 text-4xl font-bold text-white bg-red-800">
                {{ error.title }}
              </h3>
              <p class="p-4 text-lg font-bold text-red-900">
                {{ error.message }}
              </p>
            </div>
            <!-- End of error alert -->
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const axios=require("axios")
import CountZipBar from '@/views/BarChartComponent.vue'

  export default {
    name: 'VueChartJS',
    components: {
      CountZipBar
    },
    data : ()=> {
        return {
            labels : [],
            myCount : [],
            loading: false,
            error: null,
        };

    },

methods: {
    async fetchData() {
      try {
        this.error = null;
        this.loading = true;
        // End point from backend (apps.js) that gets the zip & count to display on the chart
        const url = `http://localhost:3000/forms-zip/`;
        const response = await axios.get(url);
        //"re-organizing" - mapping json from the response
        this.labels = response.data.map((item) => item._id.zip);
        this.myCount = response.data.map((item) => item.myCount);
      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          this.error = {
            title: "Server Response",
            message: err.message,
          };
        } else if (err.request) {
          // client never received a response, or request never left
          this.error = {
            title: "Unable to Reach Server",
            message: err.message,
          };
        } else {
          // There's probably an error in your code
          this.error = {
            title: "Application Error",
            message: err.message,
          };
        }
      }
      this.loading = false;
    },
  },
  mounted() {
    this.fetchData();
  },

};

</script>