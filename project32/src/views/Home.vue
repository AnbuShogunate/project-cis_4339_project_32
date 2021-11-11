<template>
  <div class="home">
    <HelloWorld msg="Welcome to Bread of Life"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/views/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
