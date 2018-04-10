<template>
 <div class="home">
  <h2>this is home</h2>
  <router-view></router-view>
 </div>
</template>
 
<script>
 export default({
  name:'home'
 })
</script>
 
<style scoped>
 .home{
  width: 100%;
  height: 500px;
  background-color: khaki;
 }
</style>