/* © 2026, Rommina Dolorier todos los derechos reservados.
"Creado para OFF, Chelas y código creativo"

–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/

let font;
let microfono;

function preload() {
  font = loadFont('assets/ABCCameraTrial-RegularItalic.otf');
}


function setup (){ 
    createCanvas(windowWidth, windowHeight);
    textFont(font);
    microfono = new p5.AudioIn();
}


function draw(){
background(0);
fill(255);
noStroke();
let volumen = microfono.getLevel();
let tamano = map(volumen, 0, 0.2, 100, 600, true);
textSize(tamano);
textAlign(CENTER, CENTER);
text("A", width / 2, height / 2);

}

function mousePressed() {
  userStartAudio();
  microfono.start();
}


// Cambia el tamaño del canvas cuando se cambia el tamaño de la ventana.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}