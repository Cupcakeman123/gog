var noseX = 0;
var noseY = 0;

function preload()
{
    clown_nose = loadImage("https://i.postimg.cc/kgNnZcrB/bob.jpg")
}

function setup()
{
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.poseNet("pose", gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initalized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + result[0].poseNet.nose.x);
        console.log("nose y = " + result[0].poseNet.nose.y);
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY)
}

function take_snapshot()
{
    save('myFliterImage.png')
}