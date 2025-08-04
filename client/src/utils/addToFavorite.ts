import { useMusicStoreTemp } from '../store';

export default function thumbs(stateMusics: any[], id: any) {
  const setFavorites = useMusicStoreTemp.getState().setFavorites;
  const stateFavorites = useMusicStoreTemp.getState().favorites;

  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const thumb = JSON.parse(localStorage.getItem('thumbs') || '[]');
  const selected = stateMusics.filter((e) => e.id === id)[0];
  const isFavorite = stateFavorites.filter((e) => e.id === id);

  if (isFavorite && isFavorite.length < 1) {
    const newFavorites = [...stateFavorites, selected];
    const newLocalFavorites = [...favorites, selected];
    const newThumbs = [...thumb, selected.id];

    localStorage.setItem('favorites', JSON.stringify(newLocalFavorites));
    localStorage.setItem('thumb', JSON.stringify(newThumbs));
    setFavorites(newFavorites);
  } else {
    const newStateFavorite = stateFavorites.filter((e) => e.id !== id);
    const newFavorite = favorites.filter((e) => e.id !== id);
    const newThumbs = thumb.filter((e) => e !== id);

    setFavorites(newStateFavorite);
    localStorage.setItem('favorites', JSON.stringify(newFavorite));
    localStorage.setItem('thumb', JSON.stringify(newThumbs));
  }
}
