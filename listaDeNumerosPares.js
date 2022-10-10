lista = [0,2,10,19,21,25,30,9,47,97]

p = 0;

for(let i = 0; i< lista.length; i++) {
    if (lista[i] % 2 ==0) {
        p++
        console.log("O número é par")
    }
    else {
        console.log("número é impar")
    }
}
