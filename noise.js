/* eslint-disable */
const makeNote = function makeNote(n) {
  return $(`.${n}`).on('click', function() {
    console.log(n);
    $(`#${n}Audio`).get(0).play();
  });
}

const playNote = function playNote(n) {
  const note = $(`#${n}Audio`).get(0);

  $('body').on("keydown", function(event) {
    if (event.key === n) {
      console.log(n);
      note.play();
    }
  });
  $('body').on("keyup", function(event) {
    if (event.key === n) {
      console.log(n);
      note.pause();
      note.currentTime = 0;
    }
  });
}



$(document).ready(function() {
  const playC = makeNote('c');
  const playD = makeNote('d');
  const playE = makeNote('e');
  const playF = makeNote('f');
  const playG = makeNote('g');
  const playA = makeNote('a');
  const playB = makeNote('b');

  const playCkey = playNote('c');
  const playDkey = playNote('d');
  const playEkey = playNote('e');
  const playFkey = playNote('f');
  const playGkey = playNote('g');
  const playAkey = playNote('a');
  const playBkey = playNote('b');


})
