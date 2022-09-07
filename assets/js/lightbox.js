proximoLightBox = document.querySelector('#proximo_lightBox')
anteriorLightBox = document.querySelector('#anterior_lightBox')
imagemBannerLightbox = document.querySelector('#imagemBanner_lightBox')

anteriorLightBox.addEventListener('click', () => {
    links.forEach((link, index) => {
        if (link === imagemBannerLightbox.src && index != 0) {
            novaPosicao = links.indexOf(link) - 1;
            imagemBannerLightbox.src = links[novaPosicao];

        }
    })
})

proximoLightBox.addEventListener('click', () => {
    for (let index = 0; index < links.length; index++) {
        const link = links[index];
        if (link === imagemBannerLightbox.src && index < links.length - 1) {
            novaPosicao = links.indexOf(link) + 1;
            imagemBannerLightbox.src = links[novaPosicao];
            break;
        }
    }
})
imagens = document.querySelectorAll('.lightBox__thumbnail');
imagens.forEach((imagem,index) => {
    imagem.addEventListener('click', e => {
        let link = e.target.src.replace(/\-thumbnail/, '');
        imagemBannerLightbox.src = link;
        e.target.classList.add('active-image');
        e.target.parentNode.classList.add('active-item');
        imagens.forEach(imagem =>{
            if(imagem != imagens[index]){
                imagem.classList.remove('active-image');
                imagem.parentNode.classList.remove('active-item');
            }
        })
    
    });
});
ligthBoxSection = document.querySelector('#lightBox');
document.querySelector('#close_lightbox').addEventListener('click',()=>{
    console.log('clicado')
    ligthBoxSection.classList.add('ocultar-lightbox');
})

imagemBanner.addEventListener('click',e =>{
    imagemBannerLightbox.src = e.target.src;
    ligthBoxSection.classList.remove('ocultar-lightbox');
})