/*4- Ler 3 valores e devolver o maior deles.*/

var num1;
var num2;
var num3;

num1 = Number(window.prompt("Primeiro número: "));
num2 = Number(window.prompt("Segundo valor"));
num3 = Number(window.prompt("Terceiro número"));

var maior = num1;

if(num2 > maior)
    maior = num2
if(num3 > maior)
    maior = num3;

    alert("O maior número é: "+maior+".");