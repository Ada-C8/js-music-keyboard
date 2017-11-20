$(document).ready(() => {
  $(window).on('keydown', (e) => {
    const letter = String.fromCharCode([e.which]).toLowerCase();
    const sound = document.getElementById(`${letter}Audio`);
    sound.play();
  });
});
