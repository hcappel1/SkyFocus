var windowWidth = window.matchMedia("(max-width: 800px)")


box = document.querySelectorAll('.box');


function changeVideo(windowWidth) {
    if (windowWidth.matches) {
        box[0].classList.add('active');
    }
    else {
        box.forEach(popup => popup.addEventListener('click', () => {
            popup.classList.toggle('active');
        }))
    }
}

changeVideo(windowWidth);