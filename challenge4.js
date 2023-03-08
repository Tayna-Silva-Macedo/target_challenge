// 4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?



// IMPORTANTE:

// a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

// b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

// c) Explique como chegou no resultado.



// Ao se cruzarem na rodovia, os dois veículos estaram à mesma distância da cidade de Ribeirão Preto.



//Calculando em que ponto da rodovia eles irão se encontrar:

// O caminhão passará por dois pedágios, demorando 5 minutos em cada um, portanto, teremos que o caminhão irá perder 10 minutos (ou 0,17h) parado. Calculando uma nova velocidade média temos:

// t = 100km / 80km/h
// t = 1,25h
// v = 100km / (1,25h + 0,17h)
// v = 70,42km/h

// Com a referência de espaço em Ribeirão Preto, e igualando a posição dos dois veículos para descobrir quanto tempo eles levarão para se encontrar, temos:

// 110km/h * t = 100km - 70,42km/h * t
// t = 0,55h

// Descobrindo em que ponto da rodovia eles se encontram:

// S = v * t
// S = 110km/h * 0,55h
// S = 60,5km

// Portanto, os dois veículo se cruzarão a 60,5km de Ribeirão Preto e 39,5km de Franca
