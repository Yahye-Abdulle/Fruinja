function leaderboard() {
	background(background_one);
	returnHome()
	cursor_sprite.position.x = mouseX;
	cursor_sprite.position.y = mouseY;
	cursor_sprite.width = 1;
	cursor_sprite.height = 1;
	textSize(50);
	text('Leaderboard', width/2, height/2);
	//text(user_name, width/2, 500)
	
}