menuIcon = document.querySelector('#menu');
navigation = document.querySelector('#navigation')
closeNavigation = document.querySelector('#close-navigation')
menuIcon.addEventListener('click', () => {
    navigation.classList.remove('oculto');
})
closeNavigation.addEventListener('click', () => {
    navigation.classList.add('oculto');
})

document.getElementById('carrinho-icon').addEventListener('click', () => {
    document.getElementById('carrinho').classList.toggle('oculto');
})

imagensProduto = document.querySelectorAll('.produto__thumbnail');
imagemBanner = document.getElementById('imagemBanner');
var links = [];
imagensProduto.forEach(imagem => {
    
    links.push(imagem.currentSrc.replace(/\-thumbnail/,''));

    imagem.addEventListener('click', e => {
        let link = e.srcElement.currentSrc.replace(/\-thumbnail/,'');
        console.log(link)
        imagemBanner.src = link;
    });

});

anterior = document.getElementById('anterior');
anterior.addEventListener('click', () =>{
    links.forEach((link,index)=>{
        if(link === imagemBanner.src && index != 0){
            novaPosicao = links.indexOf(link) - 1;
            imagemBanner.src = links[novaPosicao];
            
        }
    })
})
proximo = document.getElementById('proximo');
proximo.addEventListener('click', () =>{
    for (let index = 0; index < links.length; index++) {
        const link = links[index];
        if(link === imagemBanner.src && index < links.length - 1){
            novaPosicao = links.indexOf(link) + 1;
            imagemBanner.src = links[novaPosicao];
            break;   
        }
    }
})
