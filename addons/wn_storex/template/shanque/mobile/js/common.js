/*********************点击事件*********************/
$(document).ready(function () {

    $('#search_Click').on("click", function () {
        if ($(this).hasClass("on")) {
            $(this).find("i").attr('class', '').toggleClass("fa fa-caret-up");
            $('#Expand_content').toggleClass("search-container");
            //$(this).siblings('dd').slideDown();
            $(this).toggleClass("on");
        }
        else {
            $(this).toggleClass("on");
            $(this).find("i").attr('class', '').toggleClass("fa fa-caret-down");
            // $(this).siblings('dd').slideUp();
            $('#Expand_content').toggleClass("search-container");
        }
    });
//
    /***********************商品分类顶部浮动固定层菜单栏**************************/
    $(window).scroll(function () {
        var topToolbar = $(".Contact_phone");
        var headerH = $("#header_top").outerHeight();
        var headers = $("#detailed_content").outerHeight();
        var scrollTop = $(document.body).scrollTop();
        if (scrollTop >= headerH + headers) {
            topToolbar.stop(false, true).addClass("fixToTop").css("bottom", "-60px");
        } else if (scrollTop < headerH + headers) {
            topToolbar.stop(false, true).removeClass("fixToTop").css("bottom", "0px");
        }
    });

    var url = window.location.href;
    var ids= url.match(/&id=([\d]+)/);
    var id = -1;
    if(ids !=null && ids!==undefined)
        id = ids[1];

    //页面加载初始化年月
    var mydate = new Date();
    $(".f-year").html(mydate.getFullYear());
    $(".f-month").html(mydate.getMonth() + 1);
    showDate(mydate.getFullYear(), mydate.getMonth() + 1);
    //日历上一月
    $(".f-btn-jian ").click(function () {
        var mm = parseInt($(".f-month").html());
        var yy = parseInt($(".f-year").html());
        if (mm == 1) {//返回12月
            $(".f-year").html(yy - 1);
            $(".f-month").html(12);
            showDate(yy - 1, 12);
        } else {//上一月
            $(".f-month").html(mm - 1);
            showDate(yy, mm - 1);
        }
    })
    //日历下一月
    $(".f-btn-jia").click(function () {
        var mm = parseInt($(".f-month").html());
        var yy = parseInt($(".f-year").html());
        if (mm == 12) {//返回12月
            $(".f-year").html(yy + 1);
            $(".f-month").html(1);
            showDate(yy + 1, 1);
        } else {//上一月
            $(".f-month").html(mm + 1);
            showDate(yy, mm + 1);
        }
    })
    //返回本月
    $(".f-btn-fhby").click(function () {
        $(".f-year").html(mydate.getFullYear());
        $(".f-month").html(mydate.getMonth() + 1);
        showDate(mydate.getFullYear(), mydate.getMonth() + 1);
    })

    //读取年月写入日历  重点算法!!!!!!!!!!!
    function showDate(yyyy, mm) {
        $.ajax({
            method: "POST",
            url: "http://shanque.zhangshuoyin.cn/addons/wn_storex/getPrice.php",
            dataType: "json",
            data: { id: id, hotelid: 1}
        })
            .done(function( res ) {
                var dd = new Date(parseInt(yyyy), parseInt(mm), 0);   //Wed Mar 31 00:00:00 UTC+0800 2010
                var daysCount = dd.getDate();            //本月天数
                var mystr = "";//写入代码
                var icon = "";//图标代码
                var today1 = new Date();
                var today = new Date().getDate(); //今天几号  21

                var fullYear = today1.getFullYear();
                var fullMonth = parseInt(today1.getMonth() + 1);
                if (parseInt(fullMonth) < 10)
                    fullMonth = '0' + fullMonth.toString();

                var fullDate = today1.getDate();
                if (parseInt(fullDate) < 10)
                    fullDate = '0' + fullDate;

                var fullToday = parseInt(fullYear + fullMonth + fullDate);

                var monthstart = new Date(parseInt(yyyy) + "/" + parseInt(mm) + "/1").getDay()//本月1日周几
                var lastMonth; //上一月天数
                var nextMounth//下一月天数
                var lastMonth_y, lastMonth_m;
                var nextMonth_y, nextMonth_m;
                if (parseInt(mm) == 1) {
                    lastMonth = new Date(parseInt(yyyy) - 1, parseInt(12), 0).getDate();
                    lastMonth_y = yyyy - 1;
                    lastMonth_m = 12;
                } else {
                    lastMonth = new Date(parseInt(yyyy), parseInt(mm) - 1, 0).getDate();
                    lastMonth_y = yyyy;
                    lastMonth_m = mm - 1;
                    if (lastMonth_m < 10)
                        lastMonth_m = '0' + lastMonth_m.toString();
                }
                if (parseInt(mm) == 12) {
                    nextMounth = new Date(parseInt(yyyy) + 1, parseInt(1), 0).getDate();
                    nextMonth_y = yyyy + 1;
                    nextMonth_m = '01';
                } else {
                    nextMounth = new Date(parseInt(yyyy), parseInt(mm) + 1, 0).getDate();
                    nextMonth_y = yyyy;
                    nextMonth_m = mm + 1;
                    if (nextMonth_m < 10)
                        nextMonth_m = '0' + nextMonth_m.toString();
                }

                var full_lastMonth = parseInt(lastMonth_y.toString() + lastMonth_m + '00');
                var full_nextMonth = parseInt(nextMonth_y.toString() + nextMonth_m + '00');
                //计算上月空格数
                var lastclass = "f-null f-lastMonth";

                for (var j = monthstart; j > 0; j--) {
                    var lastday = full_lastMonth + lastMonth - j + 1;
                    if (lastday >= fullToday) lastclass = " f-lastMonth"
                    mystr += "<div class='f-td " + lastclass + "' >" + (lastMonth - j + 1) + "</div>";
                }

                //本月单元格
                var activeMonth = mm;
                var activeYear = yyyy.toString();
                if (activeMonth < 10)
                    activeMonth = '0' + mm.toString();

                for (var i = 1; i <= daysCount; i++) {
                    //这里为一个单元格，添加内容在此
                    var class_name = "f-number";
                    var currentDate0 = i;
                    if (i < 10)
                        currentDate0 = '0' + i.toString();

                    var currentDate = parseInt(activeYear + activeMonth + currentDate0);
                    var currentDate1 = activeYear + '-' + activeMonth + '-' + currentDate0;

                    var price_div;
                    if (currentDate < fullToday) {
                        class_name = "f-null past";
                        price_div = '';
                    } else {
                        if (res!=null && res[currentDate1] !== undefined) {
                            price_div = "<div class='f-yuan'>" + res[currentDate1].price + "元</div>";

                            if(res[currentDate1].status==0)  {
                                class_name = "f-null past";
                                price_div = "<div class='f-yuan'></div>";
                            }
                        }
                        else
                            price_div = "<div class='f-yuan'></div>";
                    }
                    mystr += "<div class='f-td " + class_name + "'><span class='f-day'>" + (i) + "</span>"
                        + price_div
                        //+"<div class='f-table-msg'></div>"//这里加判断
                        + "</div>";
                }

                //计算下月空格数
                for (var k = 1; k <= 35 - (daysCount + monthstart); k++) {//表格保持等高6行42个单元格
                    mystr += "<div class='f-td f-null f-nextMounth'>" + (k) + "</div>";
                }


                //写入日历
                $(".f-rili-table .f-tbody").html(mystr);
                //给今日加class
                if (mydate.getFullYear() == yyyy) {
                    if ((mydate.getMonth() + 1 ) == mm) {
                        var today = mydate.getDate();
                        var lastNum = $(".f-lastMonth").length;
                        $(".f-rili-table .f-td").eq(today + lastNum - 1).addClass("f-today");
                    }
                }
                //绑定选择方法


                //绑定查看方法
                $(".f-yuan").off("mouseover");
                $(".f-yuan").on("mouseover", function () {
                    $(this).parent().find(".f-table-msg").show();
                });
                $(".f-table-msg").off("mouseover");
                $(".f-table-msg").on("mouseover", function () {
                    $(this).show();
                });
                $(".f-yuan").off("mouseleave");
                $(".f-yuan").on("mouseleave", function () {
                    $(this).parent().find(".f-table-msg").hide();
                });
                $(".f-table-msg").off("mouseleave");
                $(".f-table-msg").on("mouseleave", function () {
                    $(this).hide();
                });

            });
    }


});
