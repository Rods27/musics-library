import { useState } from 'react';

function useListenAudio() {
  const [preview, setPreview] = useState<any[]>([]);

  function listenAudio(id: any) {
    const audioElement = document.getElementById(`${id}`) as HTMLAudioElement;
    const play = document.querySelector(`.play-${id}`) as HTMLElement;
    const previewList = preview;
    if (preview.includes(id)) {
      audioElement.pause();
      const index = preview.indexOf(id);
      previewList.splice(index, 1);
      setPreview(previewList);
      play.style.color = '#0fa36b';
    } else {
      audioElement.play();
      audioElement.volume = 0.3;
      play.style.color = 'crimson';
      previewList.push(id);
      setPreview(previewList);
      setTimeout(() => {
        const index = previewList.indexOf(id);
        previewList.splice(index, 1);
        setPreview(previewList);
        play.style.color = '#0fa36b';
      }, 30000);
    }
  }

  return [preview, listenAudio];
}

export default useListenAudio;
