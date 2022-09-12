class ContactForm {
    constructor(nome, email, desejo) {
        this.nome = nome;
        this.email = email;
        this.desejo = desejo;
    }
}

function verificarInfors() {
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let desejo = document.getElementById('desejo');

    let contactForm = new ContactForm(
        nome.value,
        email.value,
        desejo.value
    );

    console.log(contactForm);

    nome.value = '';
    email.value = '';
    desejo.value = '';
}

let links = document.querySelectorAll('li a[href^="#"]');

links.forEach((l) => {
    l.addEventListener('click', scrollToClick);
});

function scrollToClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target);

    window.scroll({
        top: to,
        behavior: "smooth"
    });
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}