var cont = document.getElementById("content");
var cover = document.getElementById("cover");
var btn = document.getElementById("bottom_btn");
var shi = document.getElementById("shi");
var dan = document.getElementById("dan");

// 弹出窗口
function ShowDiv() {
	cover.style.display = "block";
	cont.style.display = "block";
	$("#content").addClass("slideFromTop");
	console.log("弹出窗口") ;
}

// 关闭窗口 确认键触发
function CloseDiv1 () {
	cover.style.display = "none";
	cont.style.display = "none";
	shi.style.display = "block";
	$("#content").removeClass("slideFromTop");
	$("#shi").text("这是通过确认来触发的");
	console.log("btn")
};

//关闭窗口 蒙版触发
function CloseDiv2 () {
	cover.style.display = "none";
	cont.style.display = "none";
	shi.style.display = "block";
	$("#content").removeClass("slideFromTop");
	$("#shi").text("这是通过蒙版来触发的");
	console.log("cover")
};

dan.addEventListener( "click", ShowDiv);
btn.addEventListener( "click", CloseDiv1);
cover.addEventListener( "click", CloseDiv2);








