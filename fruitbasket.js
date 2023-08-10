status = "";
fruit_basket_img = "";
objects = [];

function preload(){
    fruit_basket_image = loadImage("fruit_basket.png");
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
    object_detector.detect(fruit_basket_image,gotResults);
}

function gotResults(results,error){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(fruit_basket_image,0,0,640,350);
    if(Status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("Status").innerHTML = "Status : Objects Detected";
        
            fill("#fc0303");
            percent = floor(objects(i).confidence * 100);
            text(objects(i).label + " " + percent + "%",objects(i).height);
            noFill();
            stroke("#fc0303");
            Rect(objects(i).x, objects(i).y, objects(i).width, objects(i).height);
        }
    }
}