import type { IMusics } from '@src/interfaces/musics';

export default function cutAlbumAndTitle(musics: IMusics[]) {
  musics.forEach((elem) => {
    const music = elem.title;
    const album = elem.album.title;
    if (music.length > 30) {
      const newStr = elem.title.substr(0, 30).concat('...');
      elem.title = newStr;
    }
    if (album.length > 30) {
      const newStr = elem.album.title.substr(0, 30).concat('...');
      elem.album.title = newStr;
    }
  });
}
