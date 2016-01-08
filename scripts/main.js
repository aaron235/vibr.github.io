//  the duty cycle period, in ms:
var DUTY_CYCLE = 50;

//  Here, we set the navigator's vibrate object so that it is consistent:
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

if ( navigator.vibrate ) {
	//  we're on a good platform!

	//  vibe the vibes. accepts a power level from 0 to 100.
	function vibe( power ) {
		onTime  = ( power / 100 ) * DUTY_CYCLE
		offtime = DUTY_CYCLE - onTime
		navigator.vibrate( [onTime, offTime] );
	}
	//  start "vibrating" at 0 power:
	window.vibes = setInterval( vibe( 0 ), DUTY_CYCLE );



} else {
	alert( "you can not vibrate" );
}
