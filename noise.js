//* eslint-disable */

$(document).ready(() => {
  const notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  const play = (sound) => {
    const note = `#${sound}Audio`;
    $(note).get(0).load();
    $(note).get(0).play();
  };

  $('.note').click(function click() {
    play($(this).html());
  });

  $('body').keydown((event) => {
    if (notes.includes(event.key)) {
      play(event.key);
    }
  });
});
