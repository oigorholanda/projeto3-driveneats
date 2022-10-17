let tituloPrato;
let precoPrato;
let tituloBebida;
let precoBebida;
let tituloSobremesa;
let precoSobremesa;
let habilitado;

function selecionarPrato (pratoClicado) {
    // remover a classe selecionado do prato que foi marcado anteriormente
    const selected = document.querySelector('.pratos .selecionado');

    if (selected !== null) {
        selected.classList.remove('selecionado');
    } 
    //Adicionar a classe selecionado
    pratoClicado.classList.add('selecionado');
    //pegar o prato que foi clicado
    tituloPrato = pratoClicado.querySelector('.nome');
    precoPrato = pratoClicado.querySelector('.preco');

    console.log(tituloPrato);
    habilitarBotao ();
}

function selecionarBebida (bebidaClicada) {
    // remover a classe selecionado da bebida que foi marcado anteriormente
    const selected = document.querySelector('.bebidas .selecionado');

    if (selected !== null) {
        selected.classList.remove('selecionado');
    }
    //Adicionar a classe selecionado
    bebidaClicada.classList.add('selecionado');
    //pegar a bebida que foi clicada
    tituloBebida = bebidaClicada.querySelector('.nome');
    precoBebida = bebidaClicada.querySelector('.preco');

    console.log(tituloBebida);
    habilitarBotao ();
}

function selecionarSobremesa (sobremesaClicada) {
    // remover a classe selecionado da sobremesa que foi marcado anteriormente
    const selected = document.querySelector('.sobremesas .selecionado');

    if (selected !== null) {
        selected.classList.remove('selecionado');
    }
    //Adicionar a classe selecionado
    sobremesaClicada.classList.add('selecionado');
    //pegar a sobremesa que foi clicado
    tituloSobremesa = sobremesaClicada.querySelector('.nome');
    precoSobremesa = sobremesaClicada.querySelector('.preco');

    console.log(tituloSobremesa);
    habilitarBotao ();
}

function habilitarBotao () {
    if (tituloPrato !== undefined && tituloBebida!== undefined && tituloSobremesa!== undefined) {
        const botao = document.querySelector('.botao');
        botao.classList.add('verde');
        botao.innerHTML = "Fechar pedido";
        habilitado = true;
    } 
}

function enviarPedido () {
    if (habilitado == null) {
        console.log("Itens não selecionados");
    } else {
    let precoFinal = (`${precoPrato.innerHTML} + 
    ${precoBebida.innerHTML} + 
    ${precoSobremesa.innerHTML}`)
    
    const msg = encodeURIComponent (`Olá, gostaria de fazer o pedido:
    - Prato: ${tituloPrato.innerHTML}
    - Bebida: ${tituloBebida.innerHTML}
    - Sobremesa: ${tituloSobremesa.innerHTML}
    Total: R$ ${precoFinal}
    `)

    window.open ('https://wa.me/5561987654321?text='+ msg)
    }
}

