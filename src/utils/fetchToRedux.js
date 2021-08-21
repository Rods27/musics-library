import getFromDeezer from "../services/getFromDeezer";

export async function fetchGenresToRedux(dispatchGenres) {
  const genres = await getFromDeezer('https://api.deezer.com/editorial?limit=28');
  const newArray = genres.data.filter((elem) => elem.name !== "All");
  dispatchGenres(newArray)
}

function secondsToMinutes(musics) {
  musics.forEach((elem) => {
    let seconds = Number(elem.duration);
    let min = Math.floor(seconds % 3600 / 60);
    let sec = Math.floor(seconds % 3600 % 60);
    let newSec = "";
    newSec = sec < 10 ? "0" : "";
    elem.duration = `${min}:${newSec}${sec}`;
  })
}

function separateAlbunAndTitle(mainMusics) {
  mainMusics.forEach((elem) => {
    const music = elem.title;
    const album = elem.album.title
    if(music.length > 30) {
      const newStr = elem.title.substr(0, 30).concat('...')
      elem.title = newStr
    }
    if(album.length > 30) {
      const newStr = elem.album.title.substr(0, 30).concat('...')
      elem.album.title = newStr
    }
    elem.thumbs = false;
  })
}

export async function fetchMusicsToRedux(dispatchMusics) {
  const mainMusics = await getFromDeezer('https://api.deezer.com/playlist/3155776842/tracks&limit=50');
  secondsToMinutes(mainMusics.data)
  separateAlbunAndTitle(mainMusics.data)
  dispatchMusics(mainMusics.data);
}