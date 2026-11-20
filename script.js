document.addEventListener('DOMContentLoaded', () => {

    // 1. MENU MOBILE
    const btnMobile = document.getElementById('menu-mobile');
    const navLinks = document.getElementById('nav-links');
    
    if(btnMobile) {
        btnMobile.addEventListener('click', () => {
            navLinks.classList.toggle('ativo');
            const icone = btnMobile.querySelector('i');
            icone.classList.toggle('fa-bars');
            icone.classList.toggle('fa-times');
        });
    }

    // Fechar menu ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('ativo');
            if(btnMobile) {
                btnMobile.querySelector('i').classList.remove('fa-times');
                btnMobile.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // 2. HEADER SOMBRA AO ROLAR
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('rolado');
        } else {
            header.classList.remove('rolado');
        }
    });

    // 3. ANIMAÇÃO DE SCROLL (FADE UP)
    const elementosAnimar = document.querySelectorAll('.animar-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ativo');
                observer.unobserve(entry.target); // Anima só uma vez
            }
        });
    }, { threshold: 0.15 });

    elementosAnimar.forEach(el => observer.observe(el));

});