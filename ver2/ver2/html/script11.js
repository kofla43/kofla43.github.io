(function($){
    $.fn.MySlider = function(interval) {
        var slides;
        var cnt;
        var amount;
        var i;

        function run() {
            // hiding previous image and showing next
            $(slides[i]).fadeOut(1500);
            i++;
            if (i >= amount) i = 0;
            $(slides[i]).fadeIn(1500);

            // loop
            setTimeout(run, interval);
        }

        slides = $('#my_slider').children();
        cnt = $('#counter');
        amount = slides.length;
        i=0;

        setTimeout(run, interval);
    };
})(jQuery);

// custom initialization
jQuery(window).load(function() {
    $('.smart_gallery').MySlider(10000);
});