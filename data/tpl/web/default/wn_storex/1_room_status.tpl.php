<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('common/header', TEMPLATE_INCLUDEPATH)) : (include template('common/header', TEMPLATE_INCLUDEPATH));?>
<?php  load()->func('tpl')?>
<?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('common', TEMPLATE_INCLUDEPATH)) : (include template('common', TEMPLATE_INCLUDEPATH));?>

<div class="main">
	<ul class="nav nav-tabs">
		<li><a href="<?php  echo $this->createWebUrl('storemanage');?>">房东管理</a></li>
		<li <?php  if($_GPC['op'] == 'edit') { ?>class="active"<?php  } ?>><a href="<?php  echo $this->createWebUrl('goodsmanage', array('op'=>'edit','store_base_id'=>$hotelid));?>">添加房源</a></li>
		<li><a href="<?php  echo $this->createWebUrl('goodsmanage');?>">房源管理</a></li>
		<li class="active"><a href="<?php  echo $this->createWebUrl('room_status', array('hotelid' => $hotelid));?>">维护房态/房量</a></li>
		<li><a href="<?php  echo $this->createWebUrl('room_price', array('hotelid' => $hotelid));?>">维护房价</a></li>
	</ul>
	<div class="main">
		<div class="panel panel-default">
			<div class="panel-heading">
				维护房态/房量
			</div>
			<div class="panel-body">
				<div class="form-group">
					<div class="col-sm-9 col-xs-12">
						<?php  echo tpl_form_field_daterange('datelimit',array('starttime'=>date('Y-m-d', $startime),'endtime'=>date('Y-m-d', $endtime)))?>
						<input class="btn btn-primary" id="search_button" type="button" value="搜索">
						<a href="<?php  echo $this->createWebUrl('room_status', array('op'=>'updatelot','hotelid' => $hotelid));?>" class="btn btn-primary">批量修改房量/房态</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="panel panel-default">
		<div class="panel-heading">
			详细数据 <span class="text-muted">点击价格可以单独修改</span>
		</div>
		<div class="panel-body table-responsive">
			<div class="sub-content" id="d_list"></div>
		</div>
	</div>
</div>
<input type="hidden" id="hotelid" value="<?php  echo $hotelid;?>" />
<script type="text/javascript">
	$(function () {
		var next_page = 0;
		window.get_list  = function(start, end, page) {
			$("#d_list").html("正在加载...");
			$.post("<?php  echo $this->createWebUrl('room_status')?>", {op: 'getDate', hotelid:<?php  echo $hotelid;?>, page: page, start: start, end: end}, function (data) {
				data = eval("(" + data + ")");
				if (data.result == 1) {
					$("#d_list").html(data.code);
					window.bindEvents();
				}
			});
		}
		//上10天价格
		window.prePage = function(){
			var start = $(":hidden[name='datelimit[start]']").val();
			var end = $(":hidden[name='datelimit[end]']").val();
			window.get_list(start, end, parseInt($("#page").val())-1);
		}
		//后10天价格
		window.nextPage = function(){
			var start = $(":hidden[name='datelimit[start]']").val();
			var end = $(":hidden[name='datelimit[end]']").val();
			window.get_list(start, end, parseInt($("#page").val())+1);
		}
		//绑定修改价格事件
		window.bindEvents = function(){
			$(".status_checkbox").unbind("click");
			$(".status_checkbox").click(function(){
				window.submitPrice( $(this) );
			})
	
			$(".price_input").unbind("keydown");
			$(".price_span").click(function(){
			$(".price_editspan").addClass('hide');
	
			$(".price_span").removeClass('hide');
				var obj =$(this);
				obj.addClass('hide');
				obj.parent().find(".price_editspan").removeClass('hide');
				var html = $.trim(obj.html())=='不限'?'':$.trim(obj.html());
				obj.next().find(".price_input").unbind("keydown");
				obj.next().find(".price_input").val(html).select().keydown(function(event){  
					if(event.keyCode==13){
						window.submitPrice( $(this) );
						event.stopPropagation();
					}
				}).blur(function(){
					$(this).parent().parent().find(".price_span").removeClass('hide');
					$(this).parent().addClass('hide');
				});
				Tip.show( obj.next().find(".price_input") , "回车键确定修改","top");
			});
		}
		window.submitPrice = function(obj){
			var hotelid = obj.attr("hotelid");
			var roomid = obj.attr("roomid");
			var date = obj.attr("date");
			var pricetype  = obj.attr("pricetype");
	
			if(pricetype=='num'){
				/*if(!obj.isEmpty() && !obj.isNumber() ){
					Tip.select(obj,"请输入数字或留空!","top");
					return;
				}*/
				var price = $.trim( obj.val() );
				obj.parent().parent().find(".price_span").html( (price==''?"不限":price) ).removeClass('hide');
				obj.parent().addClass('hide');
				if(price=='') { price='-1';}
					$.post("<?php  echo $this->createWebUrl('room_status')?>", 
					{op: 'submitPrice', hotelid:hotelid,roomid:roomid,date:date,price: price,pricetype:pricetype}, function (data) {
					data = eval("(" + data + ")");
					if (data.result == 1) {
					}
				});
			} else {
				$.post("<?php  echo $this->createWebUrl('room_status')?>", 
					{op: 'submitPrice', hotelid:hotelid,roomid:roomid,date:date,status: (obj.get(0).checked?"1":"0"),pricetype:pricetype}, function (data) {
					data = eval("(" + data + ")");
					if (data.result == 1) {
					}
				});
			}
		}
		$("#search_button").click(function () {
			var start = $(":hidden[name='datelimit[start]']").val();
			var end = $(":hidden[name='datelimit[end]']").val();
			window.get_list(start, end, 1);
		});
		$("#search_button").click();
	
	});
</script>

<?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('common/footer', TEMPLATE_INCLUDEPATH)) : (include template('common/footer', TEMPLATE_INCLUDEPATH));?>