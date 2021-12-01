function preload(){
}

function setup(){
    canvas=createCanvas(640,460);
    canvas.position(430,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_colour="";
}
function draw(){
    image(video,0,0,640,460);
    tint(tint_colour);
}
function filter_tint(){
    tint_colour=document.getElementById("colour_name").value;
}
function take_snapshot(){
    save("Mypic.png")
}