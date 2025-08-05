import type { IMusics } from '@src/interfaces/musics';

export default function secondsToMinutes(musics: IMusics[]) {
  musics.forEach((elem) => {
    if (typeof elem.duration === 'string') return;
    const seconds = Number(elem.duration);
    const min = Math.floor((seconds % 3600) / 60);
    const sec = Math.floor((seconds % 3600) % 60);
    let newSec = '';
    newSec = sec < 10 ? '0' : '';
    elem.duration = `${min}:${newSec}${sec}`;
  });
}
