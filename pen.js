status = "";
pen_img = "";
objects = [];

function preload() {
    pen_img = loadImage("pen.jpg");
}

function setup(){
    canvas = createCanvas(640, 350);
    canvas.position(315, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    object_Detector.detect(pen_img, gotesults);
}

function gotResults(results, error){
    if(error){
        console.error(error);
    }
    console.log(results);
    
}

function draw(){
    image(pen_img, 0, 0, 640, 350);

    if(status != ""){
        for(i=0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Object Detected";

            fill("#fc0303");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x - 800, objects[i].y - 175);
            noFill();
            stroke("#fc0303");
            rect(objects[i].x - 800, objects[i].y - 175, objects[i].width - 910, objects[i].height - 2640);
        }
    }
}