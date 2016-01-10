window.onload = function () {
	var selected = null;
	var sliderArea = document.querySelector("body");
	var slider = document.querySelector("#slider");
	var zeroZone = document.querySelector("header");
	sliderArea.addEventListener("touchstart", function (event) {
		init(event);
	}, false);
	sliderArea.addEventListener("mousedown", function (event) {
		init(event);
	}, false);
	sliderArea.addEventListener("touchmove", function (event) {
		move(event);
	}, false);
	sliderArea.addEventListener("mousemove", function (event) {
		move(event);
	}, false);
	sliderArea.addEventListener("touchend", function (event) {
		end(event);
	}, false);
	sliderArea.addEventListener("mouseup", function (event) {
		end(event);
	}, false);

	function init(event) {
		event.preventDefault();
		selected = true;
	}

	function move(event) {
		event.preventDefault();
		if (selected) {
			x_pos = event.clientX || event.touches[0].pageX;
			y_pos = event.clientY || event.touches[0].pageY;
			var totalWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

			var totalHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
			var heightOffset = zeroZone.offsetHeight;
			var height = totalHeight - heightOffset;
			var percentage = Math.round(Math.max(height - y_pos, 0) / (heightOffset + height) * 100);
			var blah = document.getElementById("desktopWarning");
			blah.innerHTML = "percentage: " + percentage + "%";
			slider.style.bottom = percentage + "%";
			window.setVibes(percentage);

			//Check if we're getting to the bounds of the screen and stop tracking
			if (y_pos < 10 || y_pos > totalHeight - 10 || x_pos < 10 | x_pos > totalWidth - 10) {
				selected = false;
			}
		}
	}

	function end(event) {
		event.preventDefault();
		selected = false;
	}
}