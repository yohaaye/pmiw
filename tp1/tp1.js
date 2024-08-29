//https://youtu.be/CYwT-dlpuH8
let img;
let px;
let py;
let colorfondo; 
let mod;

function preload() {
  img = loadImage('data/foto.jpg');
}

function setup() {
  createCanvas(800, 400);
  mod = 22;
  px = 600;
  py = 200;
  colorfondo = 0;
}

function draw() {
  background(colorfondo);
  image(img, 0, 0);
  grilla(mod, px, py);
}
