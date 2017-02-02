var imp, angel;
var hi = 400;
var lo = 400;
var angelX = 0;
var angelY = 0;
var impX = lo;
var impY = hi;
var frRate = 300;

function setup() {
  createCanvas(hi, lo);
  colorMode(HSB, 255);
  angel = text("emoji482.jpg");
  imp = text("emoji709.jpg");
  frameRate(frRate);

}

function draw() {
  if(mouseIsPressed){
    background(0);
  } else{
    angelX = random(0,lo);
    angelY = random(0, hi);
    impX = lo - angelX;
    impY = hi - angelY;

    if(angelX >= lo){
      angelX = 0;
      angelY = 0;
    } else{
      if (frameCount % 2 === 0) {
        text("😈", impX, impY, 30, 30);
      } else {
        text("👼", angelX, angelY, 30, 30);
      }
    }

  }


}
