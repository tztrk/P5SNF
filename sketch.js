let cam;
let delay;
let aaa=300;
let bbb=300;
var angle = 0;
let img;
let img2;
var yaklas=0;
function preload() {
  img = loadImage('snf2.png');
  img2 = loadImage('snf4.png');

}
function setup() {
  createCanvas(600, 600, WEBGL);
  frameRate(120);
  r=random(7,7);
 cam = createCamera();
  specularMaterial(250);

noCursor();

}


function draw() {
//renklere ilişkin tanımlamalar
let renk6 = color(255,0,0);
let renk7 = color(0,255,0);
let renk8 = color(0,0,255);


//taban deseni renk değişimi
  renk = int(millis()/1000)%5
  if(renk==0){
   renk1 = color(255,0,0)
   renk2 = color(0,255,0)
   renk3 = color(0,0,255)
   renk4 = color(255,255,0)
   renk5 = color(134,49,147)}
  if(renk==1){
   renk2 = color(255,0,0)
   renk3 = color(0,255,0)
   renk4 = color(0,0,255)
   renk5 = color(255,255,0)
   renk1 = color(134,49,147)}
  if(renk==2){
   renk3 = color(255,0,0)
   renk4 = color(0,255,0)
   renk5 = color(0,0,255)
   renk1 = color(255,255,0)
   renk2 = color(134,49,147)}
  if(renk==3){
   renk4 = color(255,0,0)
   renk5 = color(0,255,0)
   renk1 = color(0,0,255)
   renk2 = color(255,255,0)
   renk3 = color(134,49,147)}
  if(renk==4){
   renk5 = color(255,0,0)
   renk1 = color(0,255,0)
   renk2 = color(0,0,255)
   renk3 = color(255,255,0)
   renk4 = color(134,49,147)}
  let beyaz = 255
  //angle artışı
  var xx = aaa*cos(angle);
  var zz = bbb*sin(angle);
  angle+=0.06;
  background(0);
  

  
  //küre
  push();
  directionalLight(renk6,xx,200,zz)
  directionalLight(renk7,-xx,200,-zz)
  directionalLight(renk8, zz,200,-xx)
  specularMaterial(250);
  rotateY(angle)
  stroke(255);
  strokeWeight(0.5);
  translate(0,-300,0)
  sphere(80,10,10)
  pop();
  
var easing = 0.228
var diff = mouseX-yaklas;
yaklas+= diff * easing;
  eleman(yaklas,100);

  //tabana yansıyan ışık
  noStroke();
directionalLight(renk6,xx,200,zz)
directionalLight(renk7,-xx,200,-zz)
directionalLight(renk8, zz,200,-xx)
//kamera açısı
 cam.setPosition(0, -100, 400);
  rotateX(radians(180));
 //taban ve küre cizgiler 
  strokeWeight(2);
  stroke(mouseX%255, mouseY%255, (mouseX+mouseY)%255, 0.1);
  
  //zemin dizilim
 for (let kk = -200; kk <=200; kk+=20) { 
   for (let ll = -200; ll <=200; ll+=20) {
   if(kk==-100||kk==100||ll == -100||ll==100){        
      push();
     translate(kk,0,ll);
     fill(renk1);
     box(20);
      pop();
     }    
     
if(kk == -120||kk==-80||kk==120||kk==80||ll == -120||ll==-80||ll==120||ll==80){        
       push();
     translate(kk,0,ll);
     fill(renk5);
     box(20);
      pop();
     }     
     
if(kk == -140||kk==-60||kk==140||kk==60||ll == -140||ll==-60||ll==140||ll==60){        
       push();
     translate(kk,0,ll);
     fill(renk4);
     box(20);
         pop();
     }
     
if(kk == -160||kk==-40||kk==160||kk==40||ll == -160||ll==-40||ll==160||ll==40){        
       push();
     translate(kk,0,ll);
     fill(renk3);
     box(20);
         pop();
     }
     
if(kk == -180||kk==-20||kk==180||kk==20||ll == -180||ll==-20||ll==180||ll==20){        
       push();
     translate(kk,0,ll);
     fill(renk2);
     box(20);
      pop();
     }
if(kk == -200||kk==0||kk==200||ll ==-200||ll==0||ll==200){
      push();
     translate(kk,0,ll);
     fill(beyaz);
     box(20);
      pop();}
   }}


function eleman(xxxx,yyyy) {
  let aaaa =600
  let bbbb = 600
  let renk6 = color(255,0,0);
  let renk7 = color(0,255,0);
  let renk8 = color(0,0,255);
  var xxx = aaaa*cos(angle);
  var zzz = bbbb*sin(angle);
  angle+=0.06;
  directionalLight(renk6, xxx,500,10)
  directionalLight(renk7,-xxx,400,10)
  directionalLight(renk8, zzz,300,10)
  
  specularMaterial(250);
  
  
  translate(-width / 2, -height / 2, 0)
  stroke(255);
      if((yaklas)>mouseX){
      if (mouseIsPressed) {
    image(img2, xxxx, yyyy, 92, 197);
  } 
      else {
    image(img, xxxx, yyyy, 92, 197);
  }}
      if((yaklas)<mouseX){ 
        {
    push();
       scale(-1,1);
    if (mouseIsPressed) {
    image(img2, -xxxx, yyyy, 92, 197);
  } else {
    image(img, -xxxx, yyyy, 92, 197); 
   
  } pop();
       }}



  

}}
