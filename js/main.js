$(document).ready(function() {
$('.fancybox').fancybox();


var $grid = $(".grid").isotope({
       itemSelector: '.grid-item',
       masonry: {
         columnWidth: '.grid-sizer',
         itemSelector: '.grid-item',
         gutter: 10,
         fitWidth : true
       }
   });

 $("#grid div.col-md-3").mouseenter(function(){

   $(this).find('img').next().find('p').html(
     $(this).find('img').attr('alt'));
 });




 // input search
 $('input#search').keyup( function(){
   var termSearch = $(this).val();
   // si le champ de recherche est vide, affiche tout
   if (termSearch === "") {
 	  $grid.isotope({ filter: '*' })
   }

   // sinon, filtre les photos qui contiennent le terme recherché
   else {
     $grid.isotope({ filter: function() {
      // on utilise isotope pour filtrer les alt des images
  		var alt = $(this).find('img').attr('alt'); // array

      //parcour tous les alt
      for (var i = 0; i < alt.length; i++) {
        var altLow = alt.toLowerCase();

        // si un match est trouvé, on arrête la boucle for et on retourne l'alt
        if (altLow.substr(i, termSearch.length) === termSearch.toLowerCase()) {
          return alt;

        }
      }
		}})
   }
 });

$("#grid a").hover(

  function(){
    // $(this).css("opacity", "0.6");
    $(this).find('img').addClass('shake');
    $(this).stop( true, true ).animate({
      opacity: 0.6,

    }, 500);

    // $(this).stop( true, true ).fadeTo( "slow" , 0.5);
    $("h1").text($(this).find('img').attr("alt"))
  },
  function() {
      // $(this).css("opacity", "1");
      //$(this).stop( true, true ).fadeTo( "slow" , 1);7
      $(this).find('img').removeClass('shake');

      $(this).stop( true, true ).animate({
        opacity: 1
      }, 500);

      $("h1").text("Gallerie");
    });

});
