/*********************点击事件*********************/
$( document).ready(function(){
  
   $('#search_Click').die().live("click",function(){  
   if($(this).hasClass("on")){ 
	$(this).find("i").attr('class','').toggleClass("fa fa-caret-up"); 
	$('#Expand_content').toggleClass("search-container");  
	//$(this).siblings('dd').slideDown();
	$(this).toggleClass("on");    
   }
   else{  
   $(this).toggleClass("on");  
   $(this).find("i").attr('class','').toggleClass("fa fa-caret-down");  
  // $(this).siblings('dd').slideUp(); 
   $('#Expand_content').toggleClass("search-container");  
   }  
   });
//
/***********************房源分类顶部浮动固定层菜单栏**************************/
$(window).scroll(function() {
		var topToolbar = $(".Contact_phone");
		var headerH = $("#header_top").outerHeight();
		var headers = $("#detailed_content").outerHeight();
		var scrollTop =$(document.body).scrollTop();	
			if( scrollTop >= headerH + headers ){
				topToolbar.stop(false,true).addClass("fixToTop").css("bottom","-60px");
			}else if( scrollTop < headerH + headers ){
				topToolbar.stop(false,true).removeClass("fixToTop").css("bottom","0px"); 
			}
});
              //页面加载初始化年月
                var mydate = new Date();
                $(".f-year").html( mydate.getFullYear() );
                $(".f-month").html( mydate.getMonth()+1 );
                showDate(mydate.getFullYear(),mydate.getMonth()+1);
                //日历上一月
                $(".f-btn-jian ").click(function(){
                    var mm = parseInt($(".f-month").html());
                    var yy = parseInt($(".f-year").html());
                    if( mm == 1){//返回12月
                        $(".f-year").html(yy-1);
                        $(".f-month").html(12);
                        showDate(yy-1,12);
                    }else{//上一月
                        $(".f-month").html(mm-1);
                        showDate(yy,mm-1);
                    }
                })
                //日历下一月
                $(".f-btn-jia").click(function(){
                    var mm = parseInt($(".f-month").html());
                    var yy = parseInt($(".f-year").html());
                    if( mm == 12){//返回12月
                        $(".f-year").html(yy+1);
                        $(".f-month").html(1);
                        showDate(yy+1,1);
                    }else{//上一月
                        $(".f-month").html(mm+1);
                        showDate(yy,mm+1);
                    }
                })
                //返回本月
                $(".f-btn-fhby").click(function(){
                    $(".f-year").html( mydate.getFullYear() );
                    $(".f-month").html( mydate.getMonth()+1 );
                    showDate(mydate.getFullYear(),mydate.getMonth()+1);
                })
                
                //读取年月写入日历  重点算法!!!!!!!!!!!
                function showDate(yyyy,mm){
                    var dd = new Date(parseInt(yyyy),parseInt(mm), 0);   //Wed Mar 31 00:00:00 UTC+0800 2010  
                    var daysCount = dd.getDate();            //本月天数  
                    var mystr ="";//写入代码
                    var icon = "";//图标代码
                    var today = new Date().getDate(); //今天几号  21
                    var monthstart = new Date(parseInt(yyyy)+"/"+parseInt(mm)+"/1").getDay()//本月1日周几  
                    var lastMonth; //上一月天数
                    var nextMounth//下一月天数
                    if(  parseInt(mm) ==1 ){
                        lastMonth = new Date(parseInt(yyyy)-1,parseInt(12), 0).getDate();
                    }else{
                        lastMonth = new Date(parseInt(yyyy),parseInt(mm)-1, 0).getDate();
                    }
                    if( parseInt(mm) ==12 ){
                        nextMounth = new Date(parseInt(yyyy)+1,parseInt(1), 0).getDate();
                    }else{
                        nextMounth = new Date(parseInt(yyyy),parseInt(mm)+1, 0).getDate();
                    }
                    //计算上月空格数
                    for(j=monthstart;j>0;j--){
                        mystr += "<div class='f-td f-null f-lastMonth' style='color:#ccc;'>"+(lastMonth-j+1)+"</div>";
                    }
                    
                    //本月单元格
                    for(i=0;i<daysCount;i++){
                         //这里为一个单元格，添加内容在此
                        mystr += "<div class='f-td f-number'><span class='f-day'>"+(i+1)+"</span>"
                                +"<div class='f-yuan'></div>"
                                //+"<div class='f-table-msg'></div>"//这里加判断
                                +"</div>"; 
                    }
                    
                    //计算下月空格数
                    for(k=0; k<35-(daysCount+monthstart);k++ ){//表格保持等高6行42个单元格
                        mystr += "<div class='f-td f-null f-nextMounth' style='color:#ccc;'>"+(k+1)+"</div>";
                    }
                     
                    
                    
                    //写入日历
                    $(".f-rili-table .f-tbody").html(mystr);
                    //给今日加class
                    if( mydate.getFullYear() == yyyy){
                        if( (mydate.getMonth()+1 ) == mm){
                            var today = mydate.getDate();
                            var lastNum = $(".f-lastMonth").length;
                            $(".f-rili-table .f-td").eq(today+lastNum-1).addClass("f-today");
                        }
                    }
                    //绑定选择方法
                    $(".f-rili-table .f-number").off("click");
                    $(".f-rili-table .f-number").on("click",function(){
                        $(".f-rili-table .f-number").removeClass("f-on");
                        $(this).addClass("f-on");
                    });
                    
                    //绑定查看方法
                    $(".f-yuan").off("mouseover");
                    $(".f-yuan").on("mouseover",function(){
                        $(this).parent().find(".f-table-msg").show();
                    });
                    $(".f-table-msg").off("mouseover");
                    $(".f-table-msg").on("mouseover",function(){
                        $(this).show();
                    });
                    $(".f-yuan").off("mouseleave");
                    $(".f-yuan").on("mouseleave",function(){
                        $(this).parent().find(".f-table-msg").hide();
                    });
                    $(".f-table-msg").off("mouseleave");
                    $(".f-table-msg").on("mouseleave",function(){
                        $(this).hide();
                    });
                }
                
            
 });
 