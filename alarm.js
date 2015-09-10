var seted_time;
function playsound() {
	var audio = document.getElementById("main");
	audio.play();
}

var timer=setInterval(function () {myTimer()}, 1000);

function myTimer() {
  var d = new Date();
	var str = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = str;
	seted_time = document.getElementById("alarm").value;
	console.log(seted_time);

	if(str == seted_time)
		playsound();

}
