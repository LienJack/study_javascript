<template>
   <div class = "data"> 
    <p> 
     <span class = "prev">上一月</span> 
     <span class = "year">{{currentYear}}</span> 
     <span class = "next">下一月</span> 
    </p> 
    <h5 class = "month">{{currentMonth}}</h5> 
    <ul class = "title"> 
     <li>日</li>
     <li>一</li> 
     <li>二</li> 
     <li>三</li> 
     <li>四</li> 
     <li>五</li> 
     <li>六</li>
    </ul> 
    <ul class= "date"> 
      <li v-for="day in 30">{{day}}</li>
    </ul> 
  </div> 
</template>
<script>
export default {
  data : function(){
    return{
      currentDate:9,
      currentMonth:4,
      currentYear:2018,
      currentWeekday:1
    }
  },
}
</script>

<style>
*{ 
  margin: 0px; 
  padding: 0px; 
 } 

 ul,li{list-style: none;}
 .data{ 
  width: 665px; 
  border: 1px solid #000000; 
  margin: 0 auto;
 } 
 .data > p{ 
  display: flex; 
 } 
 .data > h5{ 
  text-align: center; 
 } 
 .data > p > span{ 
  padding: 0 10px; 
 } 
 .prev,.next{ 
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
 .date{ 
  overflow: hidden; 
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  flex-wrap: wrap; 
 } 
 .date  li{ 
  display: block;
  width: 14%;
  height: 40px;   
  line-height: 40px; 
  text-align: center; 
  cursor: pointer; 
  margin-top: 10px;
 } 
.date li p{
  width: 40px;
  height: 40px;
  display: block;
  margin: auto;
}

 .active p{ 
  color: white;
  background: green;
  border: 1px solid green;
  border-radius: 50%;
 } 

 .not{
   color: rgb(194, 194, 194);
 }
</style>
