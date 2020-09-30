var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var fg, og;
var background1, backgroundi;
var background2, backgroundo;
var background3,backgroundp;
var background4,backgrounda;
var ground1;
var ground2;
var ground3;
var score = 0;
var range = 0;
var MENU = 0;
var LEVEL1 = 1;
var LEVEL2 = 2;
var LEVEL3 = 3;
var LEVEL4 = 4;
var END = 6;
var gameState = MENU;
var g1, g3, g4;
var g2;
var lock2, locki;
var lock3, locko;
var lock4, lockp;
var restart, restarti;
var gameOver, gameOveri;
var Win = 7;
var L1comp = false;
var L2comp = false;
var L3comp = false;
var L4comp = false;
var blocki;
var menu1,menui;
var menu;
var click;
var meso;
var l1so;
var l2so;
var l3so;
var l4so;

function preload() {


  backgroundi = loadImage("jungle0.png");
  backgroundo = loadImage("jungle2.jpg");
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")
  monkeyStop = loadAnimation("sprite_0.png");
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  locki = loadImage("lock0.png");
  locko = loadImage("lock0.png");
  lockp = loadImage("lock0.png");
  restarti = loadImage("restart20.png");
  gameOveri = loadImage("gameOver0 (3).png");
  backgroundp = loadImage("night.jpg");
  blocki = loadImage("block0.png");
  backgrounda = loadImage("sunrise.jpg");
  menui = loadImage("menu0.png");
  menuo = loadImage("menu2.jpg");
  click = loadSound("click.ogg");

  //soundFormat(.wav);
  meso = loadSound("meso.wav");
  l1so = loadSound("l1so2.wav");
  l2so = loadSound("l3.mp3");
  l3so = loadSound("l4.wav");
  l4so = loadSound("l5.wav");

}



function setup() {
  createCanvas(700, 400);

  background1 = createSprite(width / 2, height / 2, 10, 10);
  background1.scale = 4;
  background1.addImage(backgroundi);  

  background2 = createSprite(width / 2, height / 2, 10, 10);
  background2.scale = 4;
  background2.addImage(backgroundo);

  background4 = createSprite(width / 2, height / 2, 10, 10);
  background4.scale = 3;
  background4.addImage(backgrounda);
  background4.visible = false;

  background3 = createSprite(width / 2, height / 2, 10, 10);
  background3.scale = 3;
  background3.addImage(backgroundp);
  background3.visible = false;


  ground1 = createSprite(600 / 2, 400, width + 100, 60);
  ground2 = createSprite(600 / 2, 400, width, 30);
  ground3 = createSprite(600 / 2, 400, width + 100, 60);
  ground3.visible = false;


  monkey = createSprite(60, 150, 30, 30);
  monkey.addAnimation("running", monkey_running);
  monkey.addAnimation("Stop", monkeyStop);
  monkey.scale = 0.2;
  frameRate(45.5);

  g1 = createSprite(100, 100, 40, 40);
  g1.visible = false;

  g2 = createSprite(250, 200, 40, 40);
  g2.visible = false;

  g3 = createSprite(450, 150, 40, 40);
  g3.visible = false;

  g4 = createSprite(650, 50, 40, 40);
  g4.visible = false;



  lock2 = createSprite(247, 200, 40, 40);
  lock2.addImage(locki);
  lock2.scale = 0.2;

  lock3 = createSprite(447, 150, 40, 40);
  lock3.addImage(locko);
  lock3.scale = 0.2;

  lock4 = createSprite(647, 50, 40, 40);
  lock4.addImage(lockp);
  lock4.scale = 0.2;

  restart = createSprite(width / 2.2, height / 1.5, 40, 40);
  restart.addImage(restarti);
  restart.scale = 0.2;
  restart.visible = false;

  menu1 = createSprite(width / 1.9, height / 1.5, 40, 40);
  menu1.addImage(menui);
  menu1.scale = 0.09;
  menu1.visible = false;


  gameOver = createSprite(width / 2, height / 1.6, 40, 40);
  gameOver.addImage(gameOveri);
  gameOver.scale = 1;
  gameOver.visible = false;


  fg = new Group();
  og = new Group();
  bg = new Group();
  
  
}


function draw() {
  // background(255);
  var c = Math.round(random(1,6));
  if(c === 1){
    console.log("hello");

  }
  if(c === 2){
    console.log("hello! How are you");

  }
  if(c === 3){
    console.log("MEOW o_o ");

  }
  if(c === 3){
    console.log("ting tong");

  }else{
    console.log("hello");
  }


  g1.shapeColor = color("#ff8000");
  g2.shapeColor = color("#40ff00");
  g3.shapeColor = color("#00bfff");
  g4.shapeColor = color("#8000ff");

  if (gameState === MENU) {
    background(menuo);
    background1.visible = false;
    background2.visible = false;
    background3.visible = false;
    background4.visible = false;
    monkey.visible = false;
    ground1.visible = false;
    ground2.visible = false;


    og.setVisibleEach(false);
    fg.setVisibleEach(false);

    if(!meso.isPlaying()){
      meso.play();
      l1so.stop();
      l2so.stop();
      l3so.stop();
      l4so.stop();

    }
    g1.visible = true;
    g2.visible = true;
    g3.visible = true;
    g4.visible = true;

    lock2.visible = true;
    lock3.visible = true;
    lock4.visible = true;

    background2.visible = false;
    background3.visible = false;
    menu1.visible = false;
    gameOver.visible = false;
    restart.visible = false;
    bg.setVisibleEach = false;
    ground3.visible = false;
    bg.destroyEach();

    if (L1comp === true) {
      lock2.visible = false;
      lock3.visible = true;
      lock4.visible = true;
    }
    if (L2comp === true) {
      lock2.visible = false;
      lock3.visible = false;
      lock4.visible = true;
    }
    if (L3comp === true) {
      lock2.visible = false;
      lock3.visible = false;
      lock4.visible = false;
    }
    textSize(20);
    stroke("#DB7093");
    fill("#DB7093");
    text("LEVEL 1", 65, 60);
    text("LEVEL 2", 215, 160);
    text("LEVEL 3", 415, 110);
    text("LEVEL 4", 615, 20);
    textAlign(CENTER);
    fill("darkSalmon");
    text("LEVEL SELECTION", 350, 20);

    if (mousePressedOver(g1)) {
      gameState = LEVEL1;
      range = 0;
      click.play();
    }
    if (mousePressedOver(g2) && L1comp === true) {
      gameState = LEVEL2;
      range = 0;
      click.play();
    }
    if (mousePressedOver(g3) && L2comp === true) {
      gameState = LEVEL3;
      range = 0;
      click.play();
    }
    if (mousePressedOver(g4) && L3comp === true) {
      gameState = LEVEL4;
      range = 0;
      click.play();
    }

  }

  if (keyDown("V")) {
    gameState = LEVEL1;

  }

  if (gameState === LEVEL1) {
    meso.stop();
    if(!l1so.isPlaying()){
    l1so.play();
    l2so.stop();
    l3so.stop();
    l4so.stop();
    }
    menu1.visible = false;
    gameOver.visible = false;
    restart.visible = false;

    background1.visible = true;
    monkey.visible = true;
    ground1.visible = true;
    ground2.visible = true;
;
    background1.velocityX = -(6 + 2 * range / 100);

    g1.visible = false;
    g2.visible = false;
    g3.visible = false;
    g4.visible = false;

    lock2.visible = false;
    lock3.visible = false;
    lock4.visible = false;

    if (background1.x < 225) {
      background1.x = background1.width / 2;
    }

    if (keyDown("space") && monkey.y >= 310 && monkey.collide(ground1)) {
      monkey.velocityY = -1;
      monkey.changeImage("Stop", monkeyStop);
      monkey.velocityY = -15;

    }

    if (monkey.y >= 310) {
      //  monkey.velocityY = -13;
      monkey.changeAnimation("running");
    } else if (monkey.y === 350) {
      monkey.changeAnimation("running");

    }


    if (range == 700) {
      gameState = Win;
      L1comp = true;

    }


    monkey.velocityY = monkey.velocityY + 0.8;

    var selectRock = 1;

    if (World.frameCount % Math.round(random(59, 60)) == 0) {
      if (selectRock == 1) {
        rocks();
      }
    }
    var selectfood = Math.round(random(1, 1));
    if (World.frameCount % 300 == 0) {
      if (selectfood == 1) {
        foods();
      }
    }
    //    World.frameCount % (60 - 2 / range / 100);

    if (monkey.isTouching(og)) {
      gameState = END;
    }



    if (monkey.isTouching(fg)) {
      fg.destroyEach();
      score = score + 100;
    }

    gameOver.visible = false;
    restart.visible = false;



    range = range + Math.round(getFrameRate() / 60);


  }
 // background1.visible = false;
  background2.visible = false;
  
  if (background2.x < 225) {
    background2.x = background3.width / 2;
    
     
     
  }
  if (background3.x < 225) {
    background3.x = background3.width / 2;
    
     
     
  }
  if (background4.x < 225) {
    background4.x = background4.width / 2;
    
     
     
  }

  
  if (gameState === LEVEL2) {
    
    meso.stop();
    if(!l2so.isPlaying()){
    l1so.stop();
    l2so.play();
    l3so.stop();
    l4so.stop();
    }

    menu1.visible = false;
    gameOver.visible = false;
    restart.visible = false;
    
    meso.stop();
    background1.visible = false;
    background2.visible = true;
    monkey.visible = true;
    ground1.visible = true;
    ground2.visible = true;

    background2.velocityX = -(10 + 2 * range / 100);

    g1.visible = false;
    g2.visible = false;
    g3.visible = false;
    g4.visible = false;

    lock2.visible = false;
    lock3.visible = false;
    lock4.visible = false;


    if (keyDown("space") && monkey.y >= 310 && monkey.collide(ground1)) {
      monkey.velocityY = -1;
      monkey.changeImage("Stop", monkeyStop);
      monkey.velocityY = -15;

    }

    if (monkey.y >= 310) {
      //  monkey.velocityY = -13;
      monkey.changeAnimation("running");
    } else if (monkey.y === 350) {
      monkey.changeAnimation("running");

    }


    if (range == 1200) {
      gameState = Win;
      L2comp = true;

    }


    monkey.velocityY = monkey.velocityY + 0.8;

    var select_Rock = 1;

    if (World.frameCount % Math.round(random(59, 60)) == 0) {
      if (select_Rock == 1) {
        rocks();
      }
    }
    var select_food = Math.round(random(1, 1));
    if (World.frameCount % 300 == 0) {
      if (select_food == 1) {
        foods();
      }
    }
    //    World.frameCount % (60 - 2 / range / 100);

    if (monkey.isTouching(og)) {
      gameState = END;
    }



    if (monkey.isTouching(fg)) {
      fg.destroyEach();
      score = score + 1;
    }

    gameOver.visible = false;
    restart.visible = false;



    range = range + Math.round(getFrameRate() / 60);
  }

  if (gameState === LEVEL3) {
  //  meso.stop();
    menu1.visible = false;
    gameOver.visible = false;
    restart.visible = false;

    meso.stop();
    if(!l3so.isPlaying()){
    l1so.stop();
    l2so.stop();
    l3so.play();
    l4so.stop();
    }

    background1.visible = false;
    background2.visible = false;
    background3.visible = true;
    background4.visible = false;
    monkey.visible = true;
    ground1.visible = false;
    ground2.visible = false;
    ground3.visible = true;
    bg.setVisibleEach = true;
    background3.velocityX = -(10 + 2 * range / 100);

    g1.visible = false;
    g2.visible = false;
    g3.visible = false;
    g4.visible = false;

    lock2.visible = false;
    lock3.visible = false;
    lock4.visible = false;


    if (keyDown("space") && monkey.y >= 310 && monkey.collide(ground1)) {
      monkey.velocityY = -15;
      monkey.changeImage("Stop", monkeyStop);
      monkey.velocityY = -15;

    }
    if (keyDown("space") && monkey.collide(bg)) {
      monkey.velocityY = -18;
      monkey.changeImage("running", monkey_running);
      monkey.velocityY = -18;

    }

    if (monkey.y >= 310) {
      //  monkey.velocityY = -13;
      monkey.changeAnimation("running");
    } else if (monkey.y === 350) {
      monkey.changeAnimation("running");

    }


    if (range == 1700) {
      gameState = Win;
      L3comp = true;

    }


    monkey.velocityY = monkey.velocityY + 0.8;

    var select_Rock = Math.round(random(1,2));

    if (World.frameCount % Math.round(random(59, 60)) == 0) {
      if (select_Rock == 1) {
        rocks();
      }
    }
    if (World.frameCount % Math.round(random(49, 50)) == 0) {
       if(select_Rock == 2){
          blocks();
    }
    }
    var select_food = Math.round(random(1, 1));
    if (World.frameCount % 300 == 0) {
      if (select_food == 1) {
        foods();
      }
    }
    //    World.frameCount % (60 - 2 / range / 100);

    if (monkey.isTouching(og) || monkey.x <= 0) {
      gameState = END;
    }



    if (monkey.isTouching(fg)) {
      fg.destroyEach();
      score = score + 1;
    }

    gameOver.visible = false;
    restart.visible = false;
    var edges = createEdgeSprites();
    monkey.collide(edges[3]);

    if(monkey.collide(edges[1])){
      monkey.velocityY = -10;

    }
    
    
    range = range + Math.round(getFrameRate() / 60);
    monkey.collide(bg);

  }

  if (gameState === LEVEL4) {
    

    meso.stop();
    if(!l4so.isPlaying()){
    l1so.stop();
    l2so.stop();
    l3so.stop();
    l4so.play();
    }

    menu1.visible = false;
    gameOver.visible = false;
    restart.visible = false;

    meso.stop();
    background1.visible = false;
    background2.visible = false;
    background3.visible = false;
    background4.visible = true;
    monkey.visible = true;
    ground1.visible = false;
    ground2.visible = false;
    ground3.visible = true;
    bg.setVisibleEach = true;

    background4.velocityX = -(13 + 2 * range / 100);
    frameRate((45 + 1 * range / 100)) ;
    g1.visible = false;
    g2.visible = false;
    g3.visible = false;
    g4.visible = false;

    lock2.visible = false;
    lock3.visible = false;
    lock4.visible = false;


    if (keyDown("space") && monkey.y >= 310 && monkey.collide(ground1)) {
      monkey.velocityY = -15;
      monkey.changeImage("Stop", monkeyStop);
      monkey.velocityY = -15;

    }
    if (keyDown("space") && monkey.collide(bg)) {
      monkey.velocityY = -18;
      monkey.changeImage("running", monkey_running);
      monkey.velocityY = -18;

    }

    if (monkey.y >= 310) {
      //  monkey.velocityY = -13;
      monkey.changeAnimation("running");
    } else if (monkey.y === 350) {
      monkey.changeAnimation("running");

    }


    if (range == 2000) {
      gameState = Win;
      L4comp = true;

    }


    monkey.velocityY = monkey.velocityY + 0.8;

    var select_Rock = Math.round(random(1,2));

    if (World.frameCount % Math.round(random(59, 60)) == 0) {
      if (select_Rock == 1) {
        rocks();
      }
    }
    if (World.frameCount % Math.round(random(49, 50)) == 0) {
       if(select_Rock == 2){
          blocks();
    }
    }
    var select_food = Math.round(random(1, 1));
    if (World.frameCount % 300 == 0) {
      if (select_food == 1) {
        foods();
      }
    }
    //    World.frameCount % (60 - 2 / range / 100);

    if (monkey.isTouching(og) || monkey.x <= 0) {
      gameState = END;
    }



    if (monkey.isTouching(fg)) {
      fg.destroyEach();
      score = score + 1;
    }

    gameOver.visible = false;
    restart.visible = false;
    var edges = createEdgeSprites();
    monkey.collide(edges[3]);

    if(monkey.collide(edges[1])){
      monkey.velocityY = -10;

    }
    
    
    range = range + Math.round(getFrameRate() / 60);
    monkey.collide(bg);

  }

  if (gameState === END) {
    background1.velocityX = 0;
    background2.velocityX = 0;
    background3.velocityX = 0;
    background4.velocityX = 0;
    monkey.velocityY = 0;
    monkey.changeAnimation("Stop");
    og.setVelocityXEach(0);
    bg.setVelocityXEach(0);
    fg.setVelocityXEach(0);
    og.setLifetimeEach(-1);
    bg.setLifetimeEach(-1);
    fg.setLifetimeEach(-1);

    gameOver.visible = true;
    restart.visible = true;
    menu1.visible = true;

    lock2.visible = false;
    lock3.visible = false;
    lock4.visible = false;

    if(mousePressedOver(menu1)){
      gameState = MENU;


    }

    if (mousePressedOver(restart)) {
      if (L1comp === false) {
        gameState = LEVEL1;
      } else if (L1comp === true) {
        gameState = LEVEL2;
        background1.visible = false;
      }
      if(L2comp === true){
        gameState = LEVEL3;
        background1.visible = false;
        background2.visible = false;
        monkey.x = 60;
        monkey.velocityX = 0;
      }
      if(L3comp === true){
        gameState = LEVEL4;
        background1.visible = false;
        background2.visible = false;
        background3.visible = false;
        monkey.x = 60;
        monkey.velocityX = 0;
      }
      
      background2.velocityX = -(10 + 2 * range / 100);
      monkey.velocityX = 0;
     // background3.velocityX = -(10 + 2 * range / 100);
      og.destroyEach();
      fg.destroyEach();
      bg.destroyEach();
      monkey.changeAnimation("running");
      range = 0;
      score = 0;

    }

  }

  monkey.collide(ground2);


  ground1.shapeColor = color("#6d9717");
  ground2.shapeColor = color("#6d9717");
  drawSprites();
  if (gameState === LEVEL1) {

    textSize(25);
    fill("darkgreen");
    strokeWeight(1.5);
    stroke("darkgreen");
    text("Score: " + score, 30, 30);

    textSize(23);
    fill("pink");
    strokeWeight(1.5);
    stroke("darkgreen");
    text("Range: " + range, 30, 60);
  }
  if (gameState === LEVEL2) {
    textAlign(LEFT);
    textSize(25);
    fill("darkgreen");
    strokeWeight(1.5);
    stroke("darkgreen");
    text("Score: " + score, 30, 30);

    textSize(23);
    fill("pink");
    strokeWeight(1.5);
    stroke("darkgreen");
    text("Range: " + range, 30, 60);
  }
  if (gameState === LEVEL3) {
    textAlign(LEFT);
    textSize(25);
    fill("darkgreen");
    strokeWeight(1.5);
    stroke("darkgreen");
    text("Score: " + score, 30, 30);

    textSize(23);
    fill("pink");
    strokeWeight(1.5);
    stroke("darkgreen");
    text("Range: " + range, 30, 60);
  }
  if (gameState === LEVEL4) {
    textAlign(LEFT);
    textSize(25);
    fill("darkgreen");
    strokeWeight(1.5);
    stroke("darkgreen");
    text("Score: " + score, 30, 30);

    textSize(23);
    fill("pink");
    strokeWeight(1.5);
    stroke("darkgreen");
    text("Range: " + range, 30, 60);
  }

  if (gameState === END) {
    
    textSize(25);
    fill("darkgreen");
    strokeWeight(1.5);
    stroke("darkgreen");
    text("Score: " + score, 30, 30);

    textSize(23);
    fill("pink");
    strokeWeight(1.5);
    stroke("darkgreen");
    text("Range: " + range, 30, 60);
  }
  if (gameState === Win) {
    if(L4comp === false){
    background1.velocityX = 0;
    background2.velocityX = 0;
    background3.velocityX = 0;
    background4.velocityX = 0;

    monkey.velocityY = 0;
    monkey.changeAnimation("Stop");
    og.setVelocityXEach(0);
    bg.setVelocityXEach(0);
    fg.setVelocityXEach(0);
    og.setLifetimeEach(-1);
    fg.setLifetimeEach(-1);
    bg.setLifetimeEach(-1);

    textAlign(CENTER);
    textSize(25);
    strokeWeight(1.5)
    stroke("coral");
    fill("coral");
    text("LEVEL COMPLETE", width / 2, height / 2);
    
    menu1.visible = true;

    if(mousePressedOver(menu1)){
      gameState = MENU;
    }

    textAlign(LEFT);
    textSize(25);
    fill("darkgreen");
    strokeWeight(1.5);
    stroke("darkgreen");
    text("Score: " + score, 30, 30);

    textSize(23);
    fill("pink");
    strokeWeight(1.5);
    stroke("darkgreen");
    text("Range: " + range, 29, 60);
  }
    if(L4comp === true){
      background1.velocityX = 0;
      background2.velocityX = 0;
      background3.velocityX = 0;
      background4.velocityX = 0;

      monkey.velocityY = 0;
      monkey.changeAnimation("Stop");
      og.setVelocityXEach(0);
      bg.setVelocityXEach(0);
      fg.setVelocityXEach(0);
      og.setLifetimeEach(-1);
      fg.setLifetimeEach(-1);
      bg.setLifetimeEach(-1);

      menu1.visible = true;

      if(mousePressedOver(menu1)){
        gameState = MENU;
      }
      
      if (mousePressedOver(g1)) {
        gameState = LEVEL1;
        range = 0;
        click.play();
      }
      if (mousePressedOver(g2) && L1comp === true) {
        gameState = LEVEL2;
        range = 0;
        click.play();
      }
      if (mousePressedOver(g3) && L2comp === true) {
        gameState = LEVEL3;
        range = 0;
        click.play();
      }
      if (mousePressedOver(g4) && L3comp === true) {
        gameState = LEVEL4;
        range = 0;
        click.play();
      }

      textAlign(LEFT);
      textSize(25);
      fill("darkgreen");
      strokeWeight(1.5);
      stroke("darkgreen");
      text("Score: " + score, 30, 30);

      textSize(23);
      fill("pink");
      strokeWeight(1.5);
      stroke("darkgreen");
      text("Range: " + range, 29, 60);

      gameState === LEVEL4;
      textAlign(CENTER);
      textSize(45);
      strokeWeight(1.5)
      stroke("coral");
      fill("coral");
      text("YOU WIN", width / 2, height / 2);
    }
   // gameState = MENU;
  }
  
}

function rocks() {
  var rock;
  rock = createSprite(random(700, 725), 350, 10, 10);
  rock.addImage(obstaceImage);
  rock.scale = 0.2;
  rock.velocityX = -(13 + 2 * range / 100);
  rock.lifetime = 65;
  og.add(rock);

  rock.setCollider("circle", 0, 0, 200);
  rock.debug = false;

  if(gameState == LEVEL3){
    rock.x = random(700, 715)
  
  }
}

function blocks() {
  var block;
  block = createSprite( 725, 340, 10, 10);
  block.addImage(blocki);
  block.scale = 2;
  block.velocityX = -(13 + 2 * range / 100);//-(13 + 2 * range / 100)
  block.lifetime = 65;
  bg.add(block);
  block.setCollider("circle", 0, 0, 200);
  block.debug = false;
  block.x = random(735, 740);

  block.setCollider("rectangle",0,0,50,50);
  block.debug = false;

  block.collide(block);

}

function foods() {
  var food;
  food = createSprite(Math.round(random(710, 750)), Math.round(random(270, 290)), 10, 10);
  food.addImage(bananaImage);
  food.scale = 0.2;
  food.velocityX = -13;
  food.lifetime = 65;
  fg.add(food);
}