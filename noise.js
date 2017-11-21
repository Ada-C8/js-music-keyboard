$(document).ready(() => {
  const notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  const play = (letter) => {
    const note = `#${letter}Audio`;
    $(note).get(0).load();
    $(note).get(0).play();
  };

  $('.note, body').on('click keydown', function player(event) {
    if (event.type === 'click') {
      play($(this).html());
    } else if (event.type === 'keydown' && notes.includes(event.key)) {
      play(event.key);
    }
  });
});
