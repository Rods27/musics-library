import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import type { IGenre } from '@src/interfaces/genre';
import type { IMusics } from '@src/interfaces/musics';
import getFromDeezer from '@src/services/getFromDeezer';
import { useMusicsStore } from '@src/store/modules';
import { useGenresStore } from '@src/store/modules/genres';
import cutAlbumAndTitle from '@src/utils/cutAlbumAndTitle';
import secondsToMinutes from '@src/utils/secondsToMinutes';

export const useInitialFetch = (search: string) => {
  const setGenres = useGenresStore((state) => state.setGenres);
  const setMainMusics = useMusicsStore((state) => state.setMainMusics);

  const fetchGenresToZustand = async () => {
    return getFromDeezer('https://api.deezer.com/editorial?limit=28');
  };

  const fetchMusicsToZustand = async () => {
    return getFromDeezer('https://api.deezer.com/playlist/3155776842/tracks&limit=50');
  };

  const { data: genresQuery } = useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenresToZustand,
    select: ({ data }: { data: IGenre[] }) => {
      return data.filter((elem: IGenre) => {
        return elem.name !== 'All' && elem.name !== 'Todos';
      });
    },
    gcTime: 900,
    staleTime: 1800,
    retry: false,
  });

  const { data: musicsQuery } = useQuery({
    queryKey: ['musics'],
    queryFn: fetchMusicsToZustand,
    select: ({ data }: { data: IMusics[] }) => {
      secondsToMinutes(data);
      cutAlbumAndTitle(data);
      return data;
    },
    enabled: !search,
    retry: false,
  });

  useEffect(() => {
    if (genresQuery) setGenres(genresQuery);
  }, [genresQuery, setGenres]);

  useEffect(() => {
    if (musicsQuery) {
      setMainMusics(musicsQuery);
    }
  }, [musicsQuery, setMainMusics]);
};
