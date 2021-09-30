export default function listenAudio(id, preview, setPreview) {
  let audioElement = document.getElementById(`${id}`);
  const play = document.querySelector(`.play-${id}`)
  if(preview.includes(id)) {
    audioElement.pause();
    const index = preview.indexOf(id)
    preview.splice(index, 1)
    setPreview(preview)
    play.style.color = '#0fa36b'
  } else {
    audioElement.play();
    audioElement.volume = 0.3
    play.style.color = 'crimson'
    preview.push(id)
    setPreview(preview);
    setTimeout(() => {
      const index = preview.indexOf(id)
      preview.splice(index, 1)
      setPreview(preview);
      play.style.color = '#0fa36b'
    }, 30000);
  }
}