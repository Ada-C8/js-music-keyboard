$(document).ready(() => {

  $('.instrument').on('click', 'button', function click() {
    const note = $(this)[0].innerHTML;
    $(`#${note}Audio`)[0].load();
    $(`#${note}Audio`)[0].play();
  });
  
  $('body').keydown((event) => {
    const notePressed = `#${event.key}Audio`
    $(notePressed).get(0).load();
    $(notePressed).get(0).play();
  });
});


// refactored
    // $('body').keydown((event) => {
    //   if (event.keyCode === 67) {
    //     $('#cAudio')[0].load();
    //     $('#cAudio')[0].play();
    //   } else if (event.keyCode === 68) {
    //     $('#dAudio')[0].load();
    //     $('#dAudio')[0].play();
    //   } else if (event.keyCode === 69) {
    //     $('#eAudio')[0].load();
    //     $('#eAudio')[0].play();
    //   } else if (event.keyCode === 70) {
    //     $('#fAudio')[0].load();
    //     $('#fAudio')[0].play();
    //   } else if (event.keyCode === 71) {
    //     $('#gAudio')[0].load();
    //     $('#gAudio')[0].play();
    //   } else if (event.keyCode === 65) {
    //     $('#aAudio')[0].load();
    //     $('#aAudio')[0].play();
    //   } else if (event.keyCode === 66) {
    //     $('#bAudio')[0].load();
    //     $('#bAudio')[0].play();
    //   }
    // });
