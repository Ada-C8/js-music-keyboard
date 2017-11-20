$(document).ready( function() {
  $('.instrument').on('click', '.note', function(e) {
    let note = e.target.classList[1];
    let audio = getAudio(note);
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    }
  });

  const getAudio = function getAudio(note) {
    let id = note + 'Audio';
    let audio = document.getElementById(id);
    return audio;
  };
});
