$(document).ready(() => {
// C
  $('.c').on('click', () => {
    $('#cAudio')[0].load();
    $('#cAudio')[0].play();
  });

  $('body').keydown((event) => {
    if (event.keyCode === 67) {
      $('#cAudio').removeClass();
      $('#cAudio')[0].load();
      $('#cAudio')[0].play();
    }
  });

// D
  $('.d').on('click', () => {
    $('#dAudio')[0].load();
    $('#dAudio')[0].play();
  });

  $('body').keydown((event) => {
    if (event.keyCode === 68) {
      $('#dAudio').removeClass();
      $('#dAudio')[0].load();
      $('#dAudio')[0].play();
    }
  });


// E
  $('.e').on('click', () => {
    $('#eAudio')[0].load();
    $('#eAudio')[0].play();
  });

  $('body').keydown((event) => {
    if (event.keyCode === 69) {
      $('#eAudio').removeClass();
      $('#eAudio')[0].load();
      $('#eAudio')[0].play();
    }
  });

// F
  $('.f').on('click', () => {
    $('#fAudio')[0].load();
    $('#fAudio')[0].play();
  });

  $('body').keydown((event) => {
    if (event.keyCode === 70) {
      $('#fAudio').removeClass();
      $('#fAudio')[0].load();
      $('#fAudio')[0].play();
    }
  });

// G
  $('.g').on('click', () => {
    $('#gAudio')[0].load();
    $('#gAudio')[0].play();
  });

  $('body').keydown((event) => {
    if (event.keyCode === 71) {
      $('#gAudio').removeClass();
      $('#gAudio')[0].load();
      $('#gAudio')[0].play();
    }
  });

// A
  $('.a').on('click', () => {
    $('#aAudio')[0].load();
    $('#aAudio')[0].play();
  });

  $('body').keydown((event) => {
    if (event.keyCode === 65) {
      $('#aAudio').removeClass();
      $('#aAudio')[0].load();
      $('#aAudio')[0].play();
    }
  });

// B
  $('.b').on('click', () => {
    $('#bAudio')[0].load();
    $('#bAudio')[0].play();
  });

  $('body').keydown((event) => {
    if (event.keyCode === 66) {
      $('#bAudio').removeClass();
      $('#bAudio')[0].load();
      $('#bAudio')[0].play();
    }
  });
});
