//Josh Tuffnell
//1/18/2022
//n220

//application level variables
let size = 10;

//setup the application
function setup() {
    //create canvas of size 800 - big enough to draw on
    createCanvas(800,600);
/*
circle(150,150,40);
circle(300,300,40);
arc(200, 300, 200, 200, 0, PI, CHORD);
*/
}
function draw(){
    //increase size
    size = size + 1;
    console.log(size);
    //change fill color to red
    fill(255,99,99);
    //draw a circle at an increasing size
    circle(150,150,size);

    if(size > 200){
        fill(255,99,255);
    }
}