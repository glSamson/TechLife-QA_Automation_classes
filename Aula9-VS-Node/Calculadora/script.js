
// Seleção dos elementos
const display = document.querySelector("#displayInput")
const botaoIgual = document.querySelector(".igual")
const botaoPonto = document.querySelector(".ponto")
const botaoNumeros = document.querySelectorAll(".num")
const botaoOperadores = document.querySelectorAll(".operador")

// Variáveis globais
let operaçãoAtual = "";
let operador = null;
let valorAnterior = "";
let calculando = false;

// Funções
function atualizaDisplay(){
    display.value=operaçãoAtual
}

function insereNumero (evento) {
    if(calculando){
        operaçãoAtual=evento.target.textContent;
        calculando=false;
    }else{
        operaçãoAtual+=evento.target.textContent;
    }
    atualizaDisplay();
};

function inserePonto() {
    if(operaçãoAtual.indexOf(".")===-1){
       operaçãoAtual+="."
       atualizaDisplay()
    }
}

function insereOperador(evento){
    if(operaçãoAtual !== ""){
        if(!calculando){
            if(operador!==null){
                calcula()
            }
            valorAnterior=operaçãoAtual;
            operaçãoAtual="";
        }
        operador=evento.target.textContent;
    }
}

function calcula(){
    let resultado=null;
    const operandoAnterior = parseFloat(valorAnterior)
    const operndoAtual = parseFloat(operaçãoAtual)

    switch(operador){
        case "+":
            resultado=operandoAnterior+operndoAtual
            break;
        case "-":
            resultado=operandoAnterior-operndoAtual
            break;
        case "*":
            resultado=operandoAnterior*operndoAtual
            break;
        case "/":
            resultado=operandoAnterior/operndoAtual
            break;
        }
    operaçãoAtual=String(resultado);
    valorAnterior=operaçãoAtual;
    calculando=true;
    atualizaDisplay();
}

// Eventos
botaoNumeros.forEach((botao) => botao.addEventListener("click", insereNumero)); 
botaoPonto.addEventListener("click", inserePonto);
botaoOperadores.forEach((botao) => botao.addEventListener("click", insereOperador));
botaoIgual.addEventListener("click", calcula);