
<template>
  <div>
    <h1>父级页面</h1>
    <router-link id="FirstPart" to="/Home/FirstPart">111111</router-link>&nbsp;
    <router-link id="SecondPart" to="/Home/SecondPart">222222</router-link>&nbsp;
    <br/>
    <hr>
    <router-view></router-view>
    <!--<div id="app">-->
      <!--<mynavbar></mynavbar>-->
    <!--</div>-->
  </div>
</template>

<script>
//  import mynavbar from '../components/AppComponents/Navbar.vue'
  export default {
//    name: 'app',
//    components: {
//      mynavbar
//    }
  }
</script>

<style scoped>

</style>
