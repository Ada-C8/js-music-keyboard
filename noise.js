function play(event) {
  var note = $(this).attr("id");
  document.getElementById(note + "Audio").play();
}

$(document).ready( function() {
  $("body").keydown(function(event) {
    var key = document.getElementById(event.key + "Audio");
    if (key){
      key.load();
      key.play();
    }
  });

  $('.instrument').on('click', 'button', function(event) {
   var note = $(this).html();
   var audio = document.getElementById(note + "Audio");

   audio.load();
   audio.play();
 });

});
