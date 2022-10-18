let tituloPrato;
let precoPrato;
let tituloBebida;
let precoBebida;
let tituloSobremesa;
let precoSobremesa;
let habilitado;

function selecionarPrato(pratoClicado) {
    // remover a classe selecionado do prato que foi marcado anteriormente
    const selected = document.querySelector('.pratos .selecionado');

    if (selected !== null) {
        selected.classList.remove('selecionado');
    }
    //Adicionar a classe selecionado
    pratoClicado.classList.add('selecionado');
    //pegar a div do prato e do preço que foi clicado
    tituloPrato = pratoClicado.querySelector('.nome');
    precoPrato = pratoClicado.querySelector('.preco').innerHTML;

    console.log(tituloPrato);
    console.log(precoPrato);
    habilitarBotao();
}

function selecionarBebida(bebidaClicada) {
    // remover a classe selecionado da bebida que foi marcado anteriormente
    const selected = document.querySelector('.bebidas .selecionado');

    if (selected !== null) {
        selected.classList.remove('selecionado');
    }
    //Adicionar a classe selecionado
    bebidaClicada.classList.add('selecionado');
    //pegar a div da bebida e do preço que foi clicada
    tituloBebida = bebidaClicada.querySelector('.nome');
    precoBebida = bebidaClicada.querySelector('.preco').innerHTML;

    console.log(tituloBebida);
    console.log(precoBebida);
    habilitarBotao();
}

function selecionarSobremesa(sobremesaClicada) {
    // remover a classe selecionado da sobremesa que foi marcado anteriormente
    const selected = document.querySelector('.sobremesas .selecionado');

    if (selected !== null) {
        selected.classList.remove('selecionado');
    }
    //Adicionar a classe selecionado
    sobremesaClicada.classList.add('selecionado');
    //pegar a div da sobremesa e do preço que foi clicado
    tituloSobremesa = sobremesaClicada.querySelector('.nome');
    precoSobremesa = sobremesaClicada.querySelector('.preco').innerHTML;

    console.log(tituloSobremesa);
    console.log(precoSobremesa);
    habilitarBotao();
}

function habilitarBotao() {
    if (tituloPrato !== undefined && tituloBebida !== undefined && tituloSobremesa !== undefined) {
        const botao = document.querySelector('.botao');
        botao.classList.add('verde');
        botao.innerHTML = "Fechar pedido";
        habilitado = true;
    }
}

function enviarPedido() {
    if (habilitado == undefined) {
        window.alert("Selecione todos os itens primeiro");
    } else {
        precoPrato = precoPrato.replace('R$ ', '');
        precoBebida = precoBebida.replace('R$ ', '');
        precoSobremesa = precoSobremesa.replace('R$ ', '');

        precoPrato = precoPrato.replace(',', '.');
        precoBebida = precoBebida.replace(',', '.');
        precoSobremesa = precoSobremesa.replace(',', '.');

        let precoFinal = Number(precoPrato) + Number(precoBebida) + Number(precoSobremesa);

        const msg = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n
        - Prato: ${tituloPrato.innerHTML}\n
        - Bebida: ${tituloBebida.innerHTML}\n
        - Sobremesa: ${tituloSobremesa.innerHTML}\n
        Total: ${precoFinal.toFixed(2)}
        `)

        window.open('https://wa.me/5561987654321?text='+ msg)
    }
}

