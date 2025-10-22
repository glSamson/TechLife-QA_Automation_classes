// exercício de fundamentos

//      Exercício 1: Criar script e imprimir "Olá, mundo!" no console

const firtStep="Olá, mundo!";
console.log(firtStep);

//      Exercício 2: Conversão de tipos
// Dado o valor de uma string "1234", converta em um número e exiba o tipo de variável no console

const numeros = "1234";
const numeros_conv = Number(numeros);
console.log(typeof(numeros_conv));

//      Exercício 3: Manipulação de estring
// Dado que uma string "JavaScript é incrível", escreva um código que conte quantos caracteres a string tem e quantos palavras existem na frase.

const amazingJS = "JavaScript é incrível";
const caracteres = amazingJS.length
const palavras = amazingJS.split(" ").length;
console.log("Quantidade de caracteres: ",caracteres);
console.log("Quantidade de palavras: ",palavras);

//      Exercício 4: Conversão de tipos
// Criar array com cinco nomes. Usar loop for para imprimir cada nome no console

const alunos = ["Allan","Beatriz","Carlos","Daiana","Evandro"]
for (let i=0; i < alunos.length; i++){
    console.log(alunos[i]);
}

//      Exercício 5: Funções, strings e Math
// Use uma função que aceite uma string representando um horário no formato de 24H
//  A função deve retornar uma string que converta o horário para o formato de 12H
//  Use o objeto Math para efetuar a converção.
// Certifique se de que sua função lida corretamente com horários na meia noite/maio dia

function clockConverter (relogio24h) {
 const hora24 = relogio24h.split(":")[0];
 const minuto24 = relogio24h.split(":")[1];
let hora12 = null;
if (hora24>12 && hora24<24) {
    const h24n = Number(hora24);
  //  console.log(h24n-12 + " pm")
    hora12 = (h24n-12)
    console.log((String(hora12)), minuto24,"PM")
} else if (hora24==12){
    console.log(hora24,minuto24,"PM")
} else if (hora24==24) {
    const h24n = Number(hora24);
  //  console.log(h24n-12 + " pm")
    hora12 = (h24n-12)
    console.log((String(hora12)), minuto24,"AM")
} else {
    console.log(hora24,minuto24,"AM")
}
}
clockConverter("06:27");
clockConverter("12:00");
clockConverter("17:52");
clockConverter("24:00");