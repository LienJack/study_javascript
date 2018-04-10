<template>
   <div class="data"> 
    <p> 
     <span class="prev" @click="pre">上一月</span> 
     <span class="year">{{currentYear}}年</span> 
     <span class="next" @click="next">下一月</span> 
    </p> 
    <h5 class="month">{{currentMonth+1}}月</h5> 
    <ul class="title"> 
     <li>日</li>
     <li>一</li> 
     <li>二</li> 
     <li>三</li> 
     <li>四</li> 
     <li>五</li> 
     <li>六</li>
    </ul> 
    <ul class="date"> 
      <li v-for="(day, index) in days" :key="index"><p :class="{'active': day.isMonth, 'today' : day.isCurrent}">{{ day.dayNum }}</p></li>
    </ul> 
  </div> 
</template>
<script>
export default {
  data : function(){
    return{
      //初始化日期
      currentDate:new Date(),
      currentMonth:5,
      currentYear:2017,
      currentDay:1,
      days:[],
      preDay:1
    }
  },
  methods:{
    initDate () {
      // 今天的
      var nowDate = new Date(); // 今天时间
      var nowDateNum = nowDate.getDate(); //今天的日期号
      var nowYear = nowDate.getFullYear(); // 今天年份
      var nowMonth = nowDate.getMonth(); // 今天月份
      // 设置的当前日期
      var date = this.currentDate; // 设置的当前日期
      this.currentMonth = date.getMonth(); // 设置的当前月份
      this.currentYear = date.getFullYear(); // 设置的当前年份
      this.currentDay = date.getDate(); // 设置的当前日期号
      
      // 需要用到的日期
      let fristDay = new Date( this.currentYear, this.currentMonth, 1); // 这个月第一天
      let preDay = new Date( this.currentYear, this.currentMonth, 0); // 上个月最后一天
      let lastDay = new Date( this.currentYear, this.currentMonth+1, 0);// 这个月最后一天
      
      //计算
      let fristDayWeedkay = fristDay.getDay(); // 这个月第一天的星期数
      let preDayNum = preDay.getDate(); // 上个月总共多少天
      let lastDayNum = lastDay.getDate(); // 这个月一共多少天
      let thisLastWeekday = lastDay.getDay();
      let showLastMonth = preDayNum - fristDayWeedkay + 1;  // 显示上个月日期的第一日期
      let showNextMonth = 7 - thisLastWeekday - 1; // 要显示下个月的天数

      // 上个月
      for(let i = 0; i < fristDayWeedkay; i++){
        let dayObject = {};
        dayObject.dayNum = showLastMonth + i;
        dayObject.isCurrent = false;
        dayObject.isMonth = false;
        this.days.push( dayObject );
      }

      //这个月
      for(let i = 1; i <= lastDayNum; i++){
        let dayObject={};
        dayObject.dayNum=i;
        if(i === nowDateNum && nowMonth === this.currentMonth && nowYear === this.currentYear){
          dayObject.isCurrent = true;
        }
        else{
          dayObject.isCurrent = false;
        }
        dayObject.isMonth = true;
        this.days.push( dayObject );
      }

      //下个月
      for(let i = 1; i <= showNextMonth; i++){
        let dayObject = {};
        dayObject.dayNum = i;
        dayObject.isCurrent = false;
        dayObject.isMonth = false;
        this.days.push( dayObject );
      }
    },
    next:function(){
      this.days = [];
      this.currentDate.setMonth( this.currentDate.getMonth() + 1);
      this.initDate();
    },
    pre:function(){
      this.days = [];
      this.currentDate.setMonth( this.currentDate.getMonth() - 1);
      this.initDate();
    }
  },
  created(){
    this.initDate();  
  }
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

.date li{
  color: rgb(194, 194, 194);
}

.date li p{
  width: 40px;
  height: 40px;
  display: block;
  margin: auto;
}

 .active  { 
  color: #000000;
 } 

.today{
  border: 1px solid green;
  border-radius: 50%;
  background-color: green;
  color: white;
}
</style>
