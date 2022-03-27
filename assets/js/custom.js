jQuery(document).ready(function(){ 

	// Home owlCarousel
	jQuery('.blog_slider').owlCarousel({
		loop:true,
		margin:25,
		nav:true,
		autoplay:false,
		navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		dots:false,
		responsive:{
			0:{
				items:1,
			},
			576:{
				items:2,
			
			},
			768:{
				items:2,
			},
			1200:{
				items:3,
			}
		}
	});

	// IsoTope
	// init Isotope
	var $grid = $('.grid').isotope({
		itemSelector: '.element-item',
		layoutMode: 'fitRows',
		getSortData: {
		  name: '.name',
		  symbol: '.symbol',
		  number: '.number parseInt',
		  category: '[data-category]',
		  weight: function( itemElem ) {
			var weight = $( itemElem ).find('.weight').text();
			return parseFloat( weight.replace( /[\(\)]/g, '') );
		  }
		}
	});
  
	// filter functions
	var filterFns = {
		// show if number is greater than 50
		numberGreaterThan50: function() {
		  var number = $(this).find('.number').text();
		  return parseInt( number, 10 ) > 50;
		},
		// show if name ends with -ium
		ium: function() {
		  var name = $(this).find('.name').text();
		  return name.match( /ium$/ );
		}
	};
  
	// bind filter button click
	$('#filters').on( 'click', 'button', function() {
		var filterValue = $( this ).attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[ filterValue ] || filterValue;
		$grid.isotope({ filter: filterValue });
	});
   
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
		  $buttonGroup.find('.is-checked').removeClass('is-checked');
		  $( this ).addClass('is-checked');
		});
	});


	// Select js 
	 // Variable of content  

	 var myylist = $("#list");
	 var myselect = $(".select");
   
   
	 // Show/hide function  
   
	 myselect.on('click', function(){
	 myylist.toggle();});
   
   for(var i = 0; i < 7; i++ ) {  
	   if(i == 0) {
		  $('#list #iq').on('click', function(){
			 $("#select img").attr("src",$('#iq img').attr('src'));
			 $("#select span");
			 $("#select span").text($(this).text());
			 $("#list").hide();
		  });
	   } else if (i == 1) {
		$('#list #eg').on('click', function(){
			 $("#select img").attr("src",$('#eg img').attr('src'));
			 $("#select span");
			 $("#select span").text($(this).text());
			 $("#list").hide();
		  });
	   } else if (i == 2) {
		 $('#list #ir').on('click', function(){
			 $("#select img").attr("src",$('#ir img').attr('src'));
			 $("#select span");
			 $("#select span").text($(this).text());
			 $("#list").hide();
		  });
	   } else if (i == 3) {
		$('#list #sy').on('click', function(){
			 $("#select img").attr("src",$('#sy img').attr('src'));
			 $("#select span");
			 $("#select span").text($(this).text());
			 $("#list").hide();
		  });
	   } else if (i == 4) {
		 $('#list #qa').on('click', function(){
			 $("#select img").attr("src",$('#qa img').attr('src'));
			 $("#select span");
			 $("#select span").text($(this).text());
			 $("#list").hide();
		  });
	   } else if (i == 5) {
		 $('#list #tu').on('click', function(){
			 $("#select img").attr("src",$('#tu img').attr('src'));
			 $("#select span");
			 $("#select span").text($(this).text());
			 $("#list").hide();
		  });
	   } else if (i == 6) {
		 $('#list #dz').on('click', function(){
			 $("#select img").attr("src",$('#dz img').attr('src'));
			 $("#select span");
			 $("#select span").text($(this).text());
			 $("#list").hide();
		  });
	   }
	   
   
   }
   
   });
   
   // JavaScript 
   // close list when click on anywhere
   window.addEventListener('mouseup', function(event){
   var ullist = document.getElementById('list');
   if(event.target != ullist && event.target.parentNode != ullist) {
	 ullist.style.display = 'none';
   }
   //Dropdown menu 

   jQuery('.country_dropdown').click(function () {
	jQuery('.country_dropdown span').toggleClass('active_arrow');
		return false;
	});
	jQuery('.country_dropdown ul li').click(function () {
		jQuery('.country_dropdown span').removeClass('active_arrow');
		return false;
			
	});

	

		
		
	

});