$(document).ready( function() {
  const getAudio = function getAudio(note) {
    let id = note + 'Audio';
    let audio = document.getElementById(id);
    return audio;
  };

  const playNote = function playNote(note) {
    let audio = getAudio(note);
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    }
  };

  $('.instrument').on('click', '.note', function(e) {
    let note = e.target.classList[1];
    playNote(note);
  });

  $('body').keydown((e) => {
    switch (e.key) {
      case 'z':
        playNote('c');
        break;
      case 'x':
        playNote('d');
        break;
      case 'c':
        playNote('e');
        break;
      case 'v':
        playNote('f');
        break;
      case 'b':
        playNote('g');
        break;
      case 'n':
        playNote('a');
        break;
      case 'm':
        playNote('b');
        break;
    }
  });
});
