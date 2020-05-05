$(function() {
	let servOption = $('.serv--option');
	let servImage = $('.serv__image');
	let servSpan = $('serv--option--span');
	let servImageOption = $('.serv__image--option');
	let servImageDefault = $('.serv__image--no-option')
	let servImageArray = [
	'img/serv-options/parts-replacing.jpg',
	'img/serv-options/parts-renovation.jpg',
	'img/serv-options/chassis-work.jpg',
	'img/serv-options/vulcanization.jpg',
	'img/serv-options/servicing.jpg',
	'img/serv-options/computer-testing.jpg',
	'img/serv-options/everythingelse.jpg'
	];

	servOption.hover(function() {
		$(this).css({'background-color' : '#eabd2b',
					 'color' : '#323232'});
		servImage.css({'backgroundImage': 'url('+servImageArray[($(this).index())]+')'}).animate(300);
		servImageDefault.css({opacity: 0});
		servImageOption.eq($(this).index()).animate({opacity: 1}, 200);

	}, function() {
		$(this).css({'background-color' : '#323232', 
					 'color' : '#eabd2b'});
		servImage.css({backgroundImage: ''});
		servImageOption.eq($(this).index()).animate({opacity: 0}, 200);
		servImageDefault.css({opacity: 1});
	});
    
    // SCROL SMOOTH
    if($(window).scrollTop() >= 50) {
         $('#main-nav').addClass('scroll')
    }
    
    $(window).scroll(function() {
        if($(window).scrollTop() >= 50) {
            $('#main-nav').addClass('scroll');
            $('#main-nav').css({"transition": "all .3s"});
        } else {
            $('#main-nav').removeClass('scroll');
        }
    });
    
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});
// END SCROLL SMOOTH
