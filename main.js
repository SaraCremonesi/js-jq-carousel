$(document).ready(function ()
 {
   //Invoco la funzione per attivare il carosello
   $('.next').click(
    function() {
      nextStep()
    })
 });

// **********FUNZIONI**********
// Scrivo una funzione per passare all'immagine/cerchietto successivo
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
