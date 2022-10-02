status="";


function setup(){
canvas=createCanvas(400,300);
canvas.center();

video = createCapture(VIDEO);
video.size(400,300);
video.hide();

}

function start(){
    objectDetector= ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";

    object_find= document.getElementById("object_name").value;
}

function modelloaded(){
    console.log("model loaded!");
    status=true;
}
function draw(){
    image(video,0,0,400,300);
}