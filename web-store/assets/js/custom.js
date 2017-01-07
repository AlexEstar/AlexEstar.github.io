var $ = jQuery.noConflict();

$(document).ready(function(){
	$("#owl-demo").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      navigationText: ["<img src='assets/img/slider-left.png'>","<img src='assets/img/slider-right.png'>"]
    });
});

