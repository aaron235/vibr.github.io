//  Here, we set the navigator's vibrate object so that it is consistent:
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

if ( navigator.vibrate ) {
	//  we're on a good platform!
} else {
	alert( "you can not vibrate" );
}
