<?php defined('IN_IA') or exit('Access Denied');?><!DOCTYPE html >
<html lang="zh-CN"><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<link href="../addons/wn_storex/template/shanque/mobile/css/bootstrap.css" rel="stylesheet" type="text/css">
<link href="../addons/wn_storex/template/shanque/mobile/css/common.css" rel="stylesheet" type="text/css">
<link href="../addons/wn_storex/template/shanque/mobile/css/mobiscroll.custom-2.6.2.min.css" rel="stylesheet" type="text/javascript">
<link href="../addons/wn_storex/template/shanque/mobile/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<script src="../addons/wn_storex/template/shanque/mobile/js/TouchSlide.1.1.js" type="text/javascript"></script>
<script src="../addons/wn_storex/template/shanque/mobile/js/jquery.min.1.8.2.js" type="text/javascript"></script>
<script src="../addons/wn_storex/template/shanque/mobile/js/common.js" type="text/javascript"></script>
<script src="../addons/wn_storex/template/shanque/mobile/js/mobiscroll.custom-2.6.2.min.js"  type="text/javascript"></script>
<title>山雀之家</title>
</head>
<body>
<div class="container">
 <div class="row">
   <div class="header_top">
    <ul class="item list-inline">
     <li class="guide_link"><a href="#">交易指南</a><a href="#">房客指南</a></li>
     <li class="register_log"><em class="fa fa-user-circle-o"></em>&nbsp;&nbsp;<?php  echo $_W['fans']['nickname'];?>&nbsp;&nbsp;</li>
     </ul>
    </div>
    <!---->
    <section>
    <div class="logo_top clearfix">
    <div class="logo"><img src="../addons/wn_storex/template/shanque/mobile/images/logo.png"></div>
    <div class="b_name">让旅途充满快乐<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让家不再遥远</div><div class="release_style"><a href="javascript:alert('请将房源信息发送至邮箱shanquerzf@163.com')" class="release_btn">立即发布房源</a></div> </div>
    <div class="notice">
	<marquee scrollAmount=2 width=300>靓丽风景线</marquee>
	</div>
	<div class="index_content">
    <div class="in_title_name">山雀旅游房屋短租预订
     <!--<h3>客服电话：400-056-0055</h3>-->
    </div>
    <div class="prompt_name">所有房源经过山雀网审核 保证真实有效 请放心选择</div>
    <div class="relative">
    <!--<div class="search_style" id="search_Click"><em class="jiantou" ><i class="fa fa-caret-up "></i></em>搜索预订房屋 <em class="fa fa-search search_btn"></em></div>-->
    <div class="Add_content" id="Expand_content">
     <ul class=" add_style">
      <li class="location"><i class="fa fa-map-marker"></i><input name="city_name" value="丹东" type="text" class="text" placeholder="目的地"></li>
      <li class="Time_choice">     
        <div class="Start_time time_style">
        <div class="icon"><i class="fa fa-calendar"></i></div>
        <div class="period" >
         <input type="text" id="date1" class="date_time" width="100%" value="" >
         <h2 class="week" id="week"></h2>
        </div>
        </div>
        <div class="End_time time_style" >
        <div class="icon"><i class="fa fa-calendar"></i></div>
        <div class="period" >
       
          <input type="text" id="date2" class="date_time" width="100%" value="" >
         <h2 class="week" id="week2"></h2>
        </div>
        </div>        
        </li>
      <li class="Number"><i class="fa  fa-user-plus "></i><input name="persons_per_room" type="text" value="4" class="text" placeholder="人数"></li>
      <!--<li class="search"><a href="javascript:ovid"  class="btn_search btn">搜索</a></li>-->
     </ul>
    </div> 
    </div><!---->
    <div class="">
     <ul class="clearfix">
      <li class="similar-li "><a href="<?php  echo $this->createMobileUrl('list',array(type=>1));?>" class="color_similar btn"><img src="../addons/wn_storex/template/shanque/mobile/images/icon_Scenic.png" width="50%"><h3>景区房源</h3></a></li>
      <li class="similar-li "><a href="<?php  echo $this->createMobileUrl('list',array(type=>0));?>" class="color1_similar btn"><img src="../addons/wn_storex/template/shanque/mobile/images/icon_city.png" width="50%"><h3>城市房源</h3></a></li>
      <li class="similar-li "><a href="<?php  echo $this->createMobileUrl('list',array(type=>2));?>" class="color2_similar btn"><img src="../addons/wn_storex/template/shanque/mobile/images/icon_spa.png" width="50%"><h3>温泉房源</h3></a></li>
      <!-- <li class="similar-li "><a href="list.html" class="color3_similar btn"><img src="../addons/wn_storex/template/shanque/mobile/images/icon_by_car.png" width="50%"><h3>自驾游</h3></a></li>-->
     </ul>
    </div>
    <!--切换-->
    
    </div>  
    <!---->
    </section>
    <!--底部信息-->
    <div class="footer">
     <p class="link"><a href="#">关于我们</a> | <a href="#">联系我们</a> |<a href="#">帮助中心</a> | <a href="#">加入我们</a></p>
     <p>网站备案/许可证号：京ICP12043553号-3 京公网安备11010802011855号</p>
    </div>
 </div>
</div>

</body>
</html>
<script>
$(function () {  
    $("#date1").mobiscroll().date({  
		preset: 'date', //日期
        theme: "android-ics light",  
        lang: "zh", 
		showNow: true,
		nowText: "今天",
        cancelText: null,
	    monthText: '月', 
		dayText: '日',  //面板中年月日文字
		setText : '确定', //确认按钮名称 		
	    cancelText : '取消', //取消按钮名籍我 
        dateFormat: 'yy-mm-dd', //返回结果格式化为年月格式  
		dateOrder: 'mmdd', //面板中日期排列格式
        // wheels:[], 设置此属性可以只显示年月，此处演示，就用下面的onBeforeShow方法,另外也可以用treelist去实现  
        onBeforeShow: function (inst) { inst.settings.wheels[0].length>2?inst.settings.wheels[0].pop():null; }, //弹掉“日”滚轮  
        headerText: function (valueText) { //自定义弹出框头部格式  
            array = valueText.split('-');  
            return array[0] + "年" + array[1] + "月"+ array[2] + "日";     
        } 
		
    });
	
}) 
	$(function () {  
		$("#date2").mobiscroll().date({  
			preset: 'date', //日期
        theme: "android-ics light",  
        lang: "zh", 
		showNow: true,
		nowText: "今天",
        cancelText: null,
	    monthText: '月', 
		dayText: '日',  //面板中年月日文字
		setText : '确定', //确认按钮名称 		
	    cancelText : '取消', //取消按钮名籍我 
        dateFormat: 'yy-mm-dd', //返回结果格式化为年月格式  
		dateOrder: 'mmdd', //面板中日期排列格式
			// wheels:[], 设置此属性可以只显示年月，此处演示，就用下面的onBeforeShow方法,另外也可以用treelist去实现  
			onBeforeShow: function (inst) { inst.settings.wheels[0].length>2?inst.settings.wheels[0].pop():null; }, //弹掉“日”滚轮  
			headerText: function (valueText) { //自定义弹出框头部格式  
				array = valueText.split('-');  
			return array[0] + "年" + array[1] + "月"+ array[2] + "日";  
			}  
		});  
	}) 
	
date1.value=new Date().getFullYear(0) + '-' + (new Date().getMonth(0) + 1) + '-' + new Date().getDate(0); 
	
date2.value=new Date().getFullYear(0) + '-' + (new Date().getMonth(0) + 1) + '-' + new Date().getDate(0); 
	function data_time(){
	 var d1=$('#date1').val();//格式：（例如）2017－04-08	
     var date = d1;    //此处也可以写成 17/07/2014 一样识别    也可以写成 07-17-2014  但需要正则转换 
     var day = new Date(Date.parse(date));   //需要正则转换的则 此处为 ： var day = new Date(Date.parse(date.replace(/-/g, '/')));
     var today = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
     var week = today[day.getDay()];
	$('#week').text(week);		
}
	 
	setInterval(function(){$('.period').html(data_time)},1000);
//
	function data_time1(){
	 var d1=$('#date2').val();//格式：（例如）2017－04-08	
     var date = d1;    //此处也可以写成 17/07/2014 一样识别    也可以写成 07-17-2014  但需要正则转换 
     var day = new Date(Date.parse(date));   //需要正则转换的则 此处为 ： var day = new Date(Date.parse(date.replace(/-/g, '/')));
     var today = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
     var week = today[day.getDay()];
	$('#week2').text(week);		
}
	 
	setInterval(function(){$('.period').html(data_time1)},1000);

</script>
