function menu() {
	background(background_one);
	var text_size_start = 45;
	var text_size_options = 45;
	var text_size_leaderboard = 45;
	
	cursor_sprite.position.x = mouseX-25;
	cursor_sprite.position.y = mouseY-25;
	cursor_sprite.width = 0.5;
	cursor_sprite.height = 0.5;
	
	if (mouseIsPressed) {
		if (mouseButton == LEFT) {
			if (player_sprite.overlap(start_sprite)) {
				screen = 'game';
			}
			if (player_sprite.overlap(options_sprite)) {
				screen = 'options';
			}
			if (player_sprite.overlap(leaderboard_sprite)) {
				screen = 'leaderboard';
			}
			if (player_sprite.overlap(return_sprite)) {
				screen = 'menu';
			}
		}
	}
	
	if (player_sprite.overlap(start_sprite)) {
			color_fill_start = 'Red'
			text_size_start = 60;
			mouse_hover.play();
	}
	if (player_sprite.overlap(options_sprite)) {
			color_fill_options = 'Red'
			text_size_options = 60;
			mouse_hover.play();
	}
		if (player_sprite.overlap(leaderboard_sprite)) {
			color_fill_leaderboard = 'Red'
			text_size_leaderboard = 60;
			mouse_hover.play();
	}
	/*
	
	image(right_arrow,37,219,40,35);
	image(left_arrow,155,219,40,35);
	
	left_arrow.addImage(left_arrow_image);
	right_arrow.addImage(right_arrow_image);
	
	right_arrow.position.x = 37;
	right_arrow.position.y = 219;
	right_arrow.width = 30;
	right_arrow.height = 25;
	
	left_arrow.position.x = 155;
	left_arrow.position.y = 219;
	left_arrow.width = 30;
	left_arrow.height = 25;
	*/
	
	
	player_sprite.position.x = mouseX-25;
	player_sprite.position.y = mouseY-25;
	player_sprite.scale = 0.35;
	//player_sprite.visible = false;
	
	fill(color_fill_start);
	textSize(text_size_start);
	textFont(text_font);
	text('Start', 75, 250);
	start_sprite.width = 100;
	start_sprite.height = 30;
	start_sprite.position.y = 235;
	start_sprite.position.x = 127;
	//start_sprite.visible = false;	
	
	fill(color_fill_options);
	textSize(text_size_options);
	textFont(text_font);
	text('Options', 75, 375);
	options_sprite.width = 133;
	options_sprite.height = 30;
	options_sprite.position.y = 360;
	options_sprite.position.x = 150;	
	//options_sprite.visible = false;
	
	fill(color_fill_leaderboard);
	textSize(text_size_leaderboard);
	textFont(text_font);
	text('Leaderboard', 75, 500);
	leaderboard_sprite.width = 240;
	leaderboard_sprite.height= 30;
	leaderboard_sprite.position.y = 490;
	leaderboard_sprite.position.x = 198;
	//leaderboard_sprite.visible = false;
	
	color_fill_start = 'White'
	color_fill_options = 'White'
	color_fill_leaderboard = 'White'
}

function shapes() {
	fill("#5CFF63")
	rect(75,375,100,30);
}