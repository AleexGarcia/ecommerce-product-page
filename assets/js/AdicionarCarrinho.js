class Produto {
    constructor(nome,quantidade,preco){
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.precoFinal = this.quantidade * this.preco;
        this.img = '../../images/image-product-1-thumbnail.jpg';
    }
}   
let tenis = new Produto('Fall Limeted Edition Sneakers', quantidadeProduto.value,125.00);


class Carrinho {
    constructor(){
        this.carrinho = [];
    }
    adicionar(Produto){
        this.carrinho.push(Produto)
    }
}

