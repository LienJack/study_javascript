<template>
  <div id="app">
    <calendar/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Calendar from './components/calendar'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Calendar
  }
}
</script>

<style>
body{margin:0;padding: 0;}
</style>
