$(document).ready(function ()
 {
   // Al click sulla freccia tolgo la classe active dall'immagine corrente e la metto sull'immagine successiva,
   // e tolgo la classe active dal cerchietto corrente e la metto sul cerchietto successivo
   $('.next').click(
    function() {
      nextStep()
    })
 });

// **********FUNZIONI**********
function nextStep() {
  var immagineCorrente = $('.images img.active');
  immagineCorrente.removeClass('active');

  var cerchioCorrente = $('.fa-circle.active');
  cerchioCorrente.removeClass('active');

  if (immagineCorrente.hasClass('last')) {
    $('.images img.first').addClass('active')
  } else {
    immagineCorrente.next().addClass('active')
  }

  if (cerchioCorrente.hasClass('last')) {
    $('.fas.fa-circle.first').addClass('active')
  } else {
    cerchioCorrente.next().addClass('active')
  }
}
