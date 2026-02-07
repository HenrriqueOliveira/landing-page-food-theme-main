$(document).ready(function () {

    /* ===================== */
    /* MENU MOBILE */
    /* ===================== */
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    /* ===================== */
    /* SCROLL ATIVO NO MENU */
    /* ===================== */
    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.1)');
        }

        sections.each(function (i) {
            const sectionTop = $(this).offset().top - 96;
            const sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    /* ===================== */
    /* CONTROLE DE QUANTIDADE */
    /* ===================== */
    $('.plus').on('click', function () {
        let qtyElement = $(this).siblings('.qty');
        let value = parseInt(qtyElement.text());
        qtyElement.text(value + 1);
    });

    $('.minus').on('click', function () {
        let qtyElement = $(this).siblings('.qty');
        let value = parseInt(qtyElement.text());
        if (value > 1) {
            qtyElement.text(value - 1);
        }
    });

    /* ===================== */
    /* SCROLL REVEAL */
    /* ===================== */
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'bottom',
        duration: 1500,
        distance: '20%',
        interval: 200
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

    /* ===================== */
    /* DARK MODE */
    /* ===================== */
    const toggleTheme = document.getElementById('toggle-theme');

    if (toggleTheme) {
        toggleTheme.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }

    /* ===================== */
    /* ANIMAÇÕES COM INTERSECTION OBSERVER */
    /* ===================== */
    const animatedElements = document.querySelectorAll('.animate');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });

        animatedElements.forEach(el => observer.observe(el));
    }

});
