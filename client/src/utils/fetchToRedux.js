import getFromDeezer from "../services/getFromDeezer";
import secondsToMinutes from "./secondsToMinutes";
import cutAlbumAndTitle from "./cutAlbumAndTitle";

export async function fetchGenresToRedux(dispatchGenres) {
  const genres = await getFromDeezer('https://api.deezer.com/editorial?limit=28');
  const newArray = genres.data.filter((elem) => {
    return elem.name !== "All" && elem.name !== "Todos"
  });
  dispatchGenres(newArray)
}

export async function fetchMusicsToRedux(dispatchMusics, dispatchFavorites) {
  if (!localStorage.thumbs) localStorage.setItem('thumbs', JSON.stringify([]));
  if (!localStorage.favorites) localStorage.setItem('favorites', JSON.stringify([]));
  const mainMusics = await getFromDeezer('https://api.deezer.com/playlist/3155776842/tracks&limit=50');
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  dispatchFavorites(favorites);
  secondsToMinutes(mainMusics.data)
  cutAlbumAndTitle(mainMusics.data)
  dispatchMusics(mainMusics.data);
}