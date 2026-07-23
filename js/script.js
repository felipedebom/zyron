// ZYRON - Interações do site

document.body.classList.add("loading");

// Mantém a navegação funcional tanto na Vercel quanto ao abrir os HTMLs
// diretamente pelo explorador de arquivos (protocolo file://).
if (window.location.protocol === "file:") {
    const localRoutes = {
        "/": "index.html",
        "/sobre": "sobre.html",
        "/servicos": "servicos.html",
        "/produtos": "produtos.html",
        "/contato": "contato.html",
        "/landing-pages": "landing-pages.html",
        "/mesh-conect": "mesh-conect.html"
    };

    document.querySelectorAll('a[href^="/"]').forEach((link) => {
        const target = link.getAttribute("href");
        const [route, hash = ""] = target.split("#");
        const localFile = localRoutes[route];

        if (localFile) {
            link.setAttribute("href", `${localFile}${hash ? `#${hash}` : ""}`);
        }
    });
}

const reveals = document.querySelectorAll(".reveal");
const topButton = document.querySelector(".top-button");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const contactForm = document.querySelector("#contactForm");
const heroDevices = document.querySelector(".hero-devices");

const monitor = document.querySelector(".device-monitor");
const notebook = document.querySelector(".device-notebook");
const phone = document.querySelector(".device-phone");

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

topButton?.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

function fecharMenu() {
    navMenu?.classList.remove("active");
    document.body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Abrir menu");

    const icon = menuToggle?.querySelector("i");
    icon?.classList.add("fa-bars");
    icon?.classList.remove("fa-xmark");
}

menuToggle?.addEventListener("click", () => {

    const aberto = navMenu.classList.toggle("active");

    document.body.classList.toggle("menu-open", aberto);

    menuToggle.setAttribute("aria-expanded", String(aberto));
    menuToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");

    const icon = menuToggle.querySelector("i");

    icon.classList.toggle("fa-bars", !aberto);
    icon.classList.toggle("fa-xmark", aberto);

});

navMenu?.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", fecharMenu);

});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navMenu?.classList.contains("active")) {
        fecharMenu();
        menuToggle?.focus();
    }
});

document.addEventListener("click", (event) => {
    if (!navMenu?.classList.contains("active")) return;
    if (navMenu.contains(event.target) || menuToggle?.contains(event.target)) return;
    fecharMenu();
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) fecharMenu();
});

contactForm?.addEventListener("submit", (event) => {

    event.preventDefault();

    const nome = contactForm.querySelector("#nome").value.trim();
    const empresa = contactForm.querySelector("#empresa").value.trim();
    const tipo = contactForm.querySelector("#tipo").value;
    const mensagem = contactForm.querySelector("#mensagem").value.trim();

    if (!nome || !tipo || !mensagem) {
        contactForm.reportValidity();
        return;
    }

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

if (loader) {

    const jaVisitou = sessionStorage.getItem("zyronLoader");

    if (!jaVisitou) {

        sessionStorage.setItem("zyronLoader", "true");

        setTimeout(() => {

            loader.classList.add("hide");

            document.body.classList.remove("loading");
            document.body.classList.add("page-loaded");

        }, 800);

    } else {

        loader.remove();

        document.body.classList.remove("loading");
        document.body.classList.add("page-loaded");

    }

} else {

    document.body.classList.remove("loading");
    document.body.classList.add("page-loaded");

}
});
heroDevices?.addEventListener("mousemove", (event) => {

    const rect = heroDevices.getBoundingClientRect();

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;

    const moveX = (x - rect.width / 2) / 40;

    const moveY = (y - rect.height / 2) / 40;

    monitor.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

});
heroDevices?.addEventListener("mouseleave", () => {

    monitor.style.transform = "translate(0px,0px)";

});
