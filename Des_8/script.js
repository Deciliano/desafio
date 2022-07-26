/* 8- Função que recebe array de números inteiros e devolve maior
 numero do array
        
	--Ex: Se eu passar um array [34, 2, 56, 14], 
	a função deve retornar o numero 56
 */

var numeros = [34, 2, 56, 14];

var maior = 0;
for (var i = 0; i < numeros.length; i++) {
   if ( numeros[i] > maior ) {
      maior = numeros[i];
   }
}
alert("O maior número é: "+maior);