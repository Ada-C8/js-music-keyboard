const StopAll = function StopAll() {
  $('audio').each(function () {
    $(this)[0].pause();
  });
};
const RandomPlay = function RandomPlay() {
  const Tags = ['aa', 'bb', 'cc'];
  const Tag = Tags[Math.floor(Math.random() * Tags.length)];
  const Audio = `#${Tag}Audio`;
  $(Audio)[0].load();
  $(Audio)[0].play();
};
const Play = function Play(what) {
  $(what)[0].load();
  $(what)[0].play();
};

$(document).ready(() => {
  $('.instrument').on('click', 'button', function () {
    if (($(this)['context']['innerText']) === 'Suprise me') {
      StopAll();
      RandomPlay();
    } else {
      const Letter = $(this)['context']['innerText'];
      const Audio = `#${Letter}Audio`;
      StopAll();
      Play(Audio);
    }
  });
  $('body').keydown((event) => {
    if (event.keyCode === 32) {
      event.preventDefault();
      StopAll();
      RandomPlay();
    } else {
      const Audio = `#${event.key}Audio`;
      StopAll();
      Play(Audio);
    }
  });
});
