import { useCallback, useState, useEffect } from 'react';

export const useListenAudio = (
  audioRefs: React.RefObject<{ [key: string]: HTMLAudioElement | null }>,
) => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const handlePlayPause = useCallback(
    (id: string) => {
      const audioRef = audioRefs.current[id];

      if (!audioRef) return;

      if (playingId === id) {
        audioRef.pause();
        setPlayingId(null);
      } else {
        if (playingId && audioRefs.current[playingId]) {
          audioRefs.current[playingId]?.pause();
        }
        audioRef.play();
        setPlayingId(id);
      }
    },
    [audioRefs, playingId],
  );

  const setAudioRef = useCallback(
    (id: string) => (element: HTMLAudioElement | null) => {
      audioRefs.current[id] = element;
    },
    [audioRefs],
  );

  useEffect(() => {
    const elements = Object.entries(audioRefs.current);

    elements.forEach(([id, element]) => {
      if (element) {
        const handleEnded = () => {
          if (playingId === id) {
            setPlayingId(null);
          }
        };

        element.addEventListener('ended', handleEnded);

        return () => {
          element.removeEventListener('ended', handleEnded);
        };
      }
    });
  }, [playingId, audioRefs]);

  return { handlePlayPause, setAudioRef, playingId };
};
