function setup() {
    const frame = document.querySelector("#frame");
    let canvas = createCanvas(frame.offsetWidth, frame.offsetHeight, WEBGL);
    canvas.parent('frame');

    angleMode(DEGREES)
    setWindowScale()
}

function windowResized(){
    points = []
    if(window.location !== window.parent.location){
        resizeCanvas(windowWidth, windowHeight)
    } else {
        resizeCanvas(frame.offsetWidth, frame.offsetHeight)
    }

    background(30);

    loop()
}

function draw() {
    background(30);
    rotateX(frameCount *0.6)
    rotateY(frameCount*0.2)

    noFill()

    for (let i = 0; i < 40; i++) {
        // let value = (100 + i * 10)
        // stroke(255, value, 255)

        let r = map(sin(frameCount / 2), -1, 1, 100, 200)
        let g = map(i, 0, 20, 0, 255)
        let b = map(cos(frameCount), -1, 1, 255, 0)
        
        stroke(r, g, b)
        rotate(5)

        beginShape()

        for (let j = 0; j < 360; j += 100){
            let rad = i * 3
            let x = rad * cos(j)
            let y = rad * sin(j)
            let z = sin(frameCount * 2 + i * 10) * 90
            
            vertex(x, y, z)
            
        }
        endShape(CLOSE)
        scale(scaleFactor)
    }



    if(frameCount === 1){
        noLoop()
    }
}

let scaleFactor = 1;
function setWindowScale(){
    if(windowWidth > 799){
        scaleFactor = 1.02
    } else {
        scaleFactor =1
    }
}

function windowResized(){
    setWindowScale()
    resizeCanvas(windowWidth, windowHeight)
}


let lastFrameCount = 0;
let framePause = false;
function mousePressed(){
     //when mouse pressed pause sketch
    if(lastFrameCount + 200 < new Date().getTime()){
        if (framePause){
            noLoop();
            framePause = false;
        } else {
            loop()
            framePause = true;
        }
    } 
    lastFrameCount = new Date().getTime();
}


