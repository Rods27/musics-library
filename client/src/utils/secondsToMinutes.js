export default function secondsToMinutes(musics) {
  musics.forEach((elem) => {
    let seconds = Number(elem.duration);
    let min = Math.floor(seconds % 3600 / 60);
    let sec = Math.floor(seconds % 3600 % 60);
    let newSec = "";
    newSec = sec < 10 ? "0" : "";
    elem.duration = `${min}:${newSec}${sec}`;
  })
}