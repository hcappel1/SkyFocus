var windowWidth = window.matchMedia("(max-width: 800px)")


box = document.querySelectorAll('.box');
var i = 0;


function changeVideo(windowWidth) {
    if (windowWidth.matches) {
        window.setInterval(function () {
            if (i == 0) {
                box[2].classList.remove('active');
            }
            else {
                box[i-1].classList.remove('active');
            }
            box[i].classList.add('active');
            console.log(i);
            if (i < 2) {
                i++;
            }
            else {
                i = 0;
            }
        }, 5000);
    }
    else {
        box.forEach(popup => popup.addEventListener('click', () => {
            popup.classList.toggle('active');
        }))
    }
}

changeVideo(windowWidth);
