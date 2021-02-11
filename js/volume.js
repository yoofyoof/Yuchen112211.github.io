var vid = document.getElementsByClassName("audio");

function setAndPlay() {
  let audioElement = vid[0];
  audioElement.volume = 0.1;
  if (!audioElement.isPlaying) {
    audioElement.play();
  }
}

setAndPlay();
