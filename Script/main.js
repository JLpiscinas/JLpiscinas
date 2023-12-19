//decretando uma variavel e indicando onde se encontra o valor dela
var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('menu-btn i');

//criando função
function menuShow(){
    //se a list tiver a class open..
    if(ul.classList.contains('open')){
    //então a lista sera removida..    
        ul.classList.remove('open');
    //se não
    }else{
    //adiciona class open
        ul.classList.add('open')
    }
}
