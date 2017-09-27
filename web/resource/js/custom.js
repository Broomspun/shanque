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

        $('form#review-form').on('submit', function (e) {
            e.preventDefault();
            var datastring = $("form#review-form").serialize();
            $.ajax({
                method: "POST",
                url: "http://shanque.zhangshuoyin.cn/addons/wn_storex/insertReview.php",
                dataType: "json",
                data: datastring,
            })
                .done(function( res ) {
                    if(res.message=='1'){
                        alert('Success!');

                        var $html= '<div class="content"><div class="Evaluation_user">';
                        $html +='<em><img src="'+res.avatar+'"></em><h5>'+ res.nickname+'</h5></div>';
                        $html += '<div class="Evaluation_info"><p>'+res.entry.review+'</p></div>';
                        $html += '<div class="time">发布时间：'+res.entry.review_date+'</div></div>';
                        $('.Evaluation_list').append($html).fadeIn(1000);
                        var reviews = parseInt($('.review-counts').text())+1;
                        $('.review-counts').text(reviews.toString());
                        $('#review-form').fadeOut(500);
                    }
                    else
                        alert('failed');
                })


        });

        $(document).on('click', ".f-rili-table .f-number", function(){
            $(".f-rili-table .f-number").removeClass("f-on");
            $(this).addClass("f-on");
            var current_date = $('.f-on span.f-day').data('date');
            var price = $('.f-on .f-yuan').text();
            if(price=='')
                price = 0.00
            else
                price = parseFloat(price);

            if(price>0)
                $('#room-price').val(price);
            else
                $('#room-price').val('');

            var room_status = true;
            if($(this).hasClass('unavailable')){
                room_status = false;
            }

            if(!room_status)
                $('#room-status').prop('checked', false);
            else
                $('#room-status').prop('checked', true);

            $('#myModal').modal('show');
        });


    });


})( jQuery );
