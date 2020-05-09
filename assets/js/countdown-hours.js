jQuery(document).ready(function(){
		var target_date = new Date().getTime() + (1000*3600*48);
	var hours, minutes, seconds;

	var countdown = document.getElementById("countdown");

	getCountdown();

	setInterval(function () { getCountdown(); }, 1000);

	function getCountdown(){

		var current_date = new Date().getTime();
		var seconds_left = (target_date - current_date) / 1000;

		seconds_left = seconds_left % 86400;
			 
		hours = pad( parseInt(seconds_left / 3600) );
		seconds_left = seconds_left % 3600;
			  
		minutes = pad( parseInt(seconds_left / 60) );
		seconds = pad( parseInt( seconds_left % 60 ) );

		countdown.innerHTML = "<span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
	}

	function pad(n) {
		return (n < 10 ? '0' : '') + n;
	}	

});