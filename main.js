status_of_cocossd = "";
function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
canvas.position(250,350)
    video.hide();
} 
function start(){
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
object_name = document.getElementById("object_name").value;
}
function modelLoaded(){
    console.log("model loaded");
    status_of_cocossd = true;
}
function draw(){
    image(video, 0,0);

}