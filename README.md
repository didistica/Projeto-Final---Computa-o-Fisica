# [Nome do projeto]

> [Uma frase que descreve o objeto: «Um objeto que ___ quando ___, para ___.»]

![Fotografia principal do protótipo](media/foto-principal.jpg)

**Dupla:** [Nome 1] · [Nome 2]\
**Turma:** [TJ / TL / TM]\
**Design de Inovação · Exercício Final de Computação Física · ESELx 2026/27**

---

## a) Conceito / Motivação

[Porquê este objeto? Para quem? O que deve provocar em quem o usa? Descrever a intenção — um propósito (resolver, ajudar, informar) ou uma intenção artística/expressiva. 1 a 2 parágrafos.]

## b) Referências

[Referências conceptuais, artísticas e de design que sustentam o conceito. Para cada uma: link ou imagem + uma frase sobre o que se retira dela.]

- **[Autor / título da obra](https://link)** — [o que se retira desta referência]
- **[Autor / título da obra](https://link)** — [o que se retira desta referência]

![Referência visual](media/referencia-01.jpg)

## c) Inputs / Outputs

### Componentes

| Componente | Quantidade | Função no projeto | Input / Output |
|------------|-----------:|-------------------|----------------|
| Arduino UNO | 1 | Microcontrolador (MCU) | — |
| [ex.: LDR + resistência 10 kΩ] | [1] | [o que sente] | Input |
| [ex.: LED + resistência 220 Ω] | [1] | [o que faz] | Output |
| [ex.: breadboard, fios, cabo USB] | [—] | [ligações e alimentação] | — |

### Ligação ao computador (se existir)

[Apagar esta secção se o projeto não usar o computador.]

| Sentido | O que circula pela porta série | Exemplo |
|---------|--------------------------------|---------|
| Computador → Arduino (input) | [ex.: tecla premida, volume do microfone, dados da webcam] | [o que provoca no objeto] |
| Arduino → Computador (output) | [ex.: valor do sensor enviado com `Serial.println()`] | [o que aparece no ecrã / projetor / som] |

- **Sketch p5.js:** [link para o repositório]
- **GitHub Pages:** [link para a página]

## Esquema do circuito

[Esquema desenhado (Tinkercad, Fritzing ou à mão) e/ou fotografia legível da montagem. Indicar os pinos usados.]

![Esquema do circuito](media/esquema.png)

| Pino do Arduino | Ligado a |
|-----------------|----------|
| [A0] | [sinal do LDR] |
| [13] | [LED] |
| 5V / GND | [alimentação] |

## d) MCU + Algoritmo

### Como funciona

[Explicar a lógica: o que acontece no `setup()` (uma vez) e a cada volta do `loop()`. Pode ser texto, fluxograma ou pseudocódigo.]

```text
SE [condição, ex.: valor do sensor < limiar]
ENTÃO [ação, ex.: liga o LED]
SENÃO [ação, ex.: desliga o LED]
```

### Calibração

[Valores lidos no Serial Monitor e limiares escolhidos.]

| Situação | Valor lido |
|----------|-----------:|
| [ex.: luz ambiente] | [ ] |
| [ex.: sensor tapado] | [ ] |
| **Limiar escolhido** | **[ ]** |

### Código

O código está em [`src/main.cpp`](src/main.cpp) (projeto PlatformIO) e está comentado.

## e) Referências técnicas

[Outros projetos e soluções semelhantes, tutoriais e documentação usados. Para cada um: link + o que foi aproveitado.]

- **[Título do tutorial / projeto](https://link)** — [o que foi aproveitado: circuito, parte do código, biblioteca…]
- **[Título do tutorial / projeto](https://link)** — [o que foi aproveitado]

## Registo do protótipo

[Fotografias do protótipo e vídeo de demonstração (máx. 60 s).]

![Protótipo em uso](media/prototipo-01.jpg)

**Vídeo:** [link para YouTube / Vimeo, ou ficheiro em `media/`]

## Processo

[Dificuldades, iterações e decisões: o que não funcionou à primeira, o que mudou e porquê. Possível articulação com o projeto (com)FORMA.]

- **Iteração 1:** [ ]
- **Iteração 2:** [ ]

## Uso de IA

[Que ferramentas de IA foram usadas (ChatGPT, Claude, Copilot…) e para quê. Indicar que partes do código ou do texto foram geradas ou assistidas. Se não foi usada, escrever «Não foi usada IA».]

---

## Como reproduzir este projeto

1. Clonar o repositório e abri-lo no VSCode com a extensão **PlatformIO** (**PIO Home → Projects → Add Existing**).
2. Montar o circuito segundo o [esquema](#esquema-do-circuito).
3. Ligar o Arduino por USB e fazer **Upload**.
4. Abrir o **Serial Monitor** (9600 baud) para ver os valores lidos.

Guia completo: [Computação Física com Arduino](https://hacktoimprove.com/classes/Recursos/ComputacaoFisicaArduino/)
