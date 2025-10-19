    function updateNavbarBackground() {
        const navbar = document.querySelector('.navbar');
        const banner = document.querySelector('.banner-container');
        const bannerBottom = banner.offsetTop + banner.offsetHeight;

        if (window.scrollY < bannerBottom) {
            navbar.classList.add('transparent');
            navbar.classList.remove('solid');
        } else {
            navbar.classList.remove('transparent');
            navbar.classList.add('solid');
        }
    }

    window.addEventListener('scroll', updateNavbarBackground);
    window.addEventListener('load', updateNavbarBackground);