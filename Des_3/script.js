/* 3- Ler as notas da 1a. e 2a. avaliações de um aluno.
 Calcular a média aritmética simples e escrever uma mensagem
 que diga se o aluno foi ou não aprovado 
(considerar que nota igual ou maior que 6 o aluno é aprovado).
 Escrever também a média calculada.*/

var nota1;
var nota2;

nota1 = Number(window.prompt("Digite a primeira nota: "));
nota2 = Number(window.prompt("Digite a segunda nota: "));


var media = ((nota1 + nota2)/2);

console.log(media)

if(media >= 6){
	alert('A média do aluno foi: '+media+' O aluno está aprovado')
}
else{
	alert('A média do aluno foi: '+media+' O aluno foi reprovado')
}