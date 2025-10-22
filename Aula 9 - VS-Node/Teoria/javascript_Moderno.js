// Js moderno é conhecido por ES6+ (versão que trouxe muitas mudanças para melhor)

// let e const

let n = 10;
n=20;

const x = 15;

function testeVar(){
    var x = 1;
    if(true) {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}

testeVar();

function testeLet(){
    let x = 1;
    if(true) {
        let x = 2;
        console.log(x);
    }
    console.log(x);
}
testeLet();

// arrow functions

const soma = (a,b) => a+b;
console.log(soma(3,5));

const quadrado = (numero) => numero*numero;
console.log(quadrado(3));

const cumprimento = (nome) => {
  const mensagem = `Olá, ${nome}!`;
  return mensagem;
};
console.log(cumprimento("João")); // Olá, João!

// temnplate literals

const nome = "Maria";
const idade = 22;

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)

// Distructuring

const pessoa = {nome: "João", idade: 40, profissão: "Programador"}

const {nome: nome2, idade: idade2, profissão} = pessoa;

console.log(nome2, profissão)

const numeros = [1,2,3,4];
const [primeiro, segundo, terceiro] = numeros;

console.log(primeiro, segundo, terceiro)

// spread operator => espalhamento

const array1 = [1,2,3]
const array2 = [...array1, 4,5,6]

console.log(array2);

const soma2 = (...args) => args.reduce((total, numero)=> total+numero, 0)

console.log(soma2(1,2,3,4,5,6,7));

// default parameters

function saudação(nome="Visitante"){
    console.log(`Olá, ${nome}!`)
}

saudação();
saudação("Matheus");

// object literals enhancements
// {nome: "Matheus"}

const nomeNovo = "Felipe";
const idadeNova = 24;

const pessoaNova = {nome: nomeNovo, idade: idadeNova}

console.log(pessoaNova)

const saudaçãoObject = {
    dizerOi(){
        console.log("Oi")
    }
}
saudaçãoObject.dizerOi();

// Classes e heranças

class Pessoa {
    constructor(nome,idade){
        this.nome =nome
        this.idade=idade
    }
    falar(){
        console.log(`Olá pessoal, meu nome é ${this.nome}`)
    }
}

const João = new Pessoa ("João", 34);

console.log(João);

João.falar();

const Pedro = new Pessoa ("Pedro", 21);

class Funcionário extends Pessoa {
    constructor (nome, idade, salário){
        super(nome,idade)
        this.salário=salário;
    }
    falarFuncionário(){
        super.falar()
        console.log(`Eu ganho R$${this.salário}`)
    }
}

const Mario = new Funcionário ("Mario", 44, 3200);

console.log(Mario);
Mario.falar();
Mario.falarFuncionário();