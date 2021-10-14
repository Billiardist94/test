//_________________main__cards_____________________
const list = document.querySelector('.discount-card__list');

const pushHandler = (evt) => {
    const card = evt.target.closest('li')
    const search = card?.getAttribute('goTo');
    if (!search) return;
    card.parentElement.querySelector('.active')?.classList.remove('active');
    card.classList.add('active');
    document.querySelector('.main__btn').href = 'https://www.google.com/search?q=' + search;
}
list.addEventListener('click', pushHandler);

list.firstElementChild.click();

//_________________slider_____________________
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//__________________dark__theme____________________
const containerMain = document.querySelector('.container__main');
const discountCard = document.querySelectorAll('.discount-card__item');
const sliderSlide = document.querySelectorAll('.swiper-slide');
const footerText = document.querySelector('.footer__body-text');

const date = new Date();
const hours = date.getHours();
if (hours < 8 || hours > 21) {
    containerMain.classList.add('dark__theme');
    footerText.classList.add('dark__theme');
    discountCard.forEach(item => {
        item.classList.add('dark__theme');
    })
    sliderSlide.forEach(item => {
        item.classList.add('dark__theme');
    })
}else {
    containerMain.classList.remove('dark__theme');
    footerText.classList.remove('dark__theme');
    discountCard.forEach(item => {
        item.classList.remove('dark__theme');
    })
    sliderSlide.forEach(item => {
        item.classList.remove('dark__theme');
    })
}