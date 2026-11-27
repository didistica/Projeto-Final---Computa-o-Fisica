
#include <Arduino.h>

const int TRIG_PIN = 10;
const int ECHO_PIN = 9;

const float DISTANCIA_MIN = 30.0;
const float DISTANCIA_MAX = 180.0;

float intensidadeSuave = 0;
float intensidadeAlvo = 0;

void setup() {
  Serial.begin(115200);

  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
}

void loop() {

  // Ativar sensor
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);

  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);

  digitalWrite(TRIG_PIN, LOW);

  // Medir distância
  unsigned long tempo = pulseIn(ECHO_PIN, HIGH, 20000);

  if (tempo > 0) {

    float distancia = tempo / 58.0;

    // Converter distância em intensidade
    distancia = constrain(
      distancia,
      DISTANCIA_MIN,
      DISTANCIA_MAX
    );

    // Perto = 100 | Longe = 0
    intensidadeAlvo =
      (DISTANCIA_MAX - distancia) /
      (DISTANCIA_MAX - DISTANCIA_MIN) * 100.0;

  } else {
    intensidadeAlvo = 0;
  }

  // Suavizar alterações
  intensidadeSuave +=
    (intensidadeAlvo - intensidadeSuave) * 0.45;

  Serial.println((int)intensidadeSuave);

  delay(20);
}
