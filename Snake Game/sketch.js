let snake;
let apple;
let resolution = 20;

function setup() {
  w = floor(1280/resolution);
  h = floor(720/resolution);
  createCanvas(w*resolution, h*resolution);
  frameRate(10);
  snake = new Snake();
  apple = get_new_apple();
  score = 0;
}

function get_new_apple(){
  apple_location = get_random_location(w, h);
  return new Apple(apple_location[0], apple_location[1]);
}

function get_random_location(w, h) {
	return [floor(random(w)), floor(random(h))];
}

function keyPressed() {
	switch (keyCode){
		case LEFT_ARROW:
			console.log('pressed', keyCode)
			 if (snake.getDirStr() === 'right'){
			 	break;
			 }
			 else{
			snake.setDir(-1, 0);
			break;
			 }

		case RIGHT_ARROW:
			console.log('pressed', keyCode)
			 if (snake.getDirStr() === 'left'){
			 	break;
			 } else {
			snake.setDir(1, 0);
			break;
			 }

		case DOWN_ARROW:
			console.log('pressed', keyCode)

			 if (snake.getDirStr() === 'up'){
			 	break;
			 } else {
			snake.setDir(0, 1)
			break;
			 }
		case UP_ARROW:
			console.log('pressed', keyCode)
			 if (snake.getDirStr() === 'down'){
			 	break;
			 } else {
			snake.setDir(0, -1)
			break;
			 }
		default:
			console.log('pressed', keyCode)
			break;
	}
}

function draw() {
	scale(resolution)
	colorMode(RGB)
	background(0);
	if (snake.eat(apple)){
		apple = get_new_apple()
		score += 10
		print(score)
	};
	snake.update();
	snake.show();
	apple.show();
	fill(255);
	textSize(1);
	text('Score: ' + score, w - 6, 3)

	if (snake.collision()){
		textSize(3)
		text('Game Over', 7, 11)
		noLoop()
	}
}
