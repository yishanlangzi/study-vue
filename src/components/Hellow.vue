<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>啦啦啦啦</h2>
    <ul>
      <router-link id="Home" to="/Home">Home</router-link>&nbsp;&nbsp;
      <router-link id="FirstPage" to="/FirstPage">FirstPage</router-link>&nbsp;&nbsp;
      <router-link id="SecondPage" to="/SecondPage">SecondPage</router-link>
      </ul>
    <!--<h2>我是H2</h2>-->
    <!--<ul>-->
      <!--<li><a href="http://localhost:8080/#/Home" target="_blank">Home</a></li>-->
      <!--<li><a href="http://localhost:8080/#/FirstPage" target="_blank">FirstPage</a></li>-->
      <!--<li><a href="http://localhost:8080/#/SecondPage" target="_blank">SecondPage</a></li>-->
    <!--</ul>-->
  </div>
</template>


<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎你！！！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
