menuIcon = document.querySelector('#menu');
navigation = document.querySelector('#navigation')
closeNavigation = document.querySelector('#close-navigation')
menuIcon.addEventListener('click',() =>{
    navigation.classList.remove('oculto');
})
closeNavigation.addEventListener('click', ()=>{
    navigation.classList.add('oculto');
})