$(document).ready(() => {
  const playNote = (tone) => {
    const note = $(`#${tone}Audio`).get(0);
    note.load();
    note.play();
  };

  $('.note').on('click', function playSound() {
    playNote($(this).html());
  });

  
});
