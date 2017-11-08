$(window).on("load resize scroll", function() {
  $('.bgimg').parlx();
});

(function ($) {

  $.fn.parlx = function (options) {

    var options = $.extend({
      speed: 0.3,
    }, options);

    return this.each(function () {

      var $this = $(this);

      function update() {

        let speed = options.speed;

        if (speed > 0.5 || speed < 0.1) {
          speed = 0.3;
        }

        const scrolled = $(window).scrollTop() - $this.parent().offset().top;

        $this.css({
          top: '0px',
          left: '0px',
          backgroundPosition: 'center center',
          width: '100vw',
          height: $this.parent().height() * (1 + speed * 2),
          WebkitTransform: 'translateY(' + speed * scrolled + 'px)',
          msTransform: 'translateY(' + speed * scrolled + 'px)',
          transform: 'translateY(' + speed * scrolled + 'px)',
        });

      }

      update();

      $(window).on('scroll', function () {
        update();
      });

      $(window).resize(function () {
        update();
      });

    });

  };

})(jQuery);
//------------------------------
jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});
//-------------
jQuery("h1").fitText(1.1, { minFontSize: '50px', maxFontSize: '80px' });
jQuery(".Bg").fitText(1.1, { minFontSize: '35px', maxFontSize: '65px' });
jQuery("#text-carousel").fitText(2.1, { minFontSize: '15px', maxFontSize: '30px' });
	//.........................
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});