const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const carousel = document.querySelector(".carousel");
const list = document.querySelector(".list");
const items = document.querySelectorAll(".item");
const runningTime = document.querySelector(".timeRunning");

let timeRunning = 2000;
let timeAutoNext = 3000;

nextBtn.onclick = function () {
    showSlider('next')
}
prevBtn.onclick = function () {
    showSlider('prev')
}

let runTimeOut
let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)

function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight
    runningTime.style.animation = null
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll(".carousel .list .item")
    if (type === 'next') {
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }
    clearTimeout(runTimeOut)

    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)

    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation()
}

resetTimeAnimation()