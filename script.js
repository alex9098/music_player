
const search = document.querySelector(".searchBar");
const searchBtn = document.querySelector(".searchBtn");

const audio = document.querySelector("audio");

searchBtn.addEventListener("click", () => {
  const searchValue = search.value;
  console.log(searchValue.split("=")[1]);
  getMusic();
});
async function getMusic() {
  searchBtn.textContent = "Search";
  const searchValue = search.value;
  const value = searchValue.split("=")[1];
  searchBtn.textContent = "loading";
  const data = await fetch(`https://youtube-mp3.onrender.com/${value}`);
  searchBtn.textContent = "5 >> loading";
  const { url } = await data.json();
  const source = document.createElement("source");
  source.src = url;
  searchBtn.textContent = "Search";
  source.type = "audio/webm";
  localStorage.setItem("audio", url);
  audio.appendChild(source);
}
getLocal = () => {
  const url = localStorage.getItem("audio");
  if (!url) return;
  const source = document.createElement("source");
  source.src = url;
  searchBtn.textContent = "Search";
  source.type = "audio/webm";
  audio.appendChild(source);
};
getLocal();
