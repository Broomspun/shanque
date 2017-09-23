<?php defined('IN_IA') or exit('Access Denied');?><!DOCTYPE html >
<html lang="zh-CN">
<head>
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
<script src="../web/resource/js/custom.js"  type="text/javascript"></script>
<title><?php  echo $detail['title'];?></title>
</head>

<body>
<div class="container">
 <div class="row">
   <div class="header_top" id="header_top">
  <ul class="header_title list-inline">
  <li class="operating"><a href="javascript:history.go(-1)"><i class="fa fa-angle-left"></i></a></li>
  <li class="title_name">房源介绍</li>
  <li class="operating"><a href="#"><i class="fa  fa-map-marker"></i></a></li>
  </ul>
  </div>
  <!--内容-->
  <section  class="clearfix bg_color">
   <!--产品图片-->
   <div class="info_style">
   <div id="detailed_content">
   <div class="product_picture" id="product_picture">
    <div class="hd"><ul></ul> </div>
    <div class="bd">
     <em class="pageState"></em>
	 <?php  if(!empty($detail['quanjing'])) { ?>
	  <iframe src="<?php  echo $detail['quanjing'];?>" width="100%" height="450px"></iframe>
	 <?php  } else { ?>
     <ul>
	
	 <?php  if(is_array($piclist)) { foreach($piclist as $p) { ?>
      <li><img src="../attachment/<?php  echo $p['img'];?>"></li>
	  <?php  } } ?>
     </ul>
	 <?php  } ?>
    </div>
    </div>
    <script type="text/javascript">
    TouchSlide({ 
	slideCell:"#product_picture",
	titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
	mainCell:".bd ul", 
	effect:"leftLoop", 
	pageStateCell:".pageState",
	autoPlay:false,//自动播放
    autoPage:true, //自动分页
    switchLoad:"_src" //切换加载，真实图片路径为"_src"
});
</script>
<div class="specification clearfix detaild_specification"> 
 <a href="Room_details.html">
  <span><i class="icon_wsj"></i>两卫</span>  
  <span><i class="icon_mj"></i>160</span>  
  <span><i class="icon_chuan"></i><?php  echo $detail['bed'];?>张</span>   
  <span><i class="icon_rens"></i><?php  echo $detail['floor'];?>人</span>
  <span><i class="icon_recommend"></i>4.5分</span></a>
  </div>
<div class="container">
   <div class="detaild_title"><?php  echo $detail['title'];?></div>
   <p class="detaild_price"><?php echo $detail['cprice'];?>元/天 <span class="deposit">免佣金</span></p>
   </div>
    <div class="account-box">
        <h2 class="account-title">
            <a href="###" class="f-btn-fhby right">返回</a>
            <ul class="clearfix data_title">
                <li class="f-btn-jian "><i class="fa fa-angle-left"></i></li>
                <li class=" f-riqi">排房日期<span class="f-year">2017</span>年<span class="f-month">1</span>月</li>
                <li class="f-btn-jia "><i class="fa fa-angle-right"></i></li>
            </ul>
        </h2>
        <div class="f-rili-table">
            <div class="f-rili-head  clearfix">
                <div class="f-rili-th">周日</div>
                <div class="f-rili-th">周一</div>
                <div class="f-rili-th">周二</div>
                <div class="f-rili-th">周三</div>
                <div class="f-rili-th">周四</div>
                <div class="f-rili-th">周五</div>
                <div class="f-rili-th">周六</div>
                <div class="clear"></div>
            </div>
            <div class="f-tbody clearfix">
            </div>
        </div>
    </div>
    </div>
    </div>
    <!--介绍-->
    <div class="">

       <div class="fd_user clearfix">
        <div class="user_Avatar">
        <em class="Avatar_img"><img src="../addons/wn_storex/template/shanque/mobile/images/user.jpg" width="60%"></em>
        <span class="Certification"><i class="fa fa-vcard"></i>&nbsp;&nbsp;已认证</span>
        </div>
        <div class="phone_contact">
        <a href="#" class="phone_btn"><i class="fa fa-phone"></i></a>
        <a href="#" class="rule_link">交易规则</a>
        </div>
       </div>
       <div class="deta_Introduction"><b>房源介绍：</b><?php 
echo htmlspecialchars_decode($detail['device']);
?></div>
       <!--评价-->
        <div class="s-detail">
 	 <div id="leftTabBoxs">
   <div class="hd">
    <ul><li>详情</li><li>评价（<?php echo count($reviews); ?>）</li><li>周边</li></ul>
   </div>
  <div class="bd"  id="tabBox1-bd">
  <div class="con">
	  	<div class="rule_style">
	  		<div class="title_name">交易规则</div>
	  		<div class="rule_content">
	  			<h5>交易说明</h5>
	  			<p>交易说明交易说明交易说明交易说明交易说明交易说明交易说明交易说明</p>
	  		</div>	  		
	  	</div>  		  	
	  </div>
  	<div class="con">
       <div class="Evaluation">
       	<div class="Evaluation_list">
            <?php if(is_array($reviews)) {
                foreach ($reviews as $review) {
                    if($review['avatar']!=='')
                        $img = $review['avatar'];
                    else
                        $img = "../addons/wn_storex/template/shanque/mobile/images/user.jpg";
                    ?>
                    <div class="content">
                        <div class="Evaluation_user">
                            <em><img src="<?php echo $img; ?>"></em>
                            <h5>
                            <?php echo $review['nickname'];?>
                            </h5>
                        </div>
                        <div class="Evaluation_info">
                            <p>
                                <?php echo $review['review'];?>
                            </p>
                        </div>
                        <div class="time">发布时间：<?php echo $review['review_date']?></div>
                    </div>
                <?php }
            }
            ?>
       	</div>
         <?php  if($ispay['id'] > 0) { ?>
           <div class="container" style="margin-top: 20px;">
               <div class="row">

               <form class="form-horizontal" id="review-form" method="post">
                   <input type="hidden" name="uid" value="<?php echo $_W['fans']['uid']; ?>"/>
                   <input type="hidden" name="roomid" value="<?php echo $_GPC['id']; ?>"/>
                   <div class="form-group">
                       <div class="col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10">
                       <textarea required name="review-desc" placeholder="Leave a review" class="form-control" rows="3"></textarea>
                       </div>
                   </div>
                   <div class="form-group">
                       <div class="col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10">
                           <button type="submit" class="text-center col-xs-12 btn btn-default">Submit</button>
                       </div>
                   </div>
               </form>
               </div>

           </div>
         <?php } ?>
       </div>



	  </div>
	  <div class="con">
	  	<div class="Pro_list_style clearfix">
	  		<ul class="clearfix">
 <div class="clearfix relative">
  <li class="Product_Image"><div class="wrap_score"><span class="ribbon6">4.5分</span> </div><a href="#"><img src="../addons/wn_storex/template/shanque/mobile/images/p_1.jpg" width="100%"></a></li>
  <li class="Product_info"><a href="#" class="name">鸭绿江公园三室二厅豪华装修</a>
  <p class="price">500元/<b>天</b></p>
  <p><a href="#" class="btn btn_payment ">到房付款</a></p>
  </li>
  </div>
  <li class="specification clearfix"> 
  <span><i class="icon_wsj"></i>两卫</span>  
  <span><i class="icon_mj"></i>160</span>  
  <span><i class="icon_chuan"></i><?php  echo $detail['bed'];?>张</span>   
  <span><i class="icon_rens"></i><?php  echo $detail['floor'];?>人</span>
  <span><i class="icon_recommend"></i>4.5分</span>
  </li>
 </ul>
	  	</div>	  	
	  </div>
	 </div>
	</div>
         <script type="text/javascript">
			TouchSlide( { slideCell:"#leftTabBoxs",

				endFun:function(i){ //高度自适应
					var bd = document.getElementById("tabBox1-bd");
					bd.parentNode.style.height = bd.children[i].children[0].offsetHeight+"px";
					if(i>0)bd.parentNode.style.transition="200ms";//添加动画效果
				}

			} );
	</script> 
   </div> 
   <!--栏目-->
 <div class="Contact_phone" id="productsMenu">
 <?php  if($ispay['id'] > 0) { ?>
  <a href="javascript:" class="Call_phone"><i class="fa fa-phone"></i>&nbsp;&nbsp;点击拨打</a>
  <span class="phone"><a href="tel:18841582213" >18841582213</a></span>
 <?php  } else { ?>
	<a href="javascript:" class="Call_phone"><i class="fa fa-phone"></i>&nbsp;&nbsp;房东电话</a>
  <span class="phone"><a href="javascript:pay()" >花5元立即购买</a></span>
 <?php  } ?>
 </div>
  </section>
 </div>
 </div>

</body>

<script type="text/javascript">
    function pay(){
		location.href ="<?php  echo $this->createMobileUrl('pay', array('id' => $detail['id']))?>";
	}
</script>
</html>
