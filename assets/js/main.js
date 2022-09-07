menuIcon = document.querySelector('#menu');
navigation = document.querySelector('#navigation')
closeNavigation = document.querySelector('#close-navigation')
InputQuantidadeProduto = document.getElementById('quantidadeProduto')
proximo = document.getElementById('proximo');
anterior = document.getElementById('anterior');
imagensProduto = document.querySelectorAll('.produto__thumbnail');
imagemBanner = document.getElementById('imagemBanner');


menuIcon.addEventListener('click', () => {
    navigation.classList.remove('oculto');
})
closeNavigation.addEventListener('click', () => {
    navigation.classList.add('oculto');
})

document.getElementById('carrinho-icon').addEventListener('click', () => {
    document.getElementById('carrinho').classList.toggle('oculto');
})


var links = [];
imagensProduto.forEach(imagem => {

    links.push(imagem.currentSrc.replace(/\-thumbnail/, ''));

    imagem.addEventListener('click', e => {
        let link = e.srcElement.currentSrc.replace(/\-thumbnail/, '');
        imagemBanner.src = link;

    });

});


anterior.addEventListener('click', () => {
    links.forEach((link, index) => {
        if (link === imagemBanner.src && index != 0) {
            novaPosicao = links.indexOf(link) - 1;
            imagemBanner.src = links[novaPosicao];

        }
    })
})

proximo.addEventListener('click', () => {
    for (let index = 0; index < links.length; index++) {
        const link = links[index];
        if (link === imagemBanner.src && index < links.length - 1) {
            novaPosicao = links.indexOf(link) + 1;
            imagemBanner.src = links[novaPosicao];
            break;
        }
    }
})

document.querySelector('.input-control-container').addEventListener('click', e => {
    if (e.target.dataset.control === '+') {
        InputQuantidadeProduto.value = parseInt(InputQuantidadeProduto.value) + 1;
    } else if (e.target.dataset.control === '-' && InputQuantidadeProduto.value > 1) {
        InputQuantidadeProduto.value = parseInt(InputQuantidadeProduto.value) - 1;
    }
})