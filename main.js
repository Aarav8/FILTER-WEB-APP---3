
noseX=0;
noseY=0;
function preload()
{
    clonenose=loadImage("https://i.postimg.cc/QM1cBxKn/moustache-PNG38.png");
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw()
{
    image(video,0,0,300,300);
    image(clonenose,noseX,noseY,30,30);
}
function take_snapshot()
{
    save('download.png');
}

function modelLoaded()
{
    console.log("posenet is started");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y+30;
    }
}