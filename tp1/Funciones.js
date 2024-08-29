function grilla(mod, px, py) {
  for (let i = 400; i < 810; i += mod) {
    for (let j = -5; j < 400; j += mod) {
      let d = dist(i, j, px, py);
      let tam = map(d, 540, 0, 40, 0);
      let tono = calcularTono(i, j); 
      noStroke();
      fill(tono);
      circle(i, j, tam);
    }
  }
}

function calcularTono(x, y) {
  let distan = dist(mouseX, mouseY, x, y);
  return distan * 255 / dist(200, 200, 0, 0);
}

function restablecerVariables() {
  mod = 22;
  px = 600;
  py = 200;
  colorfondo = 0;
}

function keyPressed() {
  if (key === ' ') {
    restablecerVariables();
  }
  if (key === 'c') {
    colorfondo = random(0, 255);
  }
  if (key === '+') {
    mod++;
  }
  if (key === '-') {
    mod--;
  }
}

function mouseDragged() {
  px = mouseX;
  py = mouseY;
}
