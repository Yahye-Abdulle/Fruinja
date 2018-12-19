var circle;
var circle_sprite;
var circle_sprite_2;
var circle_test = [];
var circle_test_2 = [];
var check_direction = [];
var fruits = [];
var fruit_random = 0;
var score = 0;
var seconds = 60;
var timer = 0;
var mouseClick = 0;
var color_fill_start = 'White'
var color_fill_options = 'White'
var color_fill_leaderboard = 'White'
var screen = 'start';
var game_mode = 60;
var x = 0;

function preload() {
	load()
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	// zombie_music.setVolume(0.2);
	zombie_music.play();
	zombie_music.loop();
	sprites();
}

function draw() {
	// background(255);
	
	// image(background_two, 50,50);
	zombie_music.setVolume(0.2);
	half_minute.setVolume(0.2)	
	
	fruits.push(fruit_one, fruit_two, fruit_three);
	
	frameRate(120);
	if (screen=='start') {
		zombie_music.setVolume(0);
		cursor_sprite.visible = false;
		start();
	}
	if (screen=='menu') {
		zombie_music.setVolume(0.2);
		cursor_sprite.addImage(cursor_image)
		// username.position(800,275);
		// username.style("font-size","30");
		// user_name = username.value()
		cursor_sprite.visible = true;
		menu()
	}
	if (screen=='options') {
		// username.hide();
		options()
	}
	if (screen=='game') {
		zombie_music.setVolume(0.65);
		player.addImage(player_image);
		// fruit_random = round(random(0,2))
		circle_sprite.addImage(fruits[fruit_random]);
		// circle_sprite_2.addImage(zombie_2);
		player.visible = true;
		circle_sprite.visible = true;
		// circle_sprite_2.visible = true;
		cursor_sprite.visible = false;
		// username.hide();
		game()
	}
	if (screen=='leaderboard') {
		// username.hide();
		leaderboard()
	}
	if (screen=='end') {
		// username.hide()
		player_sprite.visible = false;
		circle_sprite.visible = false;
		player.visible = false;
		end()
	}
	
	//fill('White');
	//textSize(150);
	//textFont(text_font);
	//text("SKULLTROOPER", width/2-275, height/2-75);
	
	
	fill('White');
	textSize(30);
	textFont(text_font);
	text(round(frameRate()), 25, height-40);
	
	leaderboard_sprite.width = 240;
	leaderboard_sprite.height= 30;
	leaderboard_sprite.position.y = 490;
	leaderboard_sprite.position.x = 198;
	drawSprites();
}

function start() {
	background(0);
	fill('White');
	textSize(15);
	text('Credits : BELOW', 50, 50)
	text('The Berklee College of Music (Submitted by qubodup)', 50, 75);
	text('Alexandr Zhelanov https://soundcloud.com/alexandr-zhelanov' , 50, 100);
	textSize(30);
	fill('White');
	text('LOADING...', width/2-100, height/2-65);
	stroke(255, 255, 255);
	fill('Black');
	rect(width/2-165, height/2-50, 300,20);
	fill('White');
	rect(width/2-165, height/2-50, x, 20);
	if ((300-x) != 0) {
		x++;
	}
	if ((300-x) == 0) {
		screen='menu';
	}
}

function game() {
	// createCanvas(windowWidth, windowHeight);
	// background(background_two);
	background(background_one);
	line(width/2, 0, width/2+1, width/2);
	noCursor();
	time();
	returnHome();
	scoreCounter();
	target();
	check();
}