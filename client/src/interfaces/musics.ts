export interface IMusics {
  id: number;
  title: string;
  name: string;
  duration: string;
  preview: string;
  album: {
    title: string;
    cover_medium: string;
  };
  artist: {
    name: string;
    link: string;
  };
}
