//  the duty cycle period, in ms:
var DUTY_CYCLE = 50;

//  Here, we set the navigator's vibrate object so that it is consistent:
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

if ( navigator.vibrate ) {
	//  we're on a good platform!

	//  vibe the vibes. accepts a power level from 0 to 100.
	vibe = function( power ) {
		var onTime  = ( power / 100 ) * DUTY_CYCLE;
		var offtime = DUTY_CYCLE - onTime;
		navigator.vibrate( [onTime, offTime] );
	};

	//  set a vibe level to repeat at.
	window.setVibes = function( power ) {
		window.vibes = setInterval( vibe( power ), DUTY_CYCLE );
	};

	//  stop vibing.
	window.killTheVibes = function() {
		clearInterval( window.vibes );
	};

	//  start vibing at 0 power:
	setVibes( 0 );

} else {
	//  fade in the no-vibe div
	var s = document.getElementById('thing').style; s.opacity = 1; (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,40)})();
}
