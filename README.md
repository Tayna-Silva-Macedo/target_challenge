## Desafios propostos:

### 1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);


**Ao final do processamento, qual será o valor da variável SOMA?**
> O valor da variável soma será 91.

  
### 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;



### 3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, __9__

b) 2, 4, 8, 16, 32, 64, __128__

c) 0, 1, 4, 9, 16, 25, 36, __49__

d) 4, 16, 36, 64, __100__

e) 1, 1, 2, 3, 5, 8, __13__

f) 2,10, 12, 16, 17, 18, 19, __200__



### 4) Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado.

> Ao se cruzarem na rodovia, os dois veículos estaram à mesma distância da cidade de Ribeirão Preto.

**Calculando em que ponto da rodovia eles irão se encontrar:**

O caminhão passará por dois pedágios, demorando 5 minutos em cada um, portanto, ficará 10 minutos (ou 0,17h) parado. Calculando sua nova velocidade média temos:

t = 100km / 80km/h <br>
t = 1,25h <br>
v = 100km / (1,25h + 0,17h) <br>
v = 70,42km/h <br>

Com a referência de espaço em Ribeirão Preto, e igualando a posição dos dois veículos para descobrir quanto tempo eles levarão para se encontrar, temos:

110km/h * t = 100km - 70,42km/h * t <br>
t = 0,55h <br>

Descobrindo em que ponto da rodovia eles se encontram:

S = v * t <br>
S = 110km/h * 0,55h <br>
S = 60,5km <br>

>Portanto, os dois veículo se cruzarão a 60,5km de Ribeirão Preto e 39,5km de Franca


### 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;
