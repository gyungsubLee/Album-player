const tracks = [
    {
      name: "Mekanın Sahibi",
      artist: "Norm Ender",
      cover: "https://raw.githubusercontent.com/gyungsubLee/Album-player/main/img/1.jpg",
      source: "https://raw.githubusercontent.com/gyungsubLee/Album-player/main/audio/1.mp3",
    },
    {
      name: "Everybody Knows",
      artist: "Leonard Cohen",
      cover: "https://raw.githubusercontent.com/gyungsubLee/Album-player/main/img/2.jpg",
      source: "https://raw.githubusercontent.com/gyungsubLee/Album-player/main/audio/2.mp3",
    },
    {
      name: "Extreme Ways",
      artist: "Moby",
      cover: "https://raw.githubusercontent.com/gyungsubLee/Album-player/main/img/3.jpg",
      source: "https://raw.githubusercontent.com/gyungsubLee/Album-player/main/audio/3.mp3",
    },
    {
      name: "Butterflies",
      artist: "Sia",
      cover: "https://raw.githubusercontent.com/gyungsubLee/Album-player/main/img/4.jpg",
      source: "https://raw.githubusercontent.com/gyungsubLee/Album-player/main/audio/4.mp3",
    },
    {
      name: "The Final Victory",
      artist: "Haggard",
      cover: "https://raw.githubusercontent.com/gyungsubLee/Album-player/main/img/5.jpg",
      source: "https://raw.githubusercontent.com/gyungsubLee/Album-player/main/audio/5.mp3",
    }
]

const albumContainer = document.querySelector('.album-container');
const sliderContainer = document.querySelector('.album-slider-container');

// Slider Listen Bnt
const SToABnts = document.getElementsByClassName('slider-to-album');

const handleSToA = (idx)=> {
    const albumImg1 = document.querySelector('.album-img1');
    const albumImg2 = document.querySelector('.album-img2');
    albumImg1.src = tracks[idx]["cover"];
    albumImg2.src = tracks[idx]["cover"];
    Msound.src = tracks[idx]["source"];
    setTimeout(()=>{
        albumContainer.classList.remove("hidden");
        sliderContainer.classList.add("hidden");
    }, 400)
}

Array.from(SToABnts).forEach((Bnt,idx) => Bnt.addEventListener('click', ()=>handleSToA(idx)));


// 각 album  title, artist 적용
const sliderItemCaptions= document.getElementsByClassName('slider-item-figure__caption');

Array.from(sliderItemCaptions).forEach((Caption, idx)=> {
  Caption.childNodes[1].innerText = tracks[idx]["name"];
  Caption.childNodes[3].innerText = tracks[idx]["artist"];
});



