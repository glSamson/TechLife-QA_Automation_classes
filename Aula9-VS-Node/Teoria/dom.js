// Document object model

// Selecionar elementos

const elementoPorID = document.getElementById("meuId")
console.log(elementoPorID)

const elementoPorID2 = document.querySelector("#meuId")
console.log(elementoPorID2)

const elementoPorClasse = document.getElementsByClassName("minhaClasse")
console.log(elementoPorClasse)

const elementoPorClasse2 = document.querySelector(".minhaClasse")
console.log(elementoPorClasse2)


// Manipular conteúdo de texto

const elemento = document.querySelector("#meuId")
console.log(elemento.textContent);
setTimeout(()=> {
    elemento.textContent="Mudei de texto!"
}, 2000)


// Trabalhando com atributos

const link = document.querySelector("a")
console.log(link)
link.setAttribute("href","https://www.instagram.com/techlife.pt/") // alterando o url
console.log(link.getAttribute("href"));    // resgatando o url inserido em "link"
console.log(link.hasAttribute("target"));  // verifica se "link" tem o atributo "target"
link.removeAttribute("target"); // remove atributo indicado


// Manipulação de classe do CSS

const elemento2 = document.querySelector("#meuId");

elemento2.classList.add("novaClasse");
elemento2.classList.remove("minhaClasse");
elemento2.classList.toggle("classeAleatoria");
elemento2.classList.toggle("classeAleatoria");


// Manipular CSS

const elemento3 = document.querySelector("#meuId")
elemento3.style.color = "blue";
elemento3.style.backgroundColor = "red";

// A classe backgroundColor em Js é vista como background-color em CSS


// Navegação entre nós

// exemplo, o Body é o elemento pai, dos elementos que estão "dentro" dele, e cada 
//elemento é um nó

const element4 = document.querySelector("#meuInput")

const pai =element4.parentNode;
console.log(pai);


// Obter o primeiro filho

const primeiroFilho = pai.firstChild;

console.log(primeiroFilho);

// Obter o último filho filho

const ultimoFilho = pai.lastChild;

console.log(ultimoFilho);


// Manipulação de estrutura DOM

// Criar elemento

const novoElemento = document.createElement("div");
console.log(novoElemento);

novoElemento.textContent ="Minha div de JavaScript"
console.log(novoElemento);

document.body.appendChild(novoElemento);

document.body.insertBefore(novoElemento, pai);

document.body.removeChild(elementoPorID);

// Eventos 

// click

const botao = document.querySelector("button")

botao.addEventListener("click",function(){
    console.log("Botão clicado")
});

// mouse

const element5 = document.querySelector("#meuFormulario")

element5.addEventListener("mouseover", function(){
    console.log("O mouse passou aqui")
});

//teclado

const campoInput = document.querySelector("#meuInput")
campoInput.addEventListener("keydown", function(){
    console.log("Tecla pressionada")
})

// formulário

const form = document.querySelector("form")

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("formulário enviado");
});

// propagação de eventos

document.querySelector("#elementoPai").addEventListener("click", function(){
    console.log("Clique capturado no pai")
}); //      Neste caso podemos obcervar a propagação do evento que estava sobre o pai
//         para o elemento filho    


document.querySelector("#elementoFilho").addEventListener("click", function(event){
       // event.stopPropagation();
    console.log("Clique capturado no filho")
}); //     acaba executando os dois ao mesmo tempo (bug em na maioria dos casos)
//      Como parar a propagação? usando "stopPropagation" no elemento que o evento foi
//      propagado


document.querySelector("#meuLink").addEventListener("click", function(event){
    event.preventDefault();
    console.log("clicou no link");
})

// delegação de elementos

document.querySelector("#elementoPai").addEventListener("click", function(event){
   if(event.target.matches(".classeDosFilhos")){
    console.log("Evento delegado para o filho");
   };
});