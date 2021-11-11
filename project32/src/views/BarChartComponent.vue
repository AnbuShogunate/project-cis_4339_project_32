<template>
<!-- Bar Chart Component for VueChartJS -->
  <canvas ref="myChart"></canvas>
</template>

<script>
// Won't work without the "/auto" for some reason
import Chart from "chart.js/auto";
export default {
  props: {
    label: {
      type: Array,
    },
    chartData: {
      type: Array,
    },
  },
  async mounted() {
    console.log(this.chartData);
    await new Chart(this.$refs.myChart, {
      type: "bar",
      data: {
        labels: this.label,
        datasets: [
          {
            label: "Zip",
            backgroundColor: "rgba(253, 164, 0, 0.8)",
            data: this.chartData,
          },
        ],
      }
      ,
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  },
};
</script>