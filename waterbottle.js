status = "";
water_bottle_img = "";

function preload(){
    water_bottle_image = loadImage("water_bottle.png");
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
    object_detector.detect(water_bottle_image,gotResults);
}

function gotResults(results,error){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(water_bottle_image,0,0,640,350);
}