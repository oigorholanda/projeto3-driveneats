let tituloPrato;
let tituloBebida;
let tituloSobremesa;

function selecionarPrato (pratoClicado) {
    // remover a classe selecionado do prato que foi marcado anteriormente
    const selected = document.querySelector('.pratos .selecionado');

    if (selected !== null) {
        selected.classList.remove('selecionado');
    }

    //pegar o prato que foi clicado
    // tituloPrato = pratoClicado.document.querySelector('.nome');
    console.log(pratoClicado);
    
    //Adicionar a classe selecionado
    pratoClicado.classList.add('selecionado');
    tituloPrato = pratoClicado.innerHTML;
    habilitarBotao ();
}

function selecionarBebida (bebidaClicada) {
    // remover a classe selecionado da bebida que foi marcado anteriormente
    const selected = document.querySelector('.bebidas .selecionado');

    if (selected !== null) {
        selected.classList.remove('selecionado');
    }
    //pegar a bebida que foi clicada
    console.log("a bebida clicada foi", bebidaClicada);
    //Adicionar a classe selecionado
    bebidaClicada.classList.add('selecionado');
    tituloBebida = bebidaClicada.innerHTML;
    habilitarBotao ();
}

function selecionarSobremesa (sobremesaClicada) {
    // remover a classe selecionado da sobremesa que foi marcado anteriormente
    const selected = document.querySelector('.sobremesas .selecionado');

    if (selected !== null) {
        selected.classList.remove('selecionado');
    }
    //pegar a sobremesa que foi clicado
    console.log("a bebida clicada foi", sobremesaClicada);
    //Adicionar a classe selecionado
    sobremesaClicada.classList.add('selecionado');

    tituloSobremesa = sobremesaClicada.innerHTML;
    habilitarBotao ();
}

function habilitarBotao () {
    if (tituloPrato !== undefined && tituloBebida!==undefined && tituloSobremesa!== undefined) {
        const botao = document.querySelector('.botao');
        botao.classList.add('verde');
        botao.innerHTML = "Fechar pedido";
        
        console.log(botao);
        
        
        
        
    } 
}

