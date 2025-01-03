// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
})

// show/hide faq answer

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className - "uil uil-plus";
        }
    })
})

// SHOW/HIDE NAV MENU
// JavaScript
const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const navMenu = document.querySelector('.nav_menu');

// Обробник події для кнопки "Open"
openMenuBtn.addEventListener('click', () => {
    navMenu.style.display = 'flex'; // Показати меню
    openMenuBtn.style.display = 'none'; // Сховати кнопку відкриття
    closeMenuBtn.style.display = 'inline-block'; // Показати кнопку закриття
});

// Обробник події для кнопки "Close"
closeMenuBtn.addEventListener('click', () => {
    navMenu.style.display = 'none'; // Сховати меню
    openMenuBtn.style.display = 'inline-block'; // Показати кнопку відкриття
    closeMenuBtn.style.display = 'none'; // Сховати кнопку закриття
});

// Закриття меню при натисканні на посилання
const navLinks = document.querySelectorAll('.nav_menu a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.style.display = 'none'; // Сховати меню
        openMenuBtn.style.display = 'inline-block'; // Показати кнопку відкриття
        closeMenuBtn.style.display = 'none'; // Сховати кнопку закриття
    });
});

// Закриття меню при зміні розміру вікна
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) { // Змінити 768 на ширину, при якій меню має бути закритим
        navMenu.style.display = 'none'; // Сховати меню
        openMenuBtn.style.display = 'inline-block'; // Показати кнопку відкриття
        closeMenuBtn.style.display = 'none'; // Сховати кнопку закриття
    }
});