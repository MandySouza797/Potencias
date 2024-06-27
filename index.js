const prompt = require('prompt-sync')();

console.log("Vamos calcular potência");

let base = prompt("Base: ");
base = +base; // Converte para número

let expoente = +prompt("Expoente: ");

let resultado = 1; // Inicializa com 1 para cálculo correto de potência

// Loop para calcular a potência
for (let j = 0; j < expoente; j++) {
    resultado *= base;
}

console.log("Resultado:", resultado);