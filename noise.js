/*eslint-disable*/
$(document).ready( function() {
  $('.c').click( function() {
    const classString = $(this).attr('class');
    const letter = classString.charAt(classString.length - 1);
    let sound = document.getElementById(`${letter}Audio`);
    sound.play();
  })
});
