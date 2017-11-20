$(document).ready(() => {
  $('.instrument').on('click', 'button', function() {
    let audio = '#'
     audio +=  $(this)['context']['innerText'];
    audio += 'Audio';
    $(audio)[0].load();
    $(audio)[0].play();
  });
  $('body').keydown((event) => {
    let audio = '#' + event.key + 'Audio';
    $(audio)[0].load();
    $(audio)[0].play();
  });
});
