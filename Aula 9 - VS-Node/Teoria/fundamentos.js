// fundamentos

//   Armazenamento de dados

// Var nome = "string"
var variavel1 = "12, doze";
console.log(variavel1);

var numero = 124;
console.log(numero);
console.log(numero - 167);
console.log("10" + 167);
console.log(typeof numero);


var booleano = true; //false
console.log(typeof booleano);

// Teste da vaiável boolean
var voceAceita = false;
console.log("Você aceita?",voceAceita);
console.log(typeof voceAceita);


var objeto = {};
var array = [];
var vazio = null;
var indefinida = undefined;

console.log("objeto",typeof objeto);
console.log("array",typeof array);
console.log("vazio",typeof vazio);
console.log("indefinida",typeof indefinida);


// let & const

let x = 10;
const y = 5;

// y = 10; Surgirá mensagem de erro por alterar uma constante
testeHoisting(); //(Teste de hoisting, linha 192)

console.log (x);
console.log (y);

console.log (x,y); //formas de estruturas viáveis 
console.log (
    x,y
);

x=13;
console.log(x);


// Operadores aritiméticos

console.log ("Operadores aritiméticos");

console.log("x+y",x+y);
console.log("x-y",x-y);
console.log("x*y",x*y);
console.log("x/y",x/y);

// Operadores de comparação

console.log ("Operadores comparação");

console.log("x=y?",x==y);
console.log("x!=y?",x!=y);

console.log("Se usar === ele levará em comparação o tipo de dado e o valor comparado");
console.log("5 (string) == 5 (número)?","5"==5);
console.log("5 (string) === 5 (número)?","5"===5);
console.log("5 (string) !== 5 (número)?","5"!==5);

// Operadores lógicos

// AND = &&
// OR = ||

console.log(10<20 && 19<20); //só é verdadeiro se os dois forem verdadeiro
console.log(10<20 && 19>20);
console.log(10>20 && 19>20);

console.log(10<20 || 19<20);
console.log(10<20 || 19>20);
console.log(10>20 || 19>20);

// Conversão de tipos

const altura = "1.82"
const alturaconvertido = Number(altura);

console.log(alturaconvertido, typeof alturaconvertido);

// Estrutura de condição

// if - else - else if

const idade = 18;
if (idade<15){
    console.log("Criança");
} else if (idade>=15 && idade<18) {
    console.log("Adolecente");
}
    else{
    console.log("Adulto");
}


// Switch

const Fruta = "Pêra";

switch (Fruta) {
    case "Banana":
        console.log("Banana é a fruta!");
        break;
    case "Maçã":
        console.log("Maçã é a fruta!");
        break;
    default:
        console.log("Fruta não encontrada!")
}


// Estruturas de repetição

// ciclo que se repete até que uma condição seja cumprida

// Estrutura: Contador, condição de limite, incremento
/*
console.log("Estrutura for");

for(let i=0; i<10; i=i++) {
    console.log(i);
}
/*
console.log("Estrutura while")
let E=10;
while(E<20){
    console.log("O valor de E é: + E")
    i++;
}
    
// do while

let j 0;

do {
console.log("O valor de j é:")
j++;
}   while(j<7);
*/


// Funções

// Estrutura - function nome (argumento1, arg2,... arg11) {corpo}

function cumprimentar (){
    console.log("Olá")
}
// Invocação da função - nome ()
cumprimentar();


function saudar (nome){
    console.log("Olá,"+nome)
}
// Invocação da função - nome ()
saudar("Matheus");


// Escopo das variáveis - Global ou local

let cor = "Rosa"; // (Escopo global, sendo acessível por todo código)
// (retire comentátio para ver dinâmica)
// let cor = "azul"; // (entra em erro pois "cor" já está declarado)

function mostrarCor(){
    let cor = "verde"; // Escopo local, não causando conflito com variáveis esternas
    console.log(cor);
}
// troque a linha comentada a baixo para testar escopo local
mostrarCor();
//console.log(cor);



// Hoisting (içamento)
testeHoisting ();

function testeHoisting (){
    console.log ("Deu certo")
}

//  O hoisting é a possibilidade de chamar uma função antes de sua declaração,
//      não existindo em muitas linguagens mas em Js é possível, obcervar a li-
//      nha 42 para exemplo



//  Arrow function

const arrowTeste = () => console.log("Arrow OK");

arrowTeste();


//  truthy & falsy

const truethyTeste = "Variáveis com algum conteúdo";
const falsyTeste = "";

if (truethyTeste){
    console.log("truthy: é verdadeira")
}   else{
    console.log("truthy: é falsa")
}

if (falsyTeste){
    console.log("falsy: é verdadeira")
}   else{
    console.log("falsy: é falsa")
}


//  array / listas

const numeroLista = [1,2,3,4,5,6,7,8,9]

console.log(numeroLista);
console.log(numeroLista[7]); // array inicia a contagem em 0

numeroLista.push(21);
console.log(numeroLista);

numeroLista.pop(); // exclui o último número
console.log(numeroLista);


// Strings

const minhaString ="Olá, mundo!"
// concatenação
const helloNome = minhaString+" qual seu nome?"
console.log(helloNome);
// interpolação
const interpolar=`${minhaString} agora com interpolação`
console.log(interpolar);

console.log(interpolar.length); //exibe quantidade de caracteres (ex. útil para senhas)
console.log(interpolar[16]); // usa índice (16) para exibir dígito expecífico
                             // útil para máscaras em binário ou procura de caracteística expecífica da posição
console.log(interpolar.toUpperCase());

// Data e hora
const agora = Date();
console.log(agora);


const natal = new Date (2025, 11, 25)
console.log(natal);

// Math

console.log(Math.PI);
console.log(Math.round(3.6487))
console.log(Math.sqrt(49))
console.log(Math.pow(3,3))