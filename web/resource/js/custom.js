(function( $ ) {
    'use strict';

    $(function() {

        $('a.color_similar, a.color1_similar, a.color2_similar').on('click', function (e) {
            e.preventDefault();
            var city = $('input[name="city_name"]').val();
            var ps = $('input[name="persons_per_room"]').val();
            var mainUrl = "http://shanque.zhangshuoyin.cn/app/index.php?i=1&c=entry&";

            if($(this).hasClass('color_similar')){
                window.location.href=mainUrl+"type=1&do=list&m=wn_storex&"+"city="+city+"&ps="+ps;
                return false;
            }
            else if($(this).hasClass('color1_similar')){
                window.location.href=mainUrl+"type=0&do=list&m=wn_storex&"+"city="+city+"&ps="+ps;
                return false;
            }
            else if($(this).hasClass('color2_similar')){
                window.location.href=mainUrl+"type=2&do=list&m=wn_storex&"+"city="+city+"&ps="+ps;
                return false;
            }


        })

        $('#price_filter li').on('click', function (e) {
            e.preventDefault();
            var url = window.location.href;
            url = url.replace(/&price=[\d]+/g,'');
            window.location.href = url+'&price='+$(this).data('range');
            return false;
        })
    });


})( jQuery );
