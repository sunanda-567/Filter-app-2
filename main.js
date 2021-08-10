function preload() {

}

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();

    video= createCapture(VIDEO);
    video.size(300,300); 
    video.hide();

    posenet=ml5.poseNet(video, modelLoaded)
    posenet.on('pose', gotPoses);
 }
 
 function modelLoaded()
 {
     console.log("posenet.initialized")
 }
 
 function gotPoses(results)
 {
     if(results.length > 0)
     {
         console.log(results);
         console.log("mouth x ="+results[0].pose.nose.x);
         console.log("mouth y ="+results[0].pose.nose.y);
     }
 }
 

function draw() {
    image(video, 0, 0, 300, 300);
}
function takesnapshot() {
    save('my_pic.png')
}