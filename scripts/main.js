//  the duty cycle period, in ms:
var DUTY_CYCLE = 50;

//  Here, we set the navigator's vibrate object so that it is consistent:
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

navigator.vibrate( 1000 );

if ( navigator.vibrate ) {
	//  we're on a good platform!

	//  vibe the vibes. accepts a power level from 0 to 100.
	vibe = function( power ) {
		if ( power < 0 || power > 100 ) {
			console.log( "value out of range" );
		} else if ( power < 10 ) {
			power = 10;
		}

		var onTime  = ( power / 100 ) * DUTY_CYCLE;
		navigator.vibrate( onTime );

	};

	//  set a vibe level to repeat at.
	window.setVibes = function( power ) {
		window.vibes = setInterval( function() { vibe( power ) }, DUTY_CYCLE );
	};

	//  stop vibing.
	window.killTheVibes = function() {
		clearInterval( window.vibes );
	};

	//  start vibing at 0 power:
	setVibes( 0 );

} else {
	//  fade in the no-vibe div
	var elStyle = document.getElementById( 'desktopWarning' ).style;
	elStyle.display = '';
	//  elStyle.opacity = 0;

}
