$(document).ready(function() {

  $('button').click(function(){
    const button = $(this).html();
    const note = `#${button}Audio`;

    $(note).get(0).load();
    $(note).get(0).play();

  });
  $('body').keydown(function(event){
    const note = `#${event.key}Audio`;
    $(note).get(0).load();
    $(note).get(0).play();
  });
 });
