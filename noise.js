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

const playNoteForSong = function play(n, time) {
  const player = $(`#${n}Audio`).get(0);
  player.play();
  $(`#${n}Audio`).bind('timeupdate', function () {
    console.log(time);
    console.log(this.currentTime);
    if (this.currentTime >= time) {
      this.pause();
      this.currentTime = 0;
    }
  });
}

const delay = function delay(n) {
  return n*1000;
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

  const quarter = 1.25;
  const eighth = 0.5;
  const quarterP = 1;
  const double = 2;
  const whole = 4;

  const song = [
    {c: quarterP},
    {d: eighth},
    {e: quarter},
    {c: eighth},
    {e: quarter},
    {c: quarter},
    {e: double},
    {d: quarterP},
    {e: eighth},
    {f: eighth},
    {f: eighth},
    {e: eighth},
    {d: eighth},
    {f: whole},
  ];

  let start = 0;
  setTimeout(function () {playNoteForSong('c', quarterP)}, delay(0));
  setTimeout(function () {playNoteForSong('d', eighth)}, delay(quarterP));

})
