$(document).ready( function() {
  // your code here
  let playNote = function(note) {
    let id = '#' + note + 'Audio';
    $(id).get(0).load();
    $(id).get(0).play();
  };

  $('.note').click(function () {
    playNote($(this).html());
  });

  let notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
  $('body').keydown(function (event) {
    if (notes.includes(event.key)) {
      playNote(event.key);
    }
  });
});
