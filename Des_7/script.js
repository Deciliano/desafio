/* 7- Função que receba um número inteiro e retorne o fatorial
 dele. */

var fatorial;

fatorial = Number(window.prompt("Digite um número: "));

var resultado = fatorial;
for (var i = 1; i < fatorial; i++) {
    resultado *= i;
}
alert(resultado);