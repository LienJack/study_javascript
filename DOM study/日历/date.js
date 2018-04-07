//今天的
var nowDat=new Date();//今天时间
var nowYear=nowDat.getFullYear();//今天年份
var nowMonth=nowDat.getMonth();//今天月份
//设置的
var dat=new Date();//当前时间


function Show(){
  var year=dat.getFullYear();//设置的当前年份
  var month=dat.getMonth();//设置的当前月份
  var thisDayDate=dat.getDate();//设置的当前日期
  var thisWeekday=dat.getDay();//设置的当前星期
  var thisFristDay=new Date(year,month,1);//这个月的第一天
  var thisFristWeekday =thisFristDay.getDay();//这个月第一天的星期
  var thisLastDay=new Date(year,month+1,0);//这个月最后一天
  var thisLastWeekday=thisLastDay.getDay();//这个月最后一天的星期
  var dateNum =thisLastDay.getDate();//这个月有多少天
  var preLastDay = new Date(year, month, 0);//上个月最后一天
  var preLastDayNum = preLastDay.getDate();//上个月的天数
  var showLastMonth=preLastDayNum-thisFristWeekday+1;//要显示上个月的日期
  var showNextMonth=7-thisLastWeekday-1;//要显示下个月天数
  $("#year").text(year);
  $("#month").text((month+1)+"月");
  for(var i=0;i<thisFristWeekday;i++){
    $("#date").append('<li class="not"><p>'+(showLastMonth++)+'</p></li>');
  }
  for(var i=1;i<=dateNum;i++){ 
    if(i==thisDayDate&&month==nowMonth&&year==nowYear){
      $("#date").append('<li class="active"><p>'+i+'</p></li>');
    }else{
      $("#date").append('<li class="hover"><p>'+i+'</p></li>');
    }
  }
  for(var i=1;i<=showNextMonth;i++){
    $("#date").append('<li class="not"><p>'+i+'</p></li>');
  }
  

}
$(function(){
  Show();
  $("#next").click(function () { 
    $("#date li").remove();
    dat.setMonth(dat.getMonth()+1);
    console.log("next");
    Show(); 
  });

  $("#prev").click(function () { 
    $("#date li").remove();
    dat.setMonth(dat.getMonth()-1);
    console.log("prev");
    Show(); 
  });
})

