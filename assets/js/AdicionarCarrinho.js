balaoQuantidadeDeitens = document.getElementById('quantidadeItensCarrinho');
mensagemVazio = document.getElementById('mensagemVazio');
listaDeProdutos = document.getElementById('listaDeProdutos');

class ProdutoCarrinho {

    constructor(nome, quantidade, preco, desconto, imagem, id) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco * desconto;
        this.precoFinal = this.quantidade * this.preco;
        this.imagem = imagem;
        this.id = id;
    }
}

todosProdutosLoja = [
    {
        nome: 'Fall Limeted Edition Sneakers',
        marca: 'SNEAKER COMPANY',
        preco: 250.00,
        desconto: .50,
        imagens: {
            thumbnail: [
                './images/image-product-1-thumbnail.jpg',
                './images/image-product-2-thumbnail.jpg',
                './images/image-product-3-thumbnail.jpg',
                './images/image-product-4-thumbnail.jpg'
            ],
            banner: [
                './images/image-product-1.jpg',
                './images/image-product-2.jpg',
                './images/image-product-3.jpg',
                './images/image-product-4.jpg'
            ]

        },
        id: 250,
        descricao: "There low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
    }
]


class Carrinho {
    constructor() {
        this.produtos = [];
    }
    adicionar(produto) {
        this.produtos.push(produto)
    }
}
const carrinho = new Carrinho;
botaoAddCarrinho = document.getElementById('addCart');
botaoAddCarrinho.addEventListener('click', event => {
    event.preventDefault();

    idDoProdutoExibidoNaPagina = 250;

    let posicaoProdutoLoja = todosProdutosLoja.findIndex((produto, index, array) => produto.id === idDoProdutoExibidoNaPagina);

    let nome = todosProdutosLoja[posicaoProdutoLoja].nome;
    let preco = todosProdutosLoja[posicaoProdutoLoja].preco;
    let desconto = todosProdutosLoja[posicaoProdutoLoja].desconto;
    let imagem = todosProdutosLoja[posicaoProdutoLoja].imagens.thumbnail[0];
    let id = todosProdutosLoja[posicaoProdutoLoja].id;


    let quantidade = parseInt(InputQuantidadeProduto.value);

    let posicaoNoCarrinho = carrinho.produtos.findIndex((produto, index, array) => produto.id === id)
    if (posicaoNoCarrinho >= 0) {
        carrinho.produtos[posicaoNoCarrinho].quantidade = carrinho.produtos[posicaoNoCarrinho].quantidade + quantidade;
        carrinho.produtos[posicaoNoCarrinho].precoFinal = carrinho.produtos[posicaoNoCarrinho].quantidade * carrinho.produtos[posicaoNoCarrinho].preco
        atualizaCarrinho(id, carrinho, posicaoNoCarrinho);
        atualizaQuantidadeBalao()


    } else {
        carrinho.adicionar(new ProdutoCarrinho(nome, quantidade, preco, desconto, imagem, id));
        let posicao = carrinho.produtos.length - 1;

        adicionaAoCarrinho(carrinho, posicao);
        if (carrinho.produtos.length === 1) {
            balaoQuantidadeDeitens.textContent = carrinho.produtos[posicao].quantidade;
            balaoQuantidadeDeitens.classList.remove('oculto');
        
        }

    }

})


function adicionaAoCarrinho(cart, posicao) {
    mensagemVazio.classList.add('oculto')
    document.getElementById('checkout').classList.remove('oculto');
    let li = document.createElement('li');
    li.classList.add('lista__item');
    li.setAttribute('data-id', cart.produtos[posicao].id);
    listaDeProdutos.appendChild(li);
    li.innerHTML = `
        <img class="item__img" src="${cart.produtos[posicao].imagem}">
        <span class="item__nome">${cart.produtos[posicao].nome}</span>
        <span class="item__preco">$${cart.produtos[posicao].preco} x<span class="item__quantidade"> ${carrinho.produtos[posicao].quantidade}</span> <span
            class="item__total">$${cart.produtos[posicao].precoFinal}</span></span>
        <button class="item__remove" id="remove"> </button>
    
    `
    remove = document.getElementById('remove');
    remove.addEventListener('click', e => {
        let index = posicao;
        let li = document.querySelector(`[data-id="${carrinho.produtos[index].id}"]`);
        li.parentNode.removeChild(li);
        carrinho.produtos.splice(index,1);
        atualizaQuantidadeBalao();
        mensagemVazio.classList.remove('oculto');
        document.getElementById('checkout').classList.add('oculto');
        balaoQuantidadeDeitens.classList.add('oculto');
    })
}

function atualizaCarrinho(id, cart, posicao) {
    document.querySelector(`[data-id="${id}"]`).innerHTML = `
    <img class="item__img" src="${cart.produtos[posicao].imagem}">
    <span class="item__nome">${cart.produtos[posicao].nome}</span>
    <span class="item__preco">$${cart.produtos[posicao].preco} x<span class="item__quantidade"> ${carrinho.produtos[posicao].quantidade}</span> <span
        class="item__total">$${cart.produtos[posicao].precoFinal}</span></span>
    <button class="item__remove" id="remove"> </button>
    `
    remove = document.getElementById('remove');
    remove.addEventListener('click', e => {
        let index = posicao;
        let li = document.querySelector(`[data-id="${carrinho.produtos[index].id}"]`);
        li.parentNode.removeChild(li);
        carrinho.produtos.splice(index,1);
        atualizaQuantidadeBalao();
        mensagemVazio.classList.remove('oculto');
        document.getElementById('checkout').classList.add('oculto');
        balaoQuantidadeDeitens.classList.add('oculto');
    })
}

function atualizaQuantidadeBalao() {
    let totalDeItens = 0;
    carrinho.produtos.forEach(e => {
        totalDeItens = e.quantidade + totalDeItens
    })
    balaoQuantidadeDeitens.textContent = totalDeItens;
}

