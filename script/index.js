$(document).ready(function() {
	$(window).scroll(function(){
		$('.scroll').each(function(i){
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){               
                $(this).addClass('slidein');                 
            }
		});
	});

	var options = [
		{selector: '#articles-list', offset: 300, callback: function(el) {
	        	Materialize.showStaggeredList($(el));
	    	}
	    }
	];
	Materialize.scrollFire(options);

	$("a[href*='#']").on("click", function() {
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
});