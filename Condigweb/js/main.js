
//inicia la libreria de las animaciones
AOS.init();

//efecto del menu 
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>1);
})


