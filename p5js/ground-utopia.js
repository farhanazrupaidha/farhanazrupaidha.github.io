
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;
let img17;
let img18;
let img19;
let img20;
let img21;
let img22;
let img23;
let img24;
let img25;
let img26;
let img27;
let img28;

function setup() {
  //createCanvas(window.innerWidth, 607, WEBGL);
  var canvas = createCanvas (window.innerWidth, window.innerHeight, WEBGL);
  canvas.position (0, 0);
  canvas.parent('sketch-holder');

  noCursor ();
  //cursor (CROSS);

  img1 = loadImage('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/esp_060176_2640.jpg');
  //img = loadImage ('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/PIA00183-MC-23-AeolisRegion-19980605.jpg/1280px-PIA00183-MC-23-AeolisRegion-19980605.jpg');
  //img1 = loadImage('Images/pictures/ground/utopia/esp_060176_2640.jpg');
  img2 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/661924main_PIA14434_full.jpg');
  img3 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia23182.jpg');
  img4 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia23454.jpg');
  img5 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia21267.gif');
  img6 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/esp_040811_2410.jpg');
  img7 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia23064.jpg');
  img8 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia23239.jpg');
  img9 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia22684.jpg');
  img10 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia22533.jpg');
  img11 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/marssnow.jpg');
  img12 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia22348.jpg');
  img13 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia22331-16.jpg');
  img14 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia22182.jpg');
  img15 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/esp_050703_2560.jpg');
  img16 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia22187.jpg');
  img17 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia22333.jpg');
  img18 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia21609.jpg');
  img19 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia21637.jpg');
  img20 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia21639.jpg');
  img21 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia21605.jpg');
  img22 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia21600.jpg');
  img23 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia21593.jpg');
  img24 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia22241-1041.jpg');
  img25 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia21953.jpg');
  img26 = loadImage ('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia22587.jpg');
  img27 = loadImage ('https://images-assets.nasa.gov/image/PIA20042/PIA20042~medium.jpg');
  img28 = loadImage ('https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001173/GSFC_20171208_Archive_e001173~medium.jpg');
  //img28 = loadImage ('https://images-assets.nasa.gov/image/PIA20042/PIA20042~medium.jpg');

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

  background(0);

  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //texture(img2);
  //fill (0);
  //stroke (255, 10, 10);
  sphere (200);
  //box (500, 500, 500);
  pop();

   if ((keyIsPressed == true) && (key == 'q')) {
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture (img1);
    sphere (530);
  }

  if ((keyIsPressed == true) && (key == 'a')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img2);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'z')) {
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img3);
  sphere (530);
}

 if ((keyIsPressed == true) && (key == 'w')) {
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img4);
  sphere (530);
 }

 if ((keyIsPressed == true) && (key == 's')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img5);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'x')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img6);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'e')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img7);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'd')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img8);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'c')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img9);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'r')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img10);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'f')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img11);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'v')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img12);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 't')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img13);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'g')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img14);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'b')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img15);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'y')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img16);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'h')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img17);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'n')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img18);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'u')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img19);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'j')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img20);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'm')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img21);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'i')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img22);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'k')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img23);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'o')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img24);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'l')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img25);
   sphere (530);
 }

 if ((keyIsPressed == true) && (key == 'p')) {
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img26);
   sphere (530);
 }

 if ((keyIsPressed == true) && (keyCode === ENTER)) {
   //rotateZ(frameCount * 0.01);
   //rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img27);
   sphere (530);
   box (500, 500, 500);
 }

 if ((keyIsPressed == true) && (keyCode === ESCAPE)) {
   //rotateZ(frameCount * 0.01);
   //rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img28);
   sphere (530);
   box (500, 500, 500);
 }

 if ((keyIsPressed == true) && (keyCode === BACKSPACE)) {
   //rotateZ(frameCount * 0.01);
   //rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img28);
   sphere (530);
   box (500, 500, 500);
 }

 if ((keyIsPressed == true) && (keyCode === SHIFT)) {
   //rotateZ(frameCount * 0.01);
   //rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img27);
   sphere (530);
   box (500, 500, 500);
 }

 if ((keyIsPressed == true) && (keyCode === CONTROL)) {
   //rotateZ(frameCount * 0.01);
   //rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img27);
   sphere (530);
   box (500, 500, 500);
 }

 if ((keyIsPressed == true) && (keyCode === DELETE)) {
   //rotateZ(frameCount * 0.01);
   //rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(img28);
   sphere (530);
   box (500, 500, 500);
 }

}
