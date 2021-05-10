//Hamburger menu
const button = document.querySelector('.navbar__btn');
const menu = document.querySelector('.navbar__menu')

//Esta función especifica que el width tiene que ser menor a 991px
function show() {
    if (window.innerWidth <= 991) {
        menu.classList.toggle("visible");
    }
}

//Si clickeo en el boton, se activa la función
button.addEventListener("click", show);
menu.addEventListener("click", show);

if(window.innerWidth>991){
    menu.classList.remove("visible")
}