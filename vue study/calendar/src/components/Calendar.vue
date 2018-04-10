<template>
   <div class = "calendar"> 
    <p> 
      <span class = "prev">上一月</span> 
      <span class = "year">2018</span> 
      <span class = "next">下一月</span> 
    </p> 
    <h5 class = "month">四月</h5> 
    <ul class = "title"> 
      <li>日</li>
      <li>一</li> 
      <li>二</li> 
      <li>三</li> 
      <li>四</li> 
      <li>五</li> 
      <li>六</li>
    </ul> 
    <ul class="date">
       <li v-for="n in 30">{{ n }}</li>
    </ul>
  </div>
  
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      days: []
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{padding:0;margin: 0;}
 ul,li{list-style: none;}
 .calendar{ 
  width: 665px; 
  border: 1px solid #000000; 
  margin: 0 auto;
 } 
 .calendar > p{ 
  display: flex; 
 } 
 .calendar > h5{ 
  text-align: center; 
 } 
 .calendar > p > span{ 
  padding: 0 10px; 
 } 
 .prev,#next{ 
  cursor: pointer; 
 } 
 .year{ 
  flex: 1; 
  text-align: center; 
 } 
 .title{ 
  overflow: hidden; 
  list-style: none; 
  background: #ccc;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap; 
 } 
 .title > li{ 
  width: 14%; 
  height: 26px; 
  line-height: 26px; 
  text-align: center; 
 } 


</style>