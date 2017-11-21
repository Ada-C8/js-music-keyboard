$(document).ready(() => {

  const playNote = (noteID) => {
    const $note = $(`#${noteID}`);
    $note[0].load();
    $note[0].play();
    console.log(`${noteID[0]} note played`);
  };

  const $instrument = $('.instrument');
  const $body = $('body');

  $instrument.on('click', '.note', function click() {
    const noteID = `${this.innerHTML}Audio`;
    playNote(noteID);
  });


  $body.keydown((event) => {
    const noteID = `${String.fromCharCode(event.keyCode).toLowerCase()}Audio`;
    playNote(noteID);
  });
});
