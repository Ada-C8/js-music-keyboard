$(document).ready(() => {
  $('.instrument').on('click', 'button', function() {
    let audio = $(this)['context']['innerText'];
    audio += 'Audio';
    document.getElementById(audio).play();
  });
  $('body').keydown((event) => {
    let audio = event.key;
    audio += 'Audio';
    document.getElementById(audio).play();
  });
});
