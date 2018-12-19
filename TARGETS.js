function target() {
	player.scale = 0.5;
	circle_sprite.scale = 1;
	// circle_sprite_2.scale = 1;
	player.position.x = mouseX;
	player.position.y = mouseY;
	player.mirrorY(-1);
	check_direction[0] = mouseX;
	if (mouseX >width/2) {
		player.mirrorX(1);
	}
	if (mouseX < width/2) {
		player.mirrorX(-1);
	}
	// if (mouseX > check_direction[0]) {
	// 	player.mirrorX(1);
	// }
	
	//circle.position.x = 500;
	//circle.position.y = 500;
	
	for (var i=0; i<25;i++){
		var circle_obs = {
			x: random(width-100),
			y: random(height-100),
			r: 32		
		}
		circle_test.push(circle_obs);
	}
	for (var j=0; j<25;j++){
		var circle_obs_2 = {
			x: random(width-100),
			y: random(height-100),
			r: 32		
		}
		circle_test_2.push(circle_obs_2);
	}
	//ellipse(circle_test[0].x, circle_test[0].y, 64,64);
	//circle_sprite.position.x = circle_test[0].x;
	//circle_sprite.position.y = circle_test[0].y;
}