$(document).ready(function ()
 {
   //Invoco la funzione per attivare il carosello
   $('.next').click(
    function() {
      nextStep()
    })

    $('.prev').click(
     function() {
       nextStep()
     })

     $('.nav i').click(
      function() {
        var indice = $(this).index();
        mostraImmagineSelezionata(indice);
      })
 });

 // ABBELLISCO LO SLIDER
 // All'hover del mouse le frecce si colorano di blu
 $('.prev').mouseenter(
   function() {
     $('.prev').addClass('blue')
   }
 );

 $('.next').mouseenter(
   function() {
     $('.next').addClass('blue')
   }
 );

 // Senza l'hover del mouse le frecce tornano di colore grigio
 $('.prev').mouseleave(
   function() {
     $('.prev').removeClass('blue')
   }
 );

 $('.next').mouseleave(
   function() {
     $('.next').removeClass('blue')
   }
 );

// **********FUNZIONI**********
// Scrivo una funzione per passare all'immagine/cerchietto successivo
function nextStep() {
  var immagineCorrente = $('.images img.active');
  immagineCorrente.removeClass('active');

  var cerchioCorrente = $('.nav i.active');
  cerchioCorrente.removeClass('active');

  if (immagineCorrente.hasClass('last')) {
    $('.images img.first').addClass('active')
  } else {
    immagineCorrente.next().addClass('active')
  }

  if (cerchioCorrente.hasClass('last')) {
    $('.nav i.first').addClass('active')
  } else {
    cerchioCorrente.next().addClass('active')
  }
};

function mostraImmagineSelezionata(indice) {
  $('.images img.active').removeClass('active');
  $('.nav i.active').removeClass('active');

  $('.images img').eq(indice).addClass('active');
  $('.nav i').eq(indice).addClass('active');
}
