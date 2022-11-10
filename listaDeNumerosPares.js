var quantidadeNumeros = parseInt(prompt("Digite a quantidade de números"));

p = 0;

for(let i = 0; i< quantidadeNumeros; i++) {
    var numero = parseInt(prompt("Digite o número desejado"));
    if (numero % 2 ==0) {
        p++
        console.log("O número é par")
    }
    else {
        console.log("número é impar")
    }
}
