// ZYRON - Interações do site

document.body.classList.add("loading");

const reveals = document.querySelectorAll(".reveal");
const topButton = document.querySelector(".top-button");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const contactForm = document.querySelector("#contactForm");

function revelarElementos() {
    const alturaTela = window.innerHeight;

    reveals.forEach((elemento) => {
        const topo = elemento.getBoundingClientRect().top;

        if (topo < alturaTela - 120) {
            elemento.classList.add("active");
        }
    });
}

function controlarTopo() {
    if (!topButton) return;

    topButton.classList.toggle("show", window.scrollY > 520);
}

function fecharMenu() {
    navMenu?.classList.remove("active");
    document.body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");

    const icon = menuToggle?.querySelector("i");
    icon?.classList.add("fa-bars");
    icon?.classList.remove("fa-xmark");
}

menuToggle?.addEventListener("click", () => {

    const aberto = navMenu.classList.toggle("active");

    document.body.classList.toggle("menu-open", aberto);

    menuToggle.setAttribute("aria-expanded", String(aberto));

    const icon = menuToggle.querySelector("i");

    icon.classList.toggle("fa-bars", !aberto);
    icon.classList.toggle("fa-xmark", aberto);

});

navMenu?.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", fecharMenu);

});

contactForm?.addEventListener("submit", (event) => {

    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const empresa = document.querySelector("#empresa").value.trim();
    const tipo = document.querySelector("#tipo").value;
    const mensagem = document.querySelector("#mensagem").value.trim();

    const texto =
        `Olá, ZYRON! Meu nome é ${nome}. Empresa: ${empresa || "não informada"}. Tipo de projeto: ${tipo}. Mensagem: ${mensagem}`;

    const telefone = "5548999999999";

    const url =
        `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank", "noopener,noreferrer");

});

window.addEventListener("scroll", () => {

    revelarElementos();
    controlarTopo();

});

window.addEventListener("load", () => {

    revelarElementos();
    controlarTopo();

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

        document.body.classList.remove("loading");
        document.body.classList.add("page-loaded");

    }, 1700);

});