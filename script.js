// BOTÃO FLUTUANTE SCROLL TO TOP

const btn = document.getElementById("btnTop")

btn.addEventListener("click", function () {
    window.scroll(0, 0)
})


document.addEventListener('scroll', ocultar)

function ocultar() {
    if (window.scrollY > 980) {
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}

ocultar()


// SCROLL TO ITEM

/* ANIMAÇÃO SMOOTH PARA DESKTOP */

const menuItems = document.querySelectorAll('.cabecalho-menu a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})
function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}
function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 1;
    scrollToPosition(to);
}
function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth",
    });
}

// menu responsivo 

/* let show = true;

const menuSection = document.querySelector(".menu-section")
const MenuToggle = document.querySelector(".menu-toggle")

MenuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
}) */

// FUNÇÃO PARA OCULTAR O MENU TOGGLE AO SER CLICADO

/* function myFunction() {
    var x = document.getElementsByClassName("menu-section");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else{
        x.style.display = "none";
    }
} */

// teste

