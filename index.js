const prompt = require('prompt-sync')();
let num = +prompt('Qual número será calculado o fatorial? ');
let fatorial = 1;
function calfatorial(num) {
if (isNaN(num) || num < 0) {
    console.log('Por favor, insira um número inteiro não negativo válido.');
} else {

    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }
}

return fatorial 
}
console.log(num, "seu fatorial é " + calfatorial(num))



// const prompt = require('prompt-sync')();

// // Pergunta ao usuário qual número quer calcular o fatorial
// let num = prompt('Qual número será calculado o fatorial? ');

// if (isNaN(num) || num < 0) {
//     console.log('Por favor, insira um número inteiro não negativo válido.');
// } else {
//     let fatorial = 1;
//     for (let i = 1; i <= num; i++) {
//         fatorial *= i;
//     }
//     console.log(`O fatorial de ${num} é ${fatorial}.`);
// }