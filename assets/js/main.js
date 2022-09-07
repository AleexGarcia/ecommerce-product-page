menuIcon = document.querySelector('#menu');
navigation = document.querySelector('#navigation')
closeNavigation = document.querySelector('#close-navigation')
InputQuantidadeProduto = document.getElementById('quantidadeProduto')
proximo = document.getElementById('proximo');
anterior = document.getElementById('anterior');
imagensProduto = document.querySelectorAll('.produto__thumbnail');
imagemBanner = document.getElementById('imagemBanner');


menuIcon.addEventListener('click', () => {
    navigation.classList.remove('invisivel-mobile');
})
closeNavigation.addEventListener('click', () => {
    navigation.classList.add('invisivel-mobile');
})

document.getElementById('carrinho-icon').addEventListener('click', () => {
    document.getElementById('carrinho').classList.toggle('oculto');
})


var links = [];
imagensProduto.forEach((imagem,index) => {
    links.push(imagem.src.replace(/\-thumbnail/, ''));
    imagem.addEventListener('click', e => {
        let link = e.target.src.replace(/\-thumbnail/, '');
        imagemBanner.src = link;
        e.target.classList.add('active-img');
        e.target.parentNode.classList.add('active-banner');
       
        imagensProduto.forEach(img =>{
            if(img != imagensProduto[index]){
                img.classList.remove('active-img');
                img.parentNode.classList.remove('active-banner');
            }
        })
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