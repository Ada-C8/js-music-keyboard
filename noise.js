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
    if (['z', 'x', 'c', 'v', 'b', 'n', 'm'].includes(e.key)) {
      let note = ((note) => {
        switch (note) {
          case 'z':
            return 'c';
            break;
          case 'x':
            return 'd';
            break;
          case 'c':
            return 'e';
            break;
          case 'v':
            return 'f';
            break;
          case 'b':
            return 'g';
            break;
          case 'n':
            return 'a';
            break;
          case 'm':
            return 'b';
            break;
        }
      })(e.key);
      let key = $('.note.' + note)
      key.toggleClass('active');
      playNote(note);
    }
  });

  $('body').keyup(() => {
    $('.note').removeClass('active');
  });
});
