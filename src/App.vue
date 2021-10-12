<template>
  <div id="app" class="vh-100">
    <the-navigator></the-navigator>
    <router-view/> 
  </div>
</template>

<script>
import TheNavigator from './components/TheNavigator'
export default {
  components:{TheNavigator}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
html {
  width:100%;
}
</style>
