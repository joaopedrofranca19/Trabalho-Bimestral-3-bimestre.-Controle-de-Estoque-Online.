1const divResultbuttonSecundaria = document.querySelector('#divResultbuttonSecundaria');
const buttonAcessar = document.querySelector('#buttonAcessar');
const buttonAdicionar = document.querySelector('#buttonAdicionar');
const buttonProdutos = document.querySelector('#buttonProdutos '); 
const buttonArmazens = document.querySelector('#buttonArmazens');
const formAcessarProduto = document.querySelector('#formAcessarProduto');
const formAdicionarProduto = document.querySelector('#formAdicionaProduto');
const formAdicionarLocal = document.querySelector('#formAdicionaLocal');
const formAcessarLocal = document.querySelector('#formAcessarLocal');
const pInfFormAdicionarProduto = document.querySelector('#pInfFormAdicionarProduto');
const buttonAvançarFormAcessarLocal = document.querySelector('#buttonAvançarFormAcessarLocal');
const buttonAvançarFormAdicionaLocal = document.querySelector('#buttonAvançarFormAdicionaLocal');
const buttonAvançarFormAdicionaProduto = document.querySelector('#buttonAvançarFormAdicionaProduto');
const buttonAvançarFormAcessarProduto = document.querySelector('#buttonAvançarFormAcessarProduto');
const resultadoformAcessarProduto = document.querySelector('#resultadoformAcessarProduto');
const teste = document.querySelector('#teste');

var buttonAdicionarStatus = "none";
var buttonAcessarStatus = "none";
var controleFluxoDadosProdutoArmazem = "none";


buttonAcessar.onclick = function () {
    if(buttonAdicionarStatus == "Ativo"){
        buttonAdicionarStatus = "Inativo";
    }
    
    if(buttonAcessarStatus == "none" || buttonAcessarStatus == "Inativo" ) {
        buttonProdutos .style.marginTop="48px";
        divResultbuttonSecundaria.style.display="flex";
        controleFluxoDadosProdutoArmazem = "Acessar";
        buttonAcessarStatus = "Ativo";
    }else {
        divResultbuttonSecundaria.style.display="none";
        buttonAcessarStatus = "Inativo";
    }
}

buttonAdicionar.onclick = function () {
    if(buttonAcessarStatus == "Ativo"){
        buttonAcessarStatus = "Inativo";
    }

    if(buttonAdicionarStatus == "none" || buttonAdicionarStatus == "Inativo" ) {
        buttonProdutos .style.marginTop="11px";
        divResultbuttonSecundaria.style.display="flex";
        controleFluxoDadosProdutoArmazem = "Adicionar";
        buttonAdicionarStatus = "Ativo";    
    }else {
        divResultbuttonSecundaria.style.display="none";
        buttonAdicionarStatus = "Inativo"; 
    }
}

buttonProdutos.onclick = function () {
    if(controleFluxoDadosProdutoArmazem == "Acessar") {
        formAcessarProduto.style.display = "flex";
        
        formAdicionaProduto.style.display = "none";

        formAdicionaLocal.style.display = "none"; 

        formAcessarLocal.style.display = "none";

        pInfFormAdicionarProduto.textContent = "Acessar Produto";

        buttonAvançarFormAcessarProduto.style.display = "flex";
        buttonAvançarFormAdicionaLocal.style.display = "none";
        buttonAvançarFormAcessarLocal.style.display = "none";
        buttonAvançarFormAdicionaProduto.style.display = "none";
    }else{
        formAdicionarProduto.style.display = "flex";

        formAcessarProduto.style.display = "none";

        formAdicionaLocal.style.display = "none"; 

        formAcessarLocal.style.display = "none";

        pInfFormAdicionarProduto.textContent = "Adicionar Produto";

        buttonAvançarFormAdicionaProduto.style.display = "flex";
        buttonAvançarFormAdicionaLocal.style.display = "none";
        buttonAvançarFormAcessarLocal.style.display = "none";
        buttonAvançarFormAcessarProduto.style.display = "none";
    }



  }

  buttonArmazens.onclick = function () {
    if(controleFluxoDadosProdutoArmazem == "Acessar") {
        formAcessarProduto.style.display = "none";
        
        formAdicionaProduto.style.display = "none";

        formAdicionaLocal.style.display = "none"; 

        formAcessarLocal.style.display = "flex";

        pInfFormAdicionarProduto.textContent = "Acessar Armazem";

        buttonAvançarFormAcessarLocal.style.display = "flex";
        buttonAvançarFormAdicionaLocal.style.display = "none";
        buttonAvançarFormAcessarProduto.style.display = "none";
        buttonAvançarFormAdicionaProduto.style.display = "none";
    }else{
        formAdicionarProduto.style.display = "none";

        formAcessarProduto.style.display = "none";

        formAdicionaLocal.style.display = "flex"; 

        formAcessarLocal.style.display = "none";

        pInfFormAdicionarProduto.textContent = "Adicionar Armazem";

        buttonAvançarFormAdicionaLocal.style.display = "flex";
        buttonAvançarFormAcessarLocal.style.display = "none";
        buttonAvançarFormAcessarProduto.style.display = "none";
        buttonAvançarFormAdicionaProduto.style.display = "none";
    }

  }

  



