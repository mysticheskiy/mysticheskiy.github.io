$(document).ready(function() {

	var clock;
	clock = $(".clock").FlipClock({
		clockFace : "DailyCounter",
		autoStart : false,
		callbacks : {
			stop : function() {
				$("message").html("Time out");
			}
		}
	});

	var dt = "October 31 2018 15:00:00";
	var first = new Date(dt);
	var lasr = Date.now();
	var remaining = first - last;
	remaining /=1000

	clock.setTime(remaining);
	clock.setCountdown(true);
	clock.start();
});