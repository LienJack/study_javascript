var now=new Date();//当前时间
var year=now.getFullYear();//当前年份
var month=now.getMonth();//当前月份
var nowDate=now.getDate();//当前日期
var weekday=now.getDay();//当前星期
var thisFristDay=new Date(year,month,1);//这个月的第一天
var thisFristWeekday =thisFristDay.getDay();//这个月第一天的星期
var thisLastDay=new Date(year,month+1,0);//这个月最后一天
var dateNum =thisLastDay.getDate();//这个月有多少天
var preLastDay = new Date(year, month, 0);//上个月最后一天
var preLastDayNum = preLastDay.getDate();//上个月的天数

console.log(preLastDayNum);
