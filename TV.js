status = "";
TV_img = "";

function preload(){
    TV_image = loadImage("TV.png");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_detector = ml5.object_detector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_detector.detect(TV_image,gotResults);
}

function gotResults(results,error){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(TV_image,0,0,640,350);
}