const albumContainer = document.querySelector('.album-container');
const sliderContainer = document.querySelector('.album-slider-container');
const body = document.querySelector('body');
const SToABnts = document.getElementsByClassName('slider-to-album');


const AddSlinderHidden = ()=> {
    setTimeout(()=>{
        albumContainer.classList.remove("hidden");
        sliderContainer.classList.add("hidden");
    }, 400)
}

Array.from(SToABnts).forEach(Bnt => Bnt.addEventListener('click', AddSlinderHidden));


window.addEventListener('click', (e) => {
    if(sliderContainer.classList.contains("hidden") && e.target === body) {
        albumContainer.classList.add("hidden");
        sliderContainer.classList.remove("hidden");
    }
});