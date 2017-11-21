$(document).ready( function() {
  $('.instrument').on('click', '.note', function(event) {
      $(`#${$(this).html()}Audio`)[0].load();
      $(`#${$(this).html()}Audio`)[0].play();
  });


  $('body').keydown( function(e) {
    let codes = [67, 68, 69, 70, 71, 65, 66];
    let thisCode = e.keyCode;
    if ( codes.includes(thisCode)){
      let letter = String.fromCharCode(e.keyCode);
      letter = letter.toLowerCase();
      $(`#${letter}Audio`)[0].load();
      $(`#${letter}Audio`)[0].play();
    }
  });

});
