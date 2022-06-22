status="";
video="";

function perload(){
    video = createVideo(VIDEO);
    video.hide();
}
function setup(){
    canvas= createCanvas(650 ,650);
    canvas.center();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("start").innerHTML = "Status : Detecting Objects";
/*document.getElementById("input")*/
}
function modelLoaded(){
    console.log("model loaded");
}
function draw(){
    image(video, 0, 0, 650, 650);
}
