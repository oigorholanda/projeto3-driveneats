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
    console.log("o prato clicado foi", pratoClicado);
    //Adicionar a classe selecionado
    pratoClicado.classList.add('selecionado');
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
}


    // verificar se o prato foi selecionado
    // verificar se a bebida foi selecionado
    // verificar se a sobremesa foi selecionado
