function sprites() {
	//circle = createSprite(850, 400);
	
	circle_sprite = createSprite(850,400);
	// circle_sprite_2 = createSprite(-100,-100);
	player_sprite = createSprite(0, 0);
	start_sprite = createSprite(500,650);
	options_sprite = createSprite(700,650);
	leaderboard_sprite = createSprite(900,650);
	return_sprite = createSprite(40,30);
	select_one_sprite = createSprite(100,200);
	select_two_sprite = createSprite(250,200);
	cursor_sprite = createSprite(100,100);
	player = createSprite(400,400);
	choose_quick = createSprite(100,100);
	choose_seconds = createSprite(100,100);
	
	//username = createInput();
	//left_arrow = createSprite(37,219);
	//right_arrow = createSprite(155,219);
	player_sprite.visible = false;
	start_sprite.visible = false;	
	options_sprite.visible = false;
	leaderboard_sprite.visible = false;
	return_sprite.visible = false;
	player.visible = false;
	circle_sprite.visible = false;
	// circle_sprite_2.visible = false;
	select_one_sprite.visible = false;
	select_two_sprite.visible = false;
	choose_quick.visible = false;
	choose_seconds.visible = false;
	circle_choose = circle_image
	cursor_sprite.scale = 0.2;
	noCursor();
}