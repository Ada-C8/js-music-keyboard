$(document).ready(() => {
  $('.instrument').on('click', 'button', function() {
    if (($(this)['context']['innerText']) === 'Suprise me') {
      const Tags = ['aa', 'bb', 'cc']
      const Tag = Tags[Math.floor(Math.random() * Tags.length)];
      const Audio = '#' + Tag + 'Audio';
      $('audio').each(function() {
        console.log($(this)[0]);
        $(this)[0].pause();
      });

      $(Audio)[0].load();
      $(Audio)[0].play();
    } else {
      const Tag = $(this)['context']['innerText'];
      const Audio = '#' + Tag + 'Audio';
      $('audio').each(function() {
        console.log($(this)[0]);
        $(this)[0].pause();
      });
      $(Audio)[0].load();
      $(Audio)[0].play();
    }
  });
  $('body').keydown((event) => {
    const PlayedKey = event.key;
    if (PlayedKey === ' ') {
      const Tags = ['aa', 'bb', 'cc']
      const Tag = Tags[Math.floor(Math.random() * Tags.length)];
      const Audio = '#' + Tag + 'Audio';
      $('audio').each(function() {
        console.log($(this)[0]);
        $(this)[0].pause();
      });
      $(Audio)[0].load();
      $(Audio)[0].play();
    } else {
      const audio = '#' + PlayedKey + 'Audio';
      $('audio').each(function() {
        console.log($(this)[0]);
        $(this)[0].pause();
      });
      $(audio)[0].load();
      $(audio)[0].play();
    }
  });
});

const RandomPlay = function RandomPlay() {

}
