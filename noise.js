$(document).ready( function() {
  $('.instrument button').click(function(event) {
    let selector = $(this).html() + 'Audio';
    let audio = document.getElementById(selector);
    audio.load();
    audio.play();
  });

  $('body').keydown(function(event) {
    let selector = event.key + 'Audio';
    let audio = document.getElementById(selector);
      audio.load();
      audio.play();
  });
});
