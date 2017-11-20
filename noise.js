/* eslint-disable */
const makeNote = function makeNote(n) {
  return $(`.${n}`).on('click', function() {
    console.log(n);
    $(`#${n}Audio`).get(0).play();
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




})
