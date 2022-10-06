const albumContainer = document.querySelector('.album-container');
const sliderContainer = document.querySelector('.album-slider-container');
const SToABnts = document.getElementsByClassName('slider-to-album');

const handleSlinderHidden = ()=> {
    setTimeout(()=>{
        albumContainer.classList.remove("hidden");
        sliderContainer.classList.add("hidden");
    }, 400)
}

Array.from(SToABnts).forEach(Bnt => Bnt.addEventListener('click', handleSlinderHidden));
