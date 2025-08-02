// generate dots wallpaper
// thrly

// see comments for use of Perlin-noise variations

// uses colours from Catppucin (Mocha): https://github.com/catppuccin/catppuccin
const colours = [
  "#b4befe",
  "#89dceb",
  // "#74c7ec",
  "#a6e3a1",
  "#f9e2af",
  "#fab387",
  "#f38ba8",
  "#eba0ac",
  "#cba6f7",
  "#f5c2e7",
  "#f2cdcd",
  "#f5e0dc",
];

const steps = 70;
const dotSize = 20;
const padding = steps;
const fullGrid = true; // draw full grid of dots, or only a perlin-noise selected set

const backgd = "#313244"; // background color

function setup() {
  smooth();
  createCanvas(1920, 1080); // landscape
  
  noStroke();

  background(backgd);
  dots();
}

function dots(){
  for (let x=0; x <= width; x+=steps){
    for (let y=0; y <= height; y+=steps){
        let noiseVal = noise(sin(x*0.2), cos(y*0.2));
        let noiseValScaled = map(noiseVal,0,1,0,colours.length);
        // let c = color(colours[Math.floor(noiseValScaled)+1]); // optional: perlin-noise colour development
        let c = color(colours[Math.floor(random(colours.length))]); // or, random colour choices
      
      // c.setAlpha(160); // optional: translucent colours for a muted effect
      fill(c);
      const x_pos = map(x,0,Math.floor(width/steps) * steps,padding, width-padding);
      const y_pos = map(y,0,Math.floor(height/steps) * steps,padding, height-padding);
      
      if(!fullGrid){
let noiseVal2 = noise(x*0.005, y*0.005); // optional for drawin a full grid or noise selection
      if(noiseVal2 > 0.5){
      circle(x_pos,y_pos,dotSize);
      }
      } else {
        circle(x_pos,y_pos,dotSize);
      }
    }
  }
}

function keyPressed(){
  if (key === 's') {
      save("dots.png");
  }
}
