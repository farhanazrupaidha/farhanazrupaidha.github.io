
let capture;
var saveButtonRed;
var saveButtonZinc;
var BackButton;
var heart;
var broken = 0;
var confirmTakeSnap = false;
let vScale = 10;
let video;

function setup() {
  var canvas = createCanvas (window.innerWidth, window.innerHeight);
  canvas.position (0, 0);
  canvas.parent('sketch-holder');
  refresh();
 
  //saveButton = createButton ('save');
  //saveButton.position (width/2 - 30, height - 60);
  //saveButton.mousePressed (saveImage);

 saveButtonRed = createButton("Save in Red");
 saveButtonRed.position(width/2 + 30, height - 60);
 saveButtonRed.mousePressed(saveImageRed);

 saveButtonZinc = createButton("Save in Zinc");
 saveButtonZinc.position(width/2 - 120, height - 60);
 saveButtonZinc.mousePressed(saveImageZinc);
 
 BackButton = createButton ("Refresh");
 BackButton.position (30, height - 30);
 BackButton.mousePressed (refresh);
 
}

function refresh() {
 capture = createCapture(VIDEO);
 capture.size (width + vScale, height + vScale);
 capture.hide();
 video = createGraphics (width, height);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background (200);
  //background (255, 0, 0);
  video.scale (-1, 1);
  //filter (THRESHOLD);
  video.image(capture, -window.innerWidth, 0, window.innerWidth, window.innerHeight);
  //video.image (capture, 0, 0, width, height);
  video.loadPixels ();

for (let y = vScale; y < height; y += vScale) {
    for (let x = vScale / 2; x < width; x += vScale) {
      let index = (y * video.width + x) * 4;
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];

      //let bright = (r + g + b) / 2; // 0 - 255
      let bright = (r + g + b) / 2;
      fill(bright);
      noStroke();

      let d = map(bright, 20, 100, 10, vScale);
      //rectMode(CENTER);
      //rect(x, y, d, d);
      arc(x, y, d, -y, 0, 200, d);
    }
  }

  if(broken == 0){
    //image(capture, width/2, 0);
    tint (255, 0, 0);
    //saveCanvas("mypictureinred.png", "png");
  }else if(broken == 1){
    image(capture, -window.innerWidth, 0, window.innerWidth, window.innerHeight);
    saveCanvas("mypictureinzinc.png", "png");
    broken = 0;
  }
}

function saveImageRed(){
 tint(255, 0, 0);
 broken = capture.get();
 //image(broken, 0, 0);
 imageMode (CENTER);
 image(capture, width/2, height/2, 0, 0);
 saveCanvas("mypictureinred.png", "png");
 confirmTakeSnap = true;
}

function saveImageZinc(){
  if(confirmTakeSnap){
   broken = 1;
  }
}