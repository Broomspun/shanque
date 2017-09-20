<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('common/header', TEMPLATE_INCLUDEPATH)) : (include template('common/header', TEMPLATE_INCLUDEPATH));?>
<script language='javascript' src='<?php  echo $this->_script_url?>jquery.gcjs.js'></script>
<script language='javascript' src='<?php  echo $this->_script_url?>jquery.form.js'></script>
<script language='javascript' src='<?php  echo $this->_script_url?>tooltipbox.js'></script>
<div class="main">
	<ul class="nav nav-tabs">
		<li class="active"><a href="<?php  echo $this->createWebUrl('order',array('op'=>'display'));?>">订单管理</a></li>
	</ul>
	<div class="modal fade" id="quantity-modal" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">修改订单价格</h4>
				</div>
				<div class="modal-body clearfix form-horizontal">
					<input type="number" class="form-control" name="sum_price" />
					<div class="help-block">价格为0.01到99999999.99,精度为两位小数</div>
					<input type="hidden" name="order_id">
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal" onclick="check_price();">确定</button>
				</div>
			</div>
		</div>
	</div>
	<div class="panel panel-info">
		<div class="panel-heading">筛选</div>
		<div class="panel-body">
			<form action="./index.php" method="get" class="form-horizontal" role="form">
				<input type="hidden" name="c" value="site" />
				<input type="hidden" name="a" value="entry" />
				<input type="hidden" name="m" value="wn_storex" />
				<input type="hidden" name="do" value="order" />
				<input type="hidden" name="hotelid" value="<?php  echo $hotel['id'];?>" />
				<input type="hidden" name="roomid" value="<?php  echo $room['id'];?>" />
				<input type="hidden" name="store_type" value="<?php  echo $store_type;?>" />
				<div class="form-group">
					<label class="col-xs-12 col-sm-2 col-md-2 col-lg-1 control-label">店铺类型</label>
					<div class="col-sm-7 col-lg-9 col-xs-12 btn-group">
						<a href="<?php  echo filter_url('store_type:0');?>" class="btn <?php  if($store_type == 0) { ?>btn-primary<?php  } else { ?>btn-default<?php  } ?>">普通</a>
						<a href="<?php  echo filter_url('store_type:1');?>" class="btn <?php  if($store_type == 1) { ?>btn-primary<?php  } else { ?>btn-default<?php  } ?>">酒店</a>
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-2 col-md-2 col-lg-1 control-label">店铺</label>
					<div class="col-sm-4 col-xs-12">
						<input class="form-control" name="hoteltitle"  type="text" value="<?php  if(!empty($hotel)) { ?><?php  echo $hotel['title'];?><?php  } else { ?><?php  echo $_GPC['hoteltitle'];?><?php  } ?>" placeholder="店铺名称">
					</div>
					<div class="col-sm-4 col-xs-12">
						<input class="form-control" name="roomtitle"  type="text" value="<?php  if(!empty($room)) { ?><?php  echo $room['title'];?><?php  } else { ?><?php  echo $_GPC['roomtitle'];?><?php  } ?>" placeholder="房源名称">
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-2 col-md-2 col-lg-1 control-label">用户</label>
					<div class="col-sm-4 col-xs-12">
						<input class="form-control" name="realname" id="" type="text" value="<?php  echo $_GPC['realname'];?>" placeholder="姓名">
					</div>
					<div class="col-sm-4 col-xs-12">
						<input class="form-control" name="mobile" id="" type="text" value="<?php  echo $_GPC['mobile'];?>" placeholder="手机号">
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-2 col-md-2 col-lg-1 control-label">订单</label>
					<div class="col-sm-3 col-xs-12">
						<input class="form-control" name="ordersn" id="" type="text" value="<?php  echo $_GPC['ordersn'];?>" placeholder="订单编号">
					</div>
					<div class="col-sm-3 col-xs-12">
						<select name="status" class="form-control">
							<option value="" <?php  if($_GPC['status']=='') { ?> selected="selected"<?php  } ?>>订单状态</option>
							<option value="0" <?php  if($_GPC['status']=='0') { ?> selected="selected"<?php  } ?>>等待确认</option>
							<option value="-1" <?php  if($_GPC['status'] == -1 ) { ?> selected="selected"<?php  } ?>>订单取消/退款</option>
							<option value="1" <?php  if($_GPC['status'] == 1 ) { ?> selected="selected"<?php  } ?>>订单确认</option>
							<option value="2" <?php  if($_GPC['status'] == 2 ) { ?> selected="selected"<?php  } ?>>订单拒绝/退款</option>
							<option value="3" <?php  if($_GPC['status'] == 3 ) { ?> selected="selected"<?php  } ?>>订单完成</option>
						</select>
					</div>
					<div class="col-sm-3 col-xs-12">
						<select name="paystatus" class="form-control">
							<option value="" <?php  if($_GPC['paystatus'] == '') { ?> selected="selected"<?php  } ?>>支付状态</option>
							<option value="0" <?php  if($_GPC['paystatus'] == '0') { ?> selected="selected"<?php  } ?>>未支付</option>
							<option value="1" <?php  if($_GPC['paystatus'] == '1') { ?> selected="selected"<?php  } ?>>已支付</option>
						</select>
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-2 col-md-2 col-lg-1 control-label">订单时间</label>
					<div class="col-sm-3 col-xs-12">
						<?php  echo tpl_form_field_daterange('date', $_GPC['date'])?>
					</div>
					<div class="col-xs-12 col-sm-2 col-lg-2">
						<button class="btn btn-default"><i class="fa fa-search"></i> 搜索</button>
						<button name="export" value="export" class="btn btn-default"><i class="fa fa-download"></i> 导出数据</button>
					</div>
				</div>
				<div class="form-group">
				</div>
			</form>
		</div>
	</div>
	<div class="panel panel-default">
		<div class="panel-body table-responsive">
			<table class="table table-hover" <?php  if($store_type != 1) { ?>style="display: none"<?php  } ?>>
				<thead class="navbar-inner">
				<tr>
					<th class='with-checkbox' style='width:20px;'>
						<input type="checkbox" class="check_all" />
					</th>
					<th style="width:110px;">订单编号</th>
					<th style="width:220px;">商户订单号</th>
					<th style="width:120px;">酒店</th>
					<th style="width:120px;">房源</th>
					<th style="width:120px;">联系人/手机</th>
					<th style="width:80px;">预定数量</th>
					<!--<th>单价</th>-->
					<th style="width:120px;">总价</th>
					<th style="width:100px;">到店时间<br>离店时间</th>
					<th style="width:120px;">支付方式<i></i></th>
					<th style="width:160px;">订单时间<i></i></th>
					<th style="width:120px;">订单状态<i></i></th>
					<th style="width:180px;">操作</th>
				</tr>
				</thead>
				<tbody>
				<?php  if(is_array($show_order_lists)) { foreach($show_order_lists as $row) { ?>
				<tr>
					<td class="with-checkbox">
						<input type="checkbox" name="check" value="<?php  echo $row['id'];?>"></td>
					<td><?php  echo $row['ordersn'];?></td>
					<td><?php  echo $row['uniontid'];?></td>
					<td><?php  echo $row['hoteltitle'];?></td>
					<td><?php  echo $row['roomtitle'];?></td>
					<td><?php  echo $row['contact_name'];?>/<?php  echo $row['mobile'];?></td>
					<td><?php  echo $row['nums'];?></td>
					<!--<td><?php  echo $row['cprice'];?></td>-->
					<td><?php  echo $row['sum_price'];?></td>
					<td><?php  if(isset($row['is_house']) && $row['is_house'] == 1) { ?><?php  echo date("Y-m-d",$row['btime']); ?><br/><?php  echo date("Y-m-d",$row['etime']); ?><?php  } ?></td>
					<td ><?php  if($row['paytype']==1) { ?>
						余额支付
						<?php  } else if($row['paytype']==21) { ?>
						微支付
						<?php  } else if($row['paytype']==22) { ?>
						支付宝
						<?php  } else if($row['paytype']==3 ) { ?>
						到店付款
						<?php  } else if($row['paytype']==0 ) { ?>
						未支付(或其它)
						<?php  } ?>
					</td>
					<td ><?php  echo date("Y-m-d H:i:s",$row['time']); ?></td>
					<td>
						<?php  if($row['paystatus']==0) { ?>
						<?php  if($row['status'] == 0) { ?><span class="label label-info">已提交订单，待付款</span><?php  } ?>
						<?php  if($row['status'] == -1) { ?><span class="label label-default">已取消</span><?php  } ?>
						<?php  if($row['status'] == 1) { ?><span class="label label-success">已接受</span><?php  } ?>
						<?php  if($row['status'] == 2) { ?><span class="label label-default">已拒绝</span><?php  } ?>
						<?php  if($row['status'] == 4) { ?><span class="label label-success">已入住</span><?php  } ?>
						<?php  if($row['status'] == 3) { ?><span class="label label-success">订单完成</span><?php  } ?>
						<?php  } else { ?>
						<?php  if($row['status'] == 0) { ?><span class="label label-info">
						<?php  if($row['paytype']=='3') { ?>待付款<?php  } else { ?>已支付，等待确认<?php  } ?></span><?php  } ?>
						<?php  if($row['status'] == -1) { ?><span class="label label-default">
						<?php  if($row['paytype'] == 3) { ?>已取消<?php  } else { ?>已支付,取消并退款<?php  } ?></span><?php  } ?>
						<?php  if($row['status'] == 1) { ?><span class="label label-success">已确认,已接受</span><?php  } ?>
						<?php  if($row['status'] == 2) { ?><span class="label label-default">已支付, 已退款</span><?php  } ?>
						<?php  if($row['status'] == 4) { ?><span class="label label-success">已入住</span><?php  } ?>
						<?php  if($row['status'] == 3) { ?><span class="label label-success">订单完成</span><?php  } ?>
						<?php  } ?>
					</td>
					<td>
						<?php  if(!empty($version)) { ?>
						<div class="dropdown" style="display: inline-block">
							<a id="dLabel" data-target="#" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" class="btn btn-default btn-sm"><i class="fa fa-print"></i></a>
							<ul class="dropdown-menu" aria-labelledby="dLabel">
								<?php  if(!empty($row['printers'])) { ?>
									<?php  if(is_array($row['printers'])) { foreach($row['printers'] as $p) { ?>
									<li><a onclick="return confirm('是否打印小票?');return false;" href="<?php  echo $this->createWebUrl('order', array('op'=>'print_order', 'id' => $row['id'], 'storeid' => $row['hotelid'], 'print' => $p['id']))?>"><?php  echo $p['name'];?></a></li>
									<?php  } } ?>
								<?php  } else { ?>
									<li><a href="<?php  echo $this->createWebUrl('order', array('op'=>'check_print_plugin'))?>" target="_blank">添加打印机</a></li>
								<?php  } ?>
							</ul>
						</div>
						<?php  } ?>
						<?php  if($row['status'] != -1 && $row['status'] != 3 && $row['status'] != 2 && $row['paystatus'] == 0) { ?>
						<a href="javascript:;" class="btn btn-default btn-sm change_price" data-id="<?php  echo $row['id'];?>" data-price="<?php  echo $row['sum_price'];?>">修改总价</a>
						<?php  } ?>
						<a href="<?php  echo $this->createWebUrl('order', array('op'=>'edit', 'id' => $row['id'], 'roomid' => $row['roomid'], 'hotelid' => $row['hotelid'], 'store_type' => $store_type)); ?>" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="bottom" title="编辑"><i class="fa fa-edit"></i></a>&nbsp;
						<a onclick="return confirm('此操作不可恢复，取消删除吗?');return false;" href="<?php  echo $this->createWebUrl('order', array('op'=>'delete', 'id' => $row['id'], 'hotelid' => $row['hotelid'], 'roomidid' => $row['roomid'], 'store_type' => $store_type))?>" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="bottom" title="删除"><i class="fa fa-times"></i></a>
					</td>
				</tr>
				<?php  } } ?>
				<tr>
					<td colspan="13">
						<input type="button" class="btn btn-primary" name="deleteall" value="删除选择的" />
					</td>
				</tr>
				</tbody>
				<input name="token" type="hidden" value="<?php  echo $_W['token'];?>" />
			</table>
			<table class="table table-hover" <?php  if($store_type != 0) { ?>style="display: none"<?php  } ?>>
				<thead class="navbar-inner">
				<tr>
					<th class='with-checkbox' style='width:30px;'>
						<input type="checkbox" class="check_all" />
					</th>
					<th style="width:120px;">订单编号</th>
					<th style="width:240px;">商户订单号</th>
					<th style="width:120px;">店铺</th>
					<th style="width:120px;">房源名称</th>
					<th style="width:150px;">联系人/手机</th>
					<th style="width:60px;">预定数量</th>
					<!--<th>单价</th>-->
					<th style="width:120px;">总价</th>
					<th style="width:120px;">支付方式<i></i></th>
					<th style="width:140px;">订单时间<i></i></th>
					<th style="width:120px;">订单状态<i></i></th>
					<th style="width:180px;">操作</th>
				</tr>
				</thead>
				<tbody>
				<?php  if(is_array($show_order_lists)) { foreach($show_order_lists as $row) { ?>
				<tr>
					<td class="with-checkbox">
						<input type="checkbox" name="check" value="<?php  echo $row['id'];?>"></td>
					<td><?php  echo $row['ordersn'];?></td>
					<td><?php  echo $row['uniontid'];?></td>
					<td><?php  echo $row['hoteltitle'];?></td>
					<td><?php  echo $row['roomtitle'];?></td>
					<td><?php  echo $row['contact_name'];?>/<?php  echo $row['mobile'];?></td>
					<td><?php  echo $row['nums'];?></td>
					<!--<td><?php  echo $row['cprice'];?></td>-->
					<td><?php  echo $row['sum_price'];?></td>
					<td ><?php  if($row['paytype']==1) { ?>
						余额支付
						<?php  } else if($row['paytype']==21) { ?>
						微支付
						<?php  } else if($row['paytype']==22) { ?>
						支付宝
						<?php  } else if($row['paytype']==3 ) { ?>
						到店付款
						<?php  } else if($row['paytype']==0 ) { ?>
						未支付(或其它)
						<?php  } ?>
					</td>
					<td ><?php  echo date("Y-m-d H:i:s",$row['time']); ?></td>
					<td>
						<?php  if($row['paystatus']==0) { ?>
						<?php  if($row['status'] == 0) { ?><span class="label label-info">已提交订单，待付款</span><?php  } ?>
						<?php  if($row['status'] == -1) { ?><span class="label label-default">已取消</span><?php  } ?>
						<?php  if($row['status'] == 1) { ?><span class="label label-success">已接受</span><?php  } ?>
						<?php  if($row['status'] == 2) { ?><span class="label label-default">已拒绝</span><?php  } ?>
						<?php  if($row['status'] == 4) { ?><span class="label label-success">已入住</span><?php  } ?>
						<?php  if($row['status'] == 3) { ?><span class="label label-success">订单完成</span><?php  } ?>
						<?php  } else { ?>
						<?php  if($row['status'] == 0) { ?><span class="label label-info">
						<?php  if($row['paytype']=='3') { ?>待付款<?php  } else { ?>已支付，等待确认<?php  } ?></span><?php  } ?>
						<?php  if($row['status'] == -1) { ?><span class="label label-default">
						<?php  if($row['paytype'] == 3) { ?>已取消<?php  } else { ?>已支付,取消并退款<?php  } ?></span><?php  } ?>
						<?php  if($row['status'] == 1) { ?><span class="label label-success">已确认,已接受</span><?php  } ?>
						<?php  if($row['status'] == 2) { ?><span class="label label-default">已支付, 已退款</span><?php  } ?>
						<?php  if($row['status'] == 4) { ?><span class="label label-success">已入住</span><?php  } ?>
						<?php  if($row['status'] == 3) { ?><span class="label label-success">订单完成</span><?php  } ?>
						<?php  } ?>
					</td>
					<td>
						<?php  if(!empty($version)) { ?>
						<div class="dropdown" style="display: inline-block">
							<a id="dLabel" data-target="#" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" class="btn btn-default btn-sm"><i class="fa fa-print"></i></a>
							<ul class="dropdown-menu" aria-labelledby="dLabel">
								<?php  if(!empty($row['printers'])) { ?>
									<?php  if(is_array($row['printers'])) { foreach($row['printers'] as $p) { ?>
									<li><a onclick="return confirm('是否打印小票?');return false;" href="<?php  echo $this->createWebUrl('order', array('op'=>'print_order', 'id' => $row['id'], 'storeid' => $row['hotelid'], 'print' => $p['id']))?>"><?php  echo $p['name'];?></a></li>
									<?php  } } ?>
								<?php  } else { ?>
									<li><a href="<?php  echo $this->createWebUrl('order', array('op'=>'check_print_plugin'))?>" target="_blank">添加打印机</a></li>
								<?php  } ?>
							</ul>
						</div>
						<?php  } ?>
						<?php  if($row['status'] != -1 && $row['status'] != 3 && $row['status'] != 2 && $row['paystatus'] == 0) { ?>
						<a href="javascript:;" class="btn btn-default btn-sm change_price" data-id="<?php  echo $row['id'];?>" data-price="<?php  echo $row['sum_price'];?>">修改总价</a>
						<?php  } ?>
						<a href="<?php  echo $this->createWebUrl('order', array('op'=>'edit', 'id' => $row['id'], 'roomid' => $row['roomid'], 'hotelid' => $row['hotelid'], 'store_type' => $store_type)); ?>" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="bottom" title="编辑"><i class="fa fa-edit"></i></a>&nbsp;
						<a onclick="return confirm('此操作不可恢复，取消删除吗?');return false;" href="<?php  echo $this->createWebUrl('order', array('op'=>'delete', 'id' => $row['id'], 'hotelid' => $row['hotelid'], 'roomidid' => $row['roomid'], 'store_type' => $store_type))?>" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="bottom" title="删除"><i class="fa fa-times"></i></a>
					</td>
				</tr>
				<?php  } } ?>
				<tr>
					<td colspan="12">
						<input type="button" class="btn btn-primary" name="deleteall" value="删除选择的" />
					</td>
				</tr>
				</tbody>
				<input name="token" type="hidden" value="<?php  echo $_W['token'];?>" />
			</table>
		</div>
	</div>
	<?php  echo $pager;?>
</div>
<script>
	require(['bootstrap'],function($){
		$('.btn').tooltip();
	});
</script>
<script>
	$(function(){

		$(".check_all").click(function(){
			var checked = $(this).get(0).checked;
			$(':checkbox').each(function(){this.checked = checked});
		});
		$("input[name=deleteall]").click(function(){

			var check = $("input:checked");
			if(check.length<1){
				alert('请选择要删除的记录!');
				return false;
			}
			if( confirm("确认要删除选择的记录?")){
				var id = new Array();
				check.each(function(i){
					id[i] = $(this).val();
				});

				$.post("<?php  echo $this->createWebUrl('order',array('op'=>'deleteall'))?>", {idArr:id}, function(data) {
					if (data.message.errno ==0) {
						util.message(data.message.message, 'refresh', 'success');
					} else {
						util.message(data.message.message);
					}
				},'json');
			}

		});
	});
	$('.change_price').click(function() {
		order_id = $(this).data('id');
		$('input[name="order_id"]').val(order_id);
		$('#quantity-modal').modal();
	});
</script>
<script>
	function drop_confirm(msg, url){
		if(confirm(msg)){
			window.location = url;
		}
	}
	function check_price(){
		var price = $('input[name=sum_price]').val();
		var orderid = $('input[name=order_id]').val();
		price = Number(price);
		if (price < 0.01 || price > 99999999.99) {
			util.message('价格错误！', 'refresh', 'error');
			return;
		} else {
			$.post("<?php  echo $this->createWebUrl('order',array('op'=>'edit_price'))?>", {sum_price:price, id:orderid},function(data){
				if (data.message.errno == 0) {
					util.message(data.message.message, 'refresh', 'success');
					return;
				} else {
					util.message(data.message.message);
					return;
				}
			},'json');
		}
	}
</script>

<?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('common/footer', TEMPLATE_INCLUDEPATH)) : (include template('common/footer', TEMPLATE_INCLUDEPATH));?>
