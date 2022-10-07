// Album Bnt
const ABPlayBnt = document.getElementById('btn-play');
const ABPauseBnt = document.getElementById('btn-pause');
const ABResetBnt = document.querySelector('.lbl-btn-reset');

let isPlay = false;

// Audio 객체 설정
const Msound = new Audio();
Msound.src = "";


// 재생 버튼
ABPlayBnt.addEventListener('click', ()=>{
    if (isPlay === false) {
        Msound.play();
        isPlay = !isPlay;
    }
});

// 정지 버튼
ABPauseBnt.addEventListener('click', ()=>{
    if (isPlay === true) {
        Msound.pause();
        isPlay = !isPlay;
    }
});

//다시 시작 버튼
ABResetBnt.addEventListener('click', ()=>{
    Msound.pause(); 
    Msound.currentTime = 0; 
    if (isPlay === true) {
        Msound.play();
    }
});




// ALbum -> Slider
const body = document.querySelector('body');

window.addEventListener('click', (e) => {
    if(sliderContainer.classList.contains("hidden") && e.target === body) {
        albumContainer.classList.add("hidden");
        sliderContainer.classList.remove("hidden");
    }
});
