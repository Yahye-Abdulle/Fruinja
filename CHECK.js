function check() {
	randomList = ['-','+']
	randomNumber =  round(random(1))
	op = randomList[randomNumber];
	randomX = round(random(20));
	randomY = round(random(20));
	randomNum = round(random(5));
	randomNum_2 = round(random(5));
	if (mouseIsPressed) {
		if (mouseButton == LEFT) {
			mouseClick ++;
			if (mouseClick % 2 == 0) {
				if (player.overlap(circle_sprite)) {
					// blood_spatter.position(circle_sprite.position.x, circle_sprite.position.y);
					sniper_shot.play();
					score += 1;			
					fruit_random = round(random(0,2));
					circle_sprite.addImage(fruits[fruit_random]);
					circle_sprite.addImage(fruits[2]);
					circle_sprite.position.x = circle_test[randomNum].x;
					circle_sprite.position.y = circle_test[randomNum].y;	
			}
			}/*
			if ((score % 5 == 0) && (score != 0)) {
				circle_sprite.position.x = -100;
				circle_sprite.position.y = -100;
				circle_sprite_2.position.x = circle_test_2[randomNum_2].x;
				circle_sprite_2.position.y = circle_test_2[randomNum_2].y;
				if (player.overlap(circle_sprite_2)) {
					score = (score + 5);
					circle_sprite.position.x = circle_test[randomNum].x;
					circle_sprite.position.y = circle_test[randomNum].y;
					circle_sprite_2.position.x = -100;
					circle_sprite_2.position.y = -100;
				}
			}*/
		}
	}
	if (op == '-'){
		circle_sprite.position.x -= randomX;
		circle_sprite.position.y -= randomY;
	}
	if (op == '+') {
		circle_sprite.position.x += randomX;
		circle_sprite.position.y += randomY;
	}
	if (circle_sprite.position.x < 0) {
		circle_sprite.position.x = circle_test[randomNum].x;
	}
	if (circle_sprite.position.y < 0) {
		circle_sprite.position.y = circle_test[randomNum].y;
	}
	if (circle_sprite.position.x > width) {
		circle_sprite.position.x = circle_test[randomNum].x;
	}
	if (circle_sprite.position.y > height) {
		circle_sprite.position.y = circle_test[randomNum].y;
	}
	// blood_spatter.position.x = -100;
	// blood_spatter.position.y = -100;
}