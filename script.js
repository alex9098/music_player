// get elements button
const playBtn = document.querySelector(".play")

const track = document.createElement("audio")
// input range
const playTime = document.querySelector(".durationBar")
const search = document.querySelector(".searchBar")
let timer;   //for change input range

// track.src = "mp3/mixkit-hip-hop-02-738.mp3"
let isPlay = false;
let url;

search.addEventListener("change",()=>{
    const searchValue = search.value
    console.log(searchValue.split('=')[1]);
    getMusic()
})
async function getMusic(){
    const searchValue = search.value
   const value = searchValue.split('=')[1]
    const data = await fetch(`https://youtube-mp3.onrender.com/${value}`)
    url = await data.json()
    url = url.url
    loadMusic()
}

 getMusic()
playTime.addEventListener("change",()=>{
    track.currentTime = (playTime.value*track.duration)/100
})

function loadMusic() {
    track.src = url
    track.load()
    playMusic()
    isPlay = true
   setInterval(()=>{
    console.log(9);
    playTime.value=(track.currentTime/track.duration)*100
    playTime.addEventListener("change",()=>{
        track.currentTime = (playTime.value*track.duration)/100
    })
   },1000)    
}

function playMusic() {
    
    playBtn.innerHTML=` <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
  </svg>`
    track.play()
    isPlay = true
}

function pauseMusic() {
    playBtn.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
    <path  d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
  </svg>`
    track.pause()
    console.log('clicked',track.currentTime);
    isPlay = false
}
function music() {
    if (isPlay) pauseMusic();
    else playMusic();
}

function changeInputRange(){
   
    
}


function nextMusic() {
    console.log('clicked');
}
function preMusic() {
    console.log('clicked');
}

