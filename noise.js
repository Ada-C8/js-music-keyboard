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
      note.load();
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
  player.load();
  player.play();
  $(`#${n}Audio`).bind('timeupdate', function () {
    console.log(time);
    console.log(this.currentTime);
    if (this.currentTime >= (time)) {
      this.pause();
      // this.currentTime = 0;
    }
  });
}

const delay = function delay(n) {
  return (n*1000+10);
}

const quarter = 0.75;
const eighth = 0.4;
const quarterP = 1;
const double = 1.5;
const whole = 1.75;

const song = [
  ['c', quarterP],
  ['d', eighth],
  ['e', quarterP],
  ['c', eighth],
  ['e', quarter],
  ['c', quarter],
  ['e', double],
  ['d', quarterP],
  ['e', eighth],
  ['f', eighth],
  ['f', eighth],
  ['e', eighth],
  ['d', eighth],
  ['f', whole],
  ['e', quarterP],
  ['f', eighth],
  ['g', quarterP],
  ['e', eighth],
  ['g', quarter],
  ['e', quarter],
  ['g', double],
  ['f', quarterP],
  ['g', eighth],
  ['a', eighth],
  ['a', eighth],
  ['g', eighth],
  ['f', eighth],
  ['a', whole],

  ['g', quarterP],
  ['c', eighth],
  ['d', eighth],
  ['e', eighth],
  ['f', eighth],
  ['g', eighth],
  ['a', quarterP],
  ['a', quarterP],
  ['d', eighth],
  ['e', eighth],
  ['f', eighth],
  ['g', eighth],
  ['a', eighth],
  ['b', quarterP],

  ['b', quarterP],
  ['e', eighth],
  ['f', eighth],
  ['g', eighth],
  ['a', eighth],
  ['b', eighth],
  ['b', quarterP],

  ['b', eighth],
  ['b', eighth],
  ['a', quarter],
  ['f', quarter],
  ['b', quarter],
  ['g', quarter],
  ['b', quarter],
  ['g', quarter],
  ['e', quarter],
  ['d', quarter],
  ['c', double],
];

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


  let start = 0;

  setTimeout(function () {playNoteForSong(song[0][0], song[0][1])}, delay(start));
  start += song[0][1];
  setTimeout(function () {playNoteForSong(song[1][0], song[1][1])}, delay(start));
  start += song[1][1];
  setTimeout(function () {playNoteForSong(song[2][0], song[2][1])}, delay(start));
  start += song[2][1];
  setTimeout(function () {playNoteForSong(song[3][0], song[3][1])}, delay(start));
  start += song[3][1];
  setTimeout(function () {playNoteForSong(song[4][0], song[4][1])}, delay(start));
  start += song[4][1];
  setTimeout(function () {playNoteForSong(song[5][0], song[5][1])}, delay(start));
  start += song[5][1];
  setTimeout(function () {playNoteForSong(song[6][0], song[6][1])}, delay(start));
  start += song[6][1];
  setTimeout(function () {playNoteForSong(song[7][0], song[7][1])}, delay(start));
  start += song[7][1];
  setTimeout(function () {playNoteForSong(song[8][0], song[8][1])}, delay(start));
  start += song[8][1];
  setTimeout(function () {playNoteForSong(song[9][0], song[9][1])}, delay(start));
  start += song[9][1];
  setTimeout(function () {playNoteForSong(song[10][0], song[10][1])}, delay(start));
  start += song[10][1];
  setTimeout(function () {playNoteForSong(song[11][0], song[11][1])}, delay(start));
  start += song[11][1];
  setTimeout(function () {playNoteForSong(song[12][0], song[12][1])}, delay(start));
  start += song[12][1];
  setTimeout(function () {playNoteForSong(song[13][0], song[13][1])}, delay(start));
  start += song[13][1];

  setTimeout(function () {playNoteForSong(song[14+0][0], song[14+0][1])}, delay(start));
  start += song[14+0][1];
  setTimeout(function () {playNoteForSong(song[14+1][0], song[14+1][1])}, delay(start));
  start += song[14+1][1];
  setTimeout(function () {playNoteForSong(song[14+2][0], song[14+2][1])}, delay(start));
  start += song[14+2][1];
  setTimeout(function () {playNoteForSong(song[14+3][0], song[14+3][1])}, delay(start));
  start += song[14+3][1];
  setTimeout(function () {playNoteForSong(song[14+4][0], song[14+4][1])}, delay(start));
  start += song[14+4][1];
  setTimeout(function () {playNoteForSong(song[14+5][0], song[14+5][1])}, delay(start));
  start += song[14+5][1];
  setTimeout(function () {playNoteForSong(song[14+6][0], song[14+6][1])}, delay(start));
  start += song[14+6][1];
  setTimeout(function () {playNoteForSong(song[14+7][0], song[14+7][1])}, delay(start));
  start += song[14+7][1];
  setTimeout(function () {playNoteForSong(song[14+8][0], song[14+8][1])}, delay(start));
  start += song[14+8][1];
  setTimeout(function () {playNoteForSong(song[14+9][0], song[14+9][1])}, delay(start));
  start += song[14+9][1];
  setTimeout(function () {playNoteForSong(song[14+10][0], song[14+10][1])}, delay(start));
  start += song[14+10][1];
  setTimeout(function () {playNoteForSong(song[14+11][0], song[14+11][1])}, delay(start));
  start += song[14+11][1];
  setTimeout(function () {playNoteForSong(song[14+12][0], song[14+12][1])}, delay(start));
  start += song[14+12][1];
  setTimeout(function () {playNoteForSong(song[14+13][0], song[14+13][1])}, delay(start));
  start += song[14+13][1];

  setTimeout(function () {playNoteForSong(song[28+0][0], song[28+0][1])}, delay(start));
  start += song[28+0][1];
  setTimeout(function () {playNoteForSong(song[28+1][0], song[28+1][1])}, delay(start));
  start += song[28+1][1];
  setTimeout(function () {playNoteForSong(song[28+2][0], song[28+2][1])}, delay(start));
  start += song[28+2][1];
  setTimeout(function () {playNoteForSong(song[28+3][0], song[28+3][1])}, delay(start));
  start += song[28+3][1];
  setTimeout(function () {playNoteForSong(song[28+4][0], song[28+4][1])}, delay(start));
  start += song[28+4][1];
  setTimeout(function () {playNoteForSong(song[28+5][0], song[28+5][1])}, delay(start));
  start += song[28+5][1];
  setTimeout(function () {playNoteForSong(song[28+6][0], song[28+6][1])}, delay(start));
  start += song[28+6][1];
  setTimeout(function () {playNoteForSong(song[28+7][0], song[28+7][1])}, delay(start));
  start += song[28+7][1];
  setTimeout(function () {playNoteForSong(song[28+8][0], song[28+8][1])}, delay(start));
  start += song[28+8][1];
  setTimeout(function () {playNoteForSong(song[28+9][0], song[28+9][1])}, delay(start));
  start += song[28+9][1];
  setTimeout(function () {playNoteForSong(song[28+10][0], song[28+10][1])}, delay(start));
  start += song[28+10][1];
  setTimeout(function () {playNoteForSong(song[28+11][0], song[28+11][1])}, delay(start));
  start += song[28+11][1];
  setTimeout(function () {playNoteForSong(song[28+12][0], song[28+12][1])}, delay(start));
  start += song[28+12][1];
  setTimeout(function () {playNoteForSong(song[28+13][0], song[28+13][1])}, delay(start));
  start += song[28+13][1];

  setTimeout(function () {playNoteForSong(song[42+0][0], song[42+0][1])}, delay(start));
  start += song[42+0][1];
  setTimeout(function () {playNoteForSong(song[42+1][0], song[42+1][1])}, delay(start));
  start += song[42+1][1];
  setTimeout(function () {playNoteForSong(song[42+2][0], song[42+2][1])}, delay(start));
  start += song[42+2][1];
  setTimeout(function () {playNoteForSong(song[42+3][0], song[42+3][1])}, delay(start));
  start += song[42+3][1];
  setTimeout(function () {playNoteForSong(song[42+4][0], song[42+4][1])}, delay(start));
  start += song[42+4][1];
  setTimeout(function () {playNoteForSong(song[42+5][0], song[42+5][1])}, delay(start));
  start += song[42+5][1];
  setTimeout(function () {playNoteForSong(song[42+6][0], song[42+6][1])}, delay(start));
  start += song[42+6][1];
  setTimeout(function () {playNoteForSong(song[42+7][0], song[42+7][1])}, delay(start));
  start += song[42+7][1];
  setTimeout(function () {playNoteForSong(song[42+8][0], song[42+8][1])}, delay(start));
  start += song[42+8][1];
  setTimeout(function () {playNoteForSong(song[42+9][0], song[42+9][1])}, delay(start));
  start += song[42+9][1];
  setTimeout(function () {playNoteForSong(song[42+10][0], song[42+10][1])}, delay(start));
  start += song[42+10][1];
  setTimeout(function () {playNoteForSong(song[42+11][0], song[42+11][1])}, delay(start));
  start += song[42+11][1];
  setTimeout(function () {playNoteForSong(song[42+12][0], song[42+12][1])}, delay(start));
  start += song[42+12][1];
  setTimeout(function () {playNoteForSong(song[42+13][0], song[42+13][1])}, delay(start));
  start += song[42+13][1];

  setTimeout(function () {playNoteForSong(song[56][0], song[56][1])}, delay(start));
  start += song[56][1];
  setTimeout(function () {playNoteForSong(song[57][0], song[57][1])}, delay(start));
  start += song[57][1];
  setTimeout(function () {playNoteForSong(song[58][0], song[58][1])}, delay(start));
  start += song[58][1];
  setTimeout(function () {playNoteForSong(song[59][0], song[59][1])}, delay(start));
  start += song[59][1];
})
