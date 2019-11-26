<template>
  <div id="app">

    <!-- <menuu/> -->
    <HelloWorld/>
    <mainview/>
    <sidebar/>
  </div>
</template>

<script>
// import menuu from '../components/menu'
import HelloWorld from '../components/HelloWorld'
import mainview from '../components/mainview'
import sidebar from '../components/sidebar'

export default {
  name: 'App',
  components: {
    // menuu,
    HelloWorld,
    mainview,
    sidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}
</style>
