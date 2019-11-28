<template>
<div>
  <div id="ap">
    <slider/>
  </div>
  <div id="app">
    <!-- <menuu/> -->
    <HelloWorld/>
    <mainview/>
    <sidebar/>
  </div>
</div>
</template>

<script>
// import menuu from '../components/menu'
import HelloWorld from '../components/HelloWorld'
import mainview from '../components/mainview'
import sidebar from '../components/sidebar'
import slider from '../components/slider'

export default {
  name: 'App',
  components: {
    // menuu,
    HelloWorld,
    mainview,
    sidebar,
    slider
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

#ap {
  width: 1000px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
