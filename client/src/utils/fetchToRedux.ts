import { useMusicsStore } from '@src/store/modules';

import getFromDeezer from '../services/getFromDeezer';
import { useMusicStoreTemp } from '../store';
import cutAlbumAndTitle from './cutAlbumAndTitle';
import secondsToMinutes from './secondsToMinutes';

export async function fetchGenresToZustand() {
  const setGenres = useMusicStoreTemp.getState().setGenres;
  const genres = await getFromDeezer('https://api.deezer.com/editorial?limit=28');
  const newArray = genres.data.filter((elem: any) => {
    return elem.name !== 'All' && elem.name !== 'Todos';
  });
  setGenres(newArray);
}

export async function fetchMusicsToZustand() {
  const setMainMusics = useMusicsStore.getState().setMainMusics;
  const setFavorites = useMusicStoreTemp.getState().setFavorites;

  if (!localStorage.thumbs) localStorage.setItem('thumbs', JSON.stringify([]));
  if (!localStorage.favorites) localStorage.setItem('favorites', JSON.stringify([]));
  const mainMusics = await getFromDeezer(
    'https://api.deezer.com/playlist/3155776842/tracks&limit=50',
  );
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  setFavorites(favorites);
  secondsToMinutes(mainMusics.data);
  cutAlbumAndTitle(mainMusics.data);
  setMainMusics(mainMusics.data);
}
