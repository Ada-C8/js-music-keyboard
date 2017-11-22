$(document).ready(() => {
  const playNote = (tone) => {
    const note = $(`#${tone}Audio`).get(0);
    note.load();
    note.play();
  };

  $('.note').on('click', function playSound() {
    playNote($(this).html());
  });

  $('body').on('keydown', (event) => {
    const note = document.getElementById(`${event.key}Audio`);
    if (note) {
      playNote(event.key);
    }
  });
});
