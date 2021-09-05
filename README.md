MGL = DISTANCIA
HORA = hora
DIA  = dia  * 24
SEMANA = semana * 168
MES = mes * 730
ANO = ano * 8760

starship.consumable = é o tempo que a nave leva pra parar (x semana, x ano, x mes, x dia, x horas, desconhecido)
starship.mglt = e o maximo de MGL que uma nave percorre POR HORA (80, 100 , 150)

se a REBEL TRANSPORT faz 20 MGL por hora e reabastece a cada 6 MESES então:

// Pegamos um exemplo de distancia a ser percorrida (1000000) e dividimos pela sua velocidade por hora (20) para descobrir quantas horas ela ira levar para percorrer aquela distância
1000000 / 20 = 50000

// Agora a gente converte para horas o tempo que a nave leva até reabastecer
6(meses) * 730 = 4380

// Esse resultado nos dividimos pelas horas que ela ira levar para percorrer a distancia, nos dando a quantidade de vezes que a nave ira reabastecer
50000 ÷ 4380 = 11,4155 (Ou seja, 11 vezes)
