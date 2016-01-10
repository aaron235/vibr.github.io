//  the duty cycle period, in ms:
var DUTY_CYCLE = 30;

//  Here, we set the navigator's vibrate object so that it is consistent:
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

if ( navigator.vibrate ) {
	//  we're on a good platform!

	//  hide the warning and display the slider:
	document.getElementById( 'desktopWarning' ).style.display = 'none';
	document.getElementById( 'slider' ).style.display = '';

	//  intro vibes sequence (tu tu-tuuu!)
	navigator.vibrate( [250, 100, 100, 70, 500] );
	
	//  vibe the vibes. accepts a power level from 0 to 100.
	vibe = function( power ) {
		if ( power < 0 || power > 100 ) {
			console.log( "fuck you" );
		} else if ( power === 0 ) {
			killTheVibes();
		} else {
			power = power * 1.1;
			power = Math.max( 25, power );
			power = Math.min( 100, power );

			var onTime  = ( power / 100 ) * DUTY_CYCLE;
			var offTime = DUTY_CYCLE - onTime;
			navigator.vibrate( [onTime, offTime] );
		}
	};

	//  set a vibe level to repeat at.
	window.setVibes = function( power ) {
		window.killTheVibes();
		window.vibes = window.setInterval( function() { vibe( power ) }, DUTY_CYCLE );
	};

	//  stop vibing.
	window.killTheVibes = function() {
		window.clearInterval( window.vibes );
	};

	//  start vibing at 0 power:
	setVibes( 0 );

} else {
	//  fade in the no-vibe div
	console.log( "THIS DOESN'T HAVE A VIBRATOR FUCK YOU" );
	//  elStyle.opacity = 0;

}
