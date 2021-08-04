const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const chevrons_all = document.querySelectorAll('.chevron');
const burgers_all = document.querySelectorAll('.burger');
const slideInfo_all = document.querySelectorAll('.content');


const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    }
    else {
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    }
    else {
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

//Button events
next.addEventListener('click', e => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

//Auto slide
if(auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}

//Info bar
burgers_all.forEach( function( element, index ) {
    element.addEventListener('click',()=> {
        slideInfo_all[index].classList.toggle('content-active');
        element.classList.toggle('toggle');
    });
});

chevrons_all.forEach( function( element, index ) {
    element.addEventListener('click',()=> {
        slideInfo_all[index].classList.toggle('content-active');
        element.classList.toggle('chevron-active');
    });
});


// burger.addEventListener('click',()=> {
//     slideInfo.classList.toggle('content-active');
//     burger.classList.toggle('toggle');
// });