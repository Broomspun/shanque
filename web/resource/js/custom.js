(function( $ ) {
    'use strict';

    $(function() {

        $('a.color_similar, a.color1_similar, a.color2_similar').on('click', function (e) {
            e.preventDefault();
            var city = $('input[name="city_name"]').val();
            var ps = $('input[name="persons_per_room"]').val();

            if($(this).hasClass('color_similar')){
                alert(1);
            }
            else if($(this).hasClass('color1_similar')){
                alert(2);
            }
            else if($(this).hasClass('color2_similar')){
                alert(3);
            }


        })

    });
})( jQuery );
