<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <DATE></DATE>
  </div>
</template>

<script>
// @ is an alias to /src
import DATE from '@/components/Datecp.vue'

export default {
  name: 'home',
  components: {
    DATE
  }
}
</script>
