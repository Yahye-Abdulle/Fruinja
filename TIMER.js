function time() {
	fill('White');
	textSize(20);
  textAlign(CENTER, CENTER);
	text('Time: ', width-200, 130);
	text(seconds, width-160,130);
	text('seconds', width-105, 130);
	if (game_mode == 60) {
		if (frameCount % 60 == 0){// if the frameCount is divisible by 60, then a second has passed. it will stop at 0
			seconds -= 1;
			if (seconds == 20) {
				zombie_music.stop();
				half_minute.play();
			}
			if (seconds == timer) {
				score = 0;
				screen = 'end';
			}
		}
	}/*
	if (game_mode == 10) {
		if (mouseClick >= 10) {
			score = 0;
			mouseClicks = 0;
			screen = 'end';
		}
	}*/
}