var ball;
var database;
var position;

function setup(){
    createCanvas(400,400);
    database= firebase.database();
    ball = createSprite(200,200,10,10);
    ball.shapeColor = "red";

    var ballposition= database.ref("ball/position");
    ballposition.on (value,readposition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+5);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
