var canvas;
var music;
var box1,box2,box3
var controlBox
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
box1=createSprite(50,570,400,50)
box2=createSprite(390,570,300,50)
box3=createSprite(700,570,350,50)
controlBox=createSprite(400,200,50,50)
box1.shapeColor="red"
box2.shapeColor="blue"
box3.shapeColor="green"
    //create 4 different surfaces

createEdgeSprites()



}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites()

controlBox.velocityY=4

    //add condition to check if box touching surface and make it box
    if(box1.isTouching(controlBox)){
        controlBox.shapeColor="red"
        controlBox.bounceOff(box1)
        controlBox.y=500
        controlBox.x=600
    }

    if(box2.isTouching(controlBox)){
        controlBox.shapeColor="blue"
        controlBox.bounceOff(box2)
        controlBox.y=400
        controlBox.x=50
    }

    if(box3.isTouching(controlBox)){
    controlBox.shapeColor="green"
    controlBox.bounceOff(box3)
    controlBox.y=400
    controlBox.x=400
    }

    
    drawSprites()
}
























