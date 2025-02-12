
/*====  Turns the menu hamburguer into a x ====*/
const menuHambuerg = Document.querySelector('.menu-hamburguer');
    menuHambuerguer.AddEventListener('click' , () => {
        toggleMenu();
    });

    function toggleMenu() {
        const nav = Document.querySelector('.nav-responsive');
        menuHamburguer.classList.toggle('change');
    }

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';

    } else {
        nav.style.display = 'none';
    }
