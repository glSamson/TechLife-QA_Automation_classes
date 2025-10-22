// avançado em JavaScript

// Manipulação de Arrey

const frutas = ["maçã","laranja"]

frutas.unshift("abóbora") // Adiciona string no início do arrey

console.log(frutas)

frutas.shift() // remove o primeiro elemento

console.log(frutas)


// map, filter, reduce --> arrow function

const numeros = [0,1,2,3,4,5,6,7,8,9]

const numeroPare = numeros.find((num) => num %2 === 0);
console.log(numeroPare);  // find, mostra apenas o primeiro item que cumpre os requisitos

const numerosPares = numeros.filter((num) => num %2 === 0);
console.log(numerosPares);  // filter, mostra todos os itens que cumpre os requisitos


// Manipulação de strings

const frase = " Olá, mundo!  ";

const palavras = frase.trim().split(" ");
console.log(frase)
console.log(palavras)

const frase2 = "JavaScript é incrível!"
console.log(frase2.startsWith("Jav"))  // Função case sensitive
console.log(frase2.endsWith("!"))

// Excessões e tratamento de erros

const idade = 15;

// erros incerram a execução do programa

/*if(idade < 18) {
    throw new Error("Você deve ter pelo menos 18 anos") 
}
*/

try {
    if(idade < 18) {
    throw new Error("Você deve ter pelo menos 18 anos") 
}
} catch (error) {  // se houver um erro durante a execução, o catch será executado
    console.log("Um erro encontrado!"+error) // se adcionar ".message" adicionará apenas a string
}
console.log("Continuando o programa...")

// Callback => função        esta função é como um gatilho para chamar a função que estiver sobre ela

function Cumprimentar(nome, Callback){
    console.log("Olá, "+nome);
    Callback();
}

function mostrarSaudação(){
    console.log("Como você está?")
}

Cumprimentar("Matheus", mostrarSaudação) // neste caso, a função Cumprimentar dá callback para mostrarSaudação

// settimeout => depois de um tempo, executa algo

function mostrarMensagem (){
    console.log("Tempo limite atingido, o programa parou!")
}
/*
setTimeout(mostrarMensagem, 3000);

setTimeout (function() {
    console.log("Olá")
}, 1000);
*/


// Promises
const promessa = new Promise ((resolve, reject)=> {
    const condicao = false;

    if (condicao) {
        resolve ("a condição é verdadeira")
    } else {
        reject("a condição é falsa")
    }
})
.catch((erro)=> {
    console.log(erro);
});

promessa.then((mensagem)=> {
    console.log(mensagem);
});

// comentário: Existem várias bibliotecas feitas que são "promise based"


// quando é necessário que todos os "dados" das promessas etejam lá para tratá los
const promise1= Promise.resolve(3);
const promise2= new Promise ((resolve,reject) => {
    setTimeout(resolve, 2500, "Testando");
})

Promise.all([promise1,promise2]).then((valores)=> console.log(valores));


// Async Await

async function obterValor (){
    const promessa2 = new Promise ((resolve, reject)=> {
    setTimeout(()=> resolve("valor obtido"), 2000);
});
const valor= await promessa2
console.log(valor);
}

obterValor();


async function obterValorComErro (){
try {
        const promessa2 = new Promise ((resolve, reject)=> {
    setTimeout(()=> reject("valor com erro"), 2000);
});
const valor= await promessa2
console.log(valor);
} catch (error) {
    console.log(error)    
}
}

obterValorComErro();


// JSON (JavaScript Object Notation)
// Objeto em JS é {nome: "teste"}
// JSON é {"nome": "teste"}       (é escrita em texto)

// Isso facilita pois a resposta recebida/enviada é feita em apenas uma linguagem
// bompara comunicação front-end e back-end

const objeto = {nome: "João", idade: 30};
const jsonString = JSON.stringify(objeto);

console.log(jsonString);
console.log(typeof jsonString);

// E se o objeto veio com um texto? (de uma API, por exemplo)

const json = '{"nome": "João", "idade": 30}';
const json2Object = JSON.parse(json);

console.log(json2Object);
console.log(typeof json2Object);
console.log(json2Object.idade)
