// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Добавляем тень на навбар при прокрутке
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('video');
    if (video) {
        video.autoplay = false;
        video.pause();
        
        // Дополнительная защита от автовоспроизведения
        video.removeAttribute('autoplay');
        video.setAttribute('data-autoplay', 'false');
    }
});

// Обработчик для всех кнопок консультации Binotel
document.addEventListener('DOMContentLoaded', function() {
    // Находим ВСЕ кнопки консультации по ссылке
    const consultButtons = document.querySelectorAll('a[href="https://t.me/Bulanova_school_bot?start=consult"]');
    
    consultButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Отменяем переход по ссылке
            
            // Ищем кнопку Binotel
            const binotelButton = document.getElementById('bingc-phone-button');
            
            if (binotelButton) {
                // Эмулируем клик по кнопке Binotel
                binotelButton.click();
                console.log('Клик по кнопке Binotel выполнен');
            } else {
                console.log('Кнопка Binotel не найдена');
                // Если кнопка Binotel не найдена, перенаправляем в Telegram как запасной вариант
                window.location.href = 'https://t.me/Bulanova_school_bot?start=consult';
            }
        });
    });
});
// // Отслеживание кликов по кнопкам "Пройти безкоштовний курс"
// document.addEventListener('DOMContentLoaded', function() {
//     const courseButtons = document.querySelectorAll('a.btn-accent');
    
//     courseButtons.forEach(button => {
//         if (button.textContent.trim() === 'Пройти безкоштовний курс' || 
//             button.textContent.trim() === 'Пройти курс')  {
//             button.addEventListener('click', function() {
//                 if (typeof fbq === 'function') {
//                     fbq('track', 'Lead');
//                     console.log('Course button tracked as Lead');
//                 }
//             });
//         }
//     });
// });

// // Отслеживание кликов по кнопке Binotel (по тексту)
// setTimeout(function() {
//     const binotelButton = document.querySelector('.bingc-phone-button');
    
//     if (binotelButton && !binotelButton.hasAttribute('data-fb-tracked')) {
//         binotelButton.setAttribute('data-fb-tracked', 'true');
//         binotelButton.addEventListener('click', function() {
//             if (typeof fbq === 'function') {
//                 fbq('track', 'Lead');
//             }
//         });
//     }
// }, 1000);