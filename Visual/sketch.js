
let serial;

let intensidade = 0;
let intensidadeSuave = 0;

let particulas = [];
let totalParticulas = 600;

function setup() {

  createCanvas(windowWidth, windowHeight);

  background(0);

  // Criar partículas
  for (let i = 0; i < totalParticulas; i++) {
    particulas.push(new Particula());
  }

  // Comunicação com Arduino
  serial = createSerial();

  let botao = select("#connect");
  let estado = select("#status");

  botao.mousePressed(() => {
    if (!serial.opened()) {
      serial.open(115200);
    }
  });

  window.estadoSerial = estado;
}

function draw() {

  // Ler dados do Arduino
  if (serial && serial.opened()) {

    let dados = serial.readUntil("\n");

    if (dados.length > 0) {

      let valor = parseFloat(dados.trim());

      if (!isNaN(valor)) {
        intensidade = constrain(valor, 0, 100);
      }
    }

    window.estadoSerial.html("ARDUINO CONNECTED");

  } else {
    window.estadoSerial.html("DISCONNECTED");
  }

  // Suavizar a reação
  intensidadeSuave = lerp(
    intensidadeSuave,
    intensidade,
    0.08
  );

  // Fundo com rastos
  noStroke();
  fill(0, 18);
  rect(0, 0, width, height);

  // Atualizar partículas
  for (let p of particulas) {
    p.atualizar(intensidadeSuave);
    p.mostrar(intensidadeSuave);
  }
}


// CLASSE DAS PARTÍCULAS

class Particula {

  constructor() {

    this.x = random(width);
    this.y = random(height);

    this.vx = random(-1, 1);
    this.vy = random(-1, 1);

    this.tamanho = random(1.5, 3.5);

    // Cada partícula tem uma posição relativa
    // dentro da nuvem
    this.orbita = random(0.15, 1);
  }

  atualizar(movimento) {

    let centroX = width / 2;
    let centroY = height / 2;

    let nivel = movimento / 100;

    // A nuvem fica mais pequena quando
    // o utilizador se aproxima
    let raioMaximo = min(width, height) *
      lerp(0.48, 0.10, nivel);

    let raioDesejado = raioMaximo * this.orbita;

    // Direção do centro
    let dx = centroX - this.x;
    let dy = centroY - this.y;

    let distanciaCentro = sqrt(dx * dx + dy * dy);

    if (distanciaCentro > 0) {

      // Controlar a distância entre partículas
      let diferenca = distanciaCentro - raioDesejado;

      let forcaCentro = map(
        movimento,
        0,
        100,
        0.0005,
        0.035
      );

      this.vx += (dx / distanciaCentro) *
        diferenca * forcaCentro;

      this.vy += (dy / distanciaCentro) *
        diferenca * forcaCentro;
    }

    // Movimento orgânico
    let angulo = noise(
      this.x * 0.003,
      this.y * 0.003,
      frameCount * 0.004
    ) * TWO_PI * 4;

    // Mais perto = mais movimento
    let forcaMovimento = map(
      movimento,
      0,
      100,
      0.15,
      5
    );

    this.vx += cos(angulo) * forcaMovimento * 0.12;
    this.vy += sin(angulo) * forcaMovimento * 0.12;

    // Velocidade máxima
    let velocidadeMaxima = map(
      movimento,
      0,
      100,
      1,
      11
    );

    this.vx = constrain(
      this.vx,
      -velocidadeMaxima,
      velocidadeMaxima
    );

    this.vy = constrain(
      this.vy,
      -velocidadeMaxima,
      velocidadeMaxima
    );

    // Atualizar posição
    this.x += this.vx;
    this.y += this.vy;

    // Resistência
    this.vx *= 0.97;
    this.vy *= 0.97;

    // Limites do ecrã
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;

    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  mostrar(movimento) {

    // Brilho aumenta com a proximidade
    let brilho = map(
      movimento,
      0,
      100,
      100,
      255
    );

    // Partículas ligeiramente maiores
    let tamanho = map(
      movimento,
      0,
      100,
      1.5,
      3.5
    );

    noStroke();

    fill(255, brilho);

    circle(
      this.x,
      this.y,
      tamanho
    );
  }
}


// Adaptar ao tamanho do ecrã

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

  background(0);
}
