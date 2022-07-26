/* 5- Ler 3 valores e devolver o menor deles. */

var num1;
var num2;
var num3;

num1 = Number(window.prompt("Primeiro número: "));
num2 = Number(window.prompt("Segundo valor"));
num3 = Number(window.prompt("Terceiro número"));

var menor = num1;

if(num2 < menor)
    menor = num2
if(num3 < menor)
    menor = num3;

    alert("O menor número é: "+menor+".");