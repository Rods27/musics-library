export default function thumbs(stateMusics, id, {dispatchFavorites, stateFavorites }){
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  const thumbs = JSON.parse(localStorage.getItem('thumbs'));
  const selected = stateMusics.filter((e) => e.id === id)[0];
  const isFavorite = stateFavorites.filter((e) => e.id === id);
  if (isFavorite && isFavorite.length < 1) {
    stateFavorites.push(selected);
    favorites.push(selected);
    thumbs.push(selected.id)
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('thumbs', JSON.stringify(thumbs));
    dispatchFavorites(stateFavorites)
  } else {
    const newStateFavorite = stateFavorites.filter((e) => e.id !== id);
    dispatchFavorites(newStateFavorite)
    const newFavorite = favorites.filter((e) => e.id !== id);
    localStorage.setItem('favorites', JSON.stringify(newFavorite));
    const newThumbs = thumbs.filter((e) => e !== id);
    localStorage.setItem('thumbs', JSON.stringify(newThumbs));
  }
}