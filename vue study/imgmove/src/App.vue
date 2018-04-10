<template>
  <div id="app">
    <imgMove/>
  </div>
</template>

<script>
import imgMove from './components/imgMove'

export default {
  name: 'App',
  components: {
    imgMove
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
