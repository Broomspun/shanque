<?php defined('IN_IA') or exit('Access Denied');?><!DOCTYPE html >
<html lang="zh-CN"><head>
<title>房源列表</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<link href="../addons/wn_storex/template/shanque/mobile/css/bootstrap.css" rel="stylesheet" type="text/css">
<link href="../addons/wn_storex/template/shanque/mobile/css/common.css" rel="stylesheet" type="text/css">
<link href="../addons/wn_storex/template/shanque/mobile/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<script src="../addons/wn_storex/template/shanque/mobile/js/TouchSlide.1.1.js" type="text/javascript"></script>
<script src="../addons/wn_storex/template/shanque/mobile/js/jquery.min.1.8.2.js" type="text/javascript"></script>
<script src="../addons/wn_storex/template/shanque/mobile/js/common.js" type="text/javascript"></script>
<script src="../addons/wn_storex/template/shanque/mobile/js/demo.js" type="text/javascript"></script>
</head>

<body>
<div class="container">
 <div class="row">
  <div class="header_top">
  <ul class="header_title list-inline">
  <li class="operating"><a href="index"><i class="fa fa-angle-left"></i></a></li>
  <li class="title_name"><?php  if($type==0) { ?>城市房源<?php  } ?><?php  if($type==1) { ?>景区房源<?php  } ?><?php  if($type==2) { ?>温泉房源<?php  } ?></li>
  <li class="operating"><a href="#"><i class="fa  fa-map-marker"></i></a></li>
  </ul>
  </div>
    <!--内容-->
    <section  class="clearfix">
    <div class="screening">
    <ul>
       <li class="Regional">城市 <i class="fa  fa-angle-down"></i></li>
       <li class="Sort">排序 <i class="fa  fa-angle-down"></i></li>
       <li class="meishi">价格 <i class="fa  fa-angle-down"></i></li>             
        <li class="Brand_filter">筛选 <i class="fa  fa-angle-down"></i></li>
    </ul>
</div>
  <!--筛选内容-->  
  <div class="grade-eject">
    <ul class="grade-w" id="gradew">
        <li onclick="grade1(this)">丹东 <span class="xiaobiao">1225</span></li>
    </ul>
    <ul class="grade-t" id="gradet">
    	<div class="zimu">A</div>
        <li onclick="gradet(this)">全河北 <span class="xiaobiao1">1225</span></li>
        <div class="zimu">B</div>
        <li onclick="gradet(this)">石家庄 <span class="xiaobiao1">1225</span></li>
        <li onclick="gradet(this)">唐山 <span class="xiaobiao1">1225</span></li>
        <li onclick="gradet(this)">秦皇岛 <span class="xiaobiao1">1225</span></li>
        <div class="zimu">C</div>
        <li onclick="gradet(this)">邢台 <span class="xiaobiao1">1225</span></li>
        <li onclick="gradet(this)">保定 <span class="xiaobiao1">1225</span></li>
        <li onclick="gradet(this)">张家口 <span class="xiaobiao1">1225</span></li>
        <div class="zimu">D</div>
        <li onclick="gradet(this)">承德 <span class="xiaobiao1">1225</span></li>
        <li onclick="gradet(this)">沧州 <span class="xiaobiao1">1225</span></li>
        <div class="zimu">E</div>
        <li onclick="gradet(this)">廊坊 <span class="xiaobiao1">1225</span></li>
        <li onclick="gradet(this)">衡水 <span class="xiaobiao1">1225</span></li>
    </ul>
</div>
<div class="Sort-eject Sort-height">
    <ul class="Sort-Sort" id="Sort-Sort">
        <li onclick="Sorts(this)">智能排序</li>
        <li onclick="Sorts(this)">离我最近</li>
        <li onclick="Sorts(this)">好评优先</li>
        <li onclick="Sorts(this)">人气优先</li>
        <li onclick="Sorts(this)">价格最低</li>
        <li onclick="Sorts(this)">价格最高</li>
    </ul>
</div>
<div class="price-eject price-height">
    <ul class="price" id="price">
        <li onclick="price(this)">60元以下</li>
        <li onclick="price(this)">60元-120元</li>
        <li onclick="price(this)">120元-250元</li>
        <li onclick="price(this)">250元-500元</li>
        <li onclick="price(this)">500元-1000元</li>
        <li onclick="price(this)">1000元以上</li>
    </ul>
</div>
<div class="filter-eject price-height">
    <ul class="price" id="price">
        <li onclick="price(this)">60元以下</li>
        <li onclick="price(this)">60元-120元</li>
        <li onclick="price(this)">120元-250元</li>
        <li onclick="price(this)">250元-500元</li>
        <li onclick="price(this)">500元-1000元</li>
        <li onclick="price(this)">1000元以上</li>
    </ul>
</div>           
<!--房子列表-->
<div class="Pro_list_style clearfix">
 <?php  if(is_array($room)) { foreach($room as $r) { ?>
 <ul class="clearfix">
 <div class="clearfix relative">
  <li class="Product_Image"><div class="wrap_score"><span class="ribbon6">5.0分</span> </div><a href="<?php  echo $this->createMobileUrl('detailed',array('id'=>$r['id']));?>"><img src="../attachment/<?php  echo $r['thumb'];?>" width="100%"/></a></li>
  <li class="Product_info"><a href="<?php  echo $this->createMobileUrl('detailed',array('id'=>$r['id']));?>" class="name"><?php  echo $r['title'];?></a>
  <p class="price"><?php  echo $r['cprice'];?>元/<b>天</b></p>
  <p><a href="<?php  echo $this->createMobileUrl('detailed',array('id'=>$r['id']));?>" class="btn btn_payment ">到房付款</a></p>
  </li>
  </div>
  <li class="specification clearfix"> 
  <span><i class="icon_wsj"></i>两卫</span>  
  <span><i class="icon_mj"></i>160</span>  
  <span><i class="icon_chuan"></i><?php  echo $r['bed'];?>张</span>   
  <span><i class="icon_rens"></i><?php  echo $r['floor'];?>人</span>
  <span><i class="icon_recommend"></i>5.0分</span>
  </li>
 </ul>
 <?php  } } ?>
 <!--<div class="more_style"><a href="javascript:" class="btn btn_more">加载更多</a></div>-->
</div>
  
 </section>
 </div>
</div>
<!--底部信息-->
<div class="footer">
     <p class="link"><a href="#">关于我们</a> | <a href="#">联系我们</a> |<a href="#">帮助中心</a> | <a href="#">加入我们</a></p>
     <p>网站备案/许可证号：京ICP12043553号-3 京公网安备11010802011855号</p>
    </div>
</body>
</html>
