var quantidadeNumeros = parseInt(prompt("Digite a quantidade de números"));

p = 0;
var numero = parseInt(prompt("Digite o número desejado"));
for(let i = 0; i< quantidadeNumeros; i++) {
    if (numero % 2 ==0) {
        p++
        console.log("O número é par")
    }
    else {
        console.log("número é impar")
    }
}
