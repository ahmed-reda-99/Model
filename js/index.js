var lightBoxContainer = document.querySelector('.lightbox-container');
var lightBoxItem = document.querySelector('.lightbox-item');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var wClose = document.getElementById('wClose');
var currentIndex = 0;
var imgSrc;

var imgs = document.querySelectorAll('.item-img');
var imgsArray = [];

for (var i = 0; i < imgs.length; i++) {

    imgsArray.push(imgs[i]);

    imgs[i].addEventListener('click', function (e) {
        lightBoxContainer.classList.add('show');
        imgSrc = e.target.src;
        lightBoxItem.style.backgroundImage = `url('${imgSrc}')`;

        currentIndex = imgsArray.indexOf(e.target);
    });
}


next.addEventListener('click', function () {
    currentIndex++;
    if (currentIndex == imgsArray.length) {
        currentIndex = 0;
    }
    lightBoxItem.style.backgroundImage = `url('${imgsArray[currentIndex].src}')`;
});

prev.addEventListener('click', function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgsArray.length - 1;
    }
    lightBoxItem.style.backgroundImage = `url('${imgsArray[currentIndex].src}')`;
});

wClose.addEventListener('click', function () {
    lightBoxContainer.classList.remove('show');
});

