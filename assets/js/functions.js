// Hamburguer

function toggleMenu() {
    const nav = document.getElementById('menu');
    nav.classList.toggle('active');
}

// Slides

let currentSlide = 0;
const slides = document.querySelectorAll(".card");
const sliderBackground = document.querySelector(".slider-background");
const slidesJogos = document.querySelectorAll(".jogos-container");

function showSlide(index) {
    slides.forEach((card, i) => {
        card.classList.remove("active");
        if (i === index) {
            card.classList.add("active");

            // Atualiza o plano de fundo com a imagem do slide atual
            const img = card.querySelector("img");
            if (img) {
                sliderBackground.style.backgroundImage = `url('${img.src}')`;
            }
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);

    setInterval(nextSlide, 5000);

});



// alterar tema da pagina

    // const toggleBtn = document.getElementById('theme-toggle');
    // const body = document.body;

    // toggleBtn.addEventListener('click', () => {
    //     body.classList.toggle('light-mode');
    //     toggleBtn.textContent = body.classList.contains('light-mode') ? '☀️' : '🌙';
    // });
