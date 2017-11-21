$(document).ready(() => {
  $(window).on('keydown', (e) => {
    const letter = String.fromCharCode([e.which]).toLowerCase();
    const sound = $('#' + letter + 'Audio')[0];
    sound.load();
    sound.play();
  });
});
