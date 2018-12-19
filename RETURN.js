function returnHome() {
	textSize(30);
	fill('White');
	text('Return', width-90, height-20);
	return_sprite.position.x = width-50;
	return_sprite.position.y = height-25;
	if (mouseIsPressed) {
		if (mouseButton == LEFT) {
			if (cursor_sprite.overlap(return_sprite)) {
				player.visible = false;
				circle_sprite.visible = false;
				seconds = 60;
				score = 0;
				// username.value("");
				// username.show()
				screen = 'menu';
			}
			if (screen == 'game') {
				if (player.overlap(return_sprite)) {
					player.visible = false;
					circle_sprite.visible = false;
					seconds = 60;
					score = 0;
					// username.value("");
					// username.show()
					screen = 'menu';
			}
			}
		}
	}
}