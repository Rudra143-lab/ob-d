// Create Here Variables
img="";

function setup(){
   canvas=createCanvas(600,400);
   canvas.center();
}

function preload(){
   img=loadImage('images/dog_cat.jpg');
//    Full Form of JPEG is = Joint-Photographic-expert-group
}

function draw(){
    image(img,0,0,600,400);
    fill('#dc3545');
    text('Dog and cat',30,65);
    textSize(24);
    noFill();
    stroke('#dc3545');
    rect(10,40,500,350);
}
