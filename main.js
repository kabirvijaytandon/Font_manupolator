function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
console.log('poseNet Is Initialized!')
}

function gotPoses(results)
{
if(results.length > 0)
{
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("leftWrist = " + leftWristX + "rightWrist = " + rightWristX + "difference = " + difference);
}
}

noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
textSize="";


function draw() {
    textSize(difference)
  background('#969A97');
  fill("#F90093");
  stroke("#F90093");
text('kabir', 50, 400);
}
