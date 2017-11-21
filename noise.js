$(document).ready(() => {
  const play = (letter) => {
    const note = $(`#${letter}Audio`).get(0);
    note.load();
    note.play();
  };

  $('.note, body').on('click keydown', function player(event) {
    if (event.type === 'click') {
      play($(this).html());
    } else if (event.type === 'keydown' && event.keyCode > 64 && event.keyCode < 72) {
      play(event.key);
    }
  });
});
