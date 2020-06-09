$(document).ready(function ()
 {
   //Invoco la funzione per attivare il carosello
   $('.next').click(
    function() {
      nextStep()
    })
 });

 // ABBELLISCO LO SLIDER
 // All'hover del mouse le frecce si colorano di blu
 $('.fa-angle-left').mouseenter(
   function() {
     $('.fa-angle-left').addClass('blue')
   }
 );

 $('.fa-angle-right').mouseenter(
   function() {
     $('.fa-angle-right').addClass('blue')
   }
 );

 // Senza l'hover del mouse le frecce tornano di colore grigio
 $('.fa-angle-left').mouseleave(
   function() {
     $('.fa-angle-left').removeClass('blue')
   }
 );

 $('.fa-angle-right').mouseleave(
   function() {
     $('.fa-angle-right').removeClass('blue')
   }
 );

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
