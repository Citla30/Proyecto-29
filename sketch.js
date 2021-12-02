const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img,Polygon;


function preload(){
  polygon_img=loadImage("polygon.png");
  L1=loadImage("I1.png");
  fondo=loadImage("fondo.png");
  f2=loadImage("fondo2.jpg");
  s2=loadImage("Sirena2.png");
  p1=loadImage("p1.png");
  p2=loadImage("p2.png");
  piedra=loadImage("Piedra1.png");
  piedra2=loadImage("Piedra2.png");
  araña=loadImage("araña.png");
  c1=loadImage("c1.png");
  c2=loadImage("c2.png");
  caracol=loadImage("caracol.png");
  G1=loadImage("guardia1.png");
  sirena=loadImage("Sirena1.png");
  e1=loadImage("I2.png");
  f3=loadImage("f3.png");
  E2=loadImage("espada2.png");
  t1=loadImage("Texto1.png");
  t2=loadImage("Texto2.png");
  t3=loadImage("Texto3.png");
  t4=loadImage("Texto 4.png");
  t5=loadImage("Texto5.png");
  t6=loadImage("t6.png");
  t7=loadImage("t7.png");
}
function setup() {
  createCanvas(1100,500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  Polygon = Bodies.circle(150,200,50);
  World.add(world,Polygon);

  fondo2=createSprite(550,250,1100,1100);
  fondo2.addImage(f2);
  fondo2.scale=1.6;
  fondo2.visible=false;

  fondo3=createSprite(230,250,1100,1100);
  fondo3.addImage(f3);
  fondo3.scale=0.8;
  fondo3.visible=false;

  Guardia=createSprite(300,250,100,100);
  Guardia.addImage(G1);
  Guardia.scale=0.4;
  Guardia.visible=false;
  Guardia.debug=false;

  Sirena=createSprite(60,250,100,100);
  Sirena.addImage(sirena);
  Sirena.scale=0.4;
  Sirena.visible=false;
  Sirena.setCollider("rectangle",0,0,200,900);

  Araña=createSprite(430,50,100,100);
  Araña.addImage(araña);
  Araña.scale=0.4;
  Araña.visible=false;

  Cangrejo=createSprite(750,250,100,100);
  Cangrejo.addImage(c1);
  Cangrejo.scale=0.4;
  Cangrejo.visible=false;

  Caracol=createSprite(590,450,100,100);
  Caracol.addImage(caracol);
  Caracol.scale=0.4;
  Caracol.visible=false;

  S2=createSprite(980,250,100,100);
  S2.addImage(s2);
  S2.scale=0.4;
  S2.visible=false;

  P1=createSprite(680,50,100,100);
  P1.addImage(p1);
  P1.scale=0.4;
  P1.visible=false;

  P2=createSprite(750,50,100,100);
  P2.addImage(p2);
  P2.scale=0.37;
  P2.visible=false;

  c3=createSprite(300,250,20,900);
  c3.visible=false;

  c4=createSprite(740,250,20,500);
  c4.visible=false;

  Escudo=createSprite(980,200,50,50);
  Escudo.addImage(e1);
  Escudo.scale=0.3;
  Escudo.visible=false;

  Piedra=createSprite(750,50,50,50);
  Piedra.addImage(piedra);
  Piedra.scale=0.3;
  Piedra.visible=false;

  Piedra2=createSprite(750,50,50,50);
  Piedra2.addImage(piedra2);
  Piedra2.scale=0.4;
  Piedra2.visible=false;

  Espada2=createSprite(1000,120);
  Espada2.addImage(E2);
  Espada2.scale=0.3;
  Espada2.visible=false;

  Texto=createSprite(1000,250);
  Texto.addImage(t1);
  Texto.scale=0.5;

  Texto2=createSprite(540,250);
  Texto2.addImage(t2);
  Texto2.scale=0.5;
  Texto2.visible=false;

  Texto3=createSprite(350,250);
  Texto3.addImage(t3);
  Texto3.scale=0.5;
  Texto3.visible=false;

  Texto4=createSprite(750,250);
  Texto4.addImage(t4);
  Texto4.scale=0.5;
  Texto4.visible=false;

  Texto5=createSprite(800,250);
  Texto5.addImage(t5);
  Texto5.scale=0.8;
  Texto5.visible=false;

  Texto6=createSprite(540,450);
  Texto6.addImage(t6);
  Texto6.scale=0.5;
  Texto6.visible=false;

  Texto7=createSprite(540,250);
  Texto7.addImage(t7);
  Texto7.scale=0.5;
  Texto7.visible=false;

  slingShot= new SlingShot(this.Polygon,{x:150,y:200});
  
  ground = new Ground();
  stand1 = new Stand(390,400,350,20);
  stand3 = new Stand(390,320,200,10);
  stand2 = new Stand(700,250,250,10);
  stand4 = new Stand(390,240,200,10);
  stand5 = new Stand(390,160,20,10);
  stand6 = new Stand(700,170,200,10);
  stand7 = new Stand(700,90,200,10);
 
  //nivel uno
  block1 = new B2(310,325,30,40);
  
  block2 = new B2(340,325,30,40);
  block3 = new B2(360,325,30,40);
  block4 = new B2(390,325,30,40);
  block5 = new B2(420,325,30,40);
  block6 = new B2(450,325,30,40);
  block7 = new B2(480,325,30,40);

  //nivel dos
  block8 = new B3(330,305,30,40);
  block9 = new B3(360,305,30,40);
  block10 = new B3(390,305,30,40);
  block11 = new B3(420,305,30,40);
  block12 = new B3(450,305,30,40);
  //nivel tres
  block13 = new B4(360,195,30,40);
  block14 = new B4(390,195,30,40);
  block15 = new B4(420,195,30,40);
  //parte superior
  block16 = new B1(390,90,30,40);

// segunda torre 
  block17 = new B2(640,190,30,40);
  block18 = new B2(670,190,30,40);
  block19 = new B2(700,190,30,40);
  block20 = new B2(730,190,30,40);
  block21 = new B2(760,190,30,40);
  //nivel dos
  block22 = new B3(670,110,30,40);
  block23 = new B3(700,110,30,40);
  block24 = new B3(730,110,30,40);
  //nivel tres
  block25 = new B1(705,10,50,50);

  Pl=createSprite(50,200,20,20);
  Pl.addImage(L1);
  Pl.scale=0.3;

}
function draw() {
  background(fondo); 
 
  textSize(20);
  fill("lightyellow");
  
  Pl.x=Polygon.position.x;
  Pl.y=Polygon.position.y;

  Escudo.y=Sirena.y;

  //ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  
  if(keyDown("RIGHT_ARROW")){
  Sirena.x=Sirena.x+10;
  Texto3.visible=true;
  Texto2.destroy();
  Texto6.destroy();
  }

  if(keyDown("LEFT_ARROW")){
    Sirena.x=Sirena.x-10;
    
  }

  if(keyDown("DOWN_ARROW")){
    Sirena.y=Sirena.y+10;
    
    }
  
    if(keyDown("UP_ARROW")){
      Sirena.y=Sirena.y-10;
      
    }


  if(Sirena.isTouching(Guardia)){
    Sirena.scale=0.2;
    Araña.velocityX=5;
    Araña.velocityY=5;
    Caracol.velocityX=-5;
    Caracol.velocityY=-5;
  }

  if(mousePressedOver(Araña)){
    c3.destroy();
    Texto3.destroy();
    }

  if(Araña.y>400){
    Araña.velocityX=-5;
    Araña.velocityY=-5;
  }

  if(Caracol.y<200){
    Caracol.velocityX=5;
    Caracol.velocityY=5;
  }

if(Sirena.isTouching(c3)){
  Escudo.velocityX=-5;
  Escudo.visible=true;
}

if(Sirena.isTouching(c4)){
  Guardia.velocityX=+5;
  Cangrejo.velocityX=-5;
  Escudo.velocityX=-5;
  Escudo.visible=true;
}

if(Sirena.isTouching(Araña)){
  Escudo.velocityX=-5;
  Escudo.visible=true;
}
if(Sirena.isTouching(Caracol)){
  Escudo.velocityX=-5;
  Escudo.visible=true;
}

if(Escudo.isTouching(Sirena)){
Escudo.destroy();
Sirena.destroy();
Araña.velocityY=0;
Araña.velocityX=0;
Caracol.velocityY=0;
Caracol.velocityX=0;
Cangrejo.velocityX=0;
Guardia.velocityX=0;
Texto7.visible=true;
}

if(mousePressedOver(P2)){
Piedra.velocityY=4;
Piedra.visible=true;
Escudo.destroy();
}

if(mousePressedOver(S2)){
  P1.visible=true;
  P2.visible=true;
  c4.destroy();
  }

  if(mousePressedOver(P1)){
    Piedra2.velocityY=4;
    Piedra2.velocityX=4;
    Piedra2.visible=true;
    }

if(Piedra.isTouching(Cangrejo)){
  Cangrejo.addImage("cangrejo2",c2);
  Cangrejo.changeImage("cangrejo2");
  Cangrejo.y=270;
  Piedra.velocityY=0;
  Piedra.y=270;
  c4.destroy();
  Texto4.destroy();
}

if(Sirena.x>400){
  Sirena.scale=0.3;
}

if(Piedra2.isTouching(S2)){
  S2.destroy();
  Piedra2.destroy();
  Espada2.visible=true;
}

if(Sirena.isTouching(Espada2)){
  Guardia.destroy();
  Caracol.destroy();
  Cangrejo.destroy();
  Piedra.destroy();
  P1.destroy();
  P2.destroy();
  Araña.destroy();
  fondo3.visible=true;
  Sirena.destroy();
  Espada2.destroy();
  S2.destroy();
  Texto5.visible=true;
}

if(Sirena.isTouching(Cangrejo)){
  Texto4.visible=true;
}
drawSprites();
}

function mouseDragged(){
  Polygon.position.x=mouseX;
  Polygon.position.y=mouseY;
}


function mouseReleased(){
  slingShot.fly();
}
