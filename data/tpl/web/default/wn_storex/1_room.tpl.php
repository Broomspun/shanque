<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('common/header', TEMPLATE_INCLUDEPATH)) : (include template('common/header', TEMPLATE_INCLUDEPATH));?>
<?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('common', TEMPLATE_INCLUDEPATH)) : (include template('common', TEMPLATE_INCLUDEPATH));?>
<div class="main">
	<ul class="nav nav-tabs">
		<li <?php  if($op == 'post' && !$couponid) { ?>class="active"<?php  } ?>><a href="javascript:;" data-toggle="modal" data-target="#store-modal">添加房源</a></li>
		<li class="active"><a href="<?php  echo $this->createWebUrl('goodsmanage', array('hotelid' => $rid, 'is_hotel' => 1));?>">房源管理</a></li>
	</ul>
	<div class="modal fade" id="store-modal" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">选择你要创建的店铺房源</h4>
				</div>
				<div class="modal-body clearfix form-horizontal">
					<?php  if(!empty($stores)) { ?>
					<?php  if(is_array($stores)) { foreach($stores as $store) { ?>
					<?php  if($store['store_type'] == 1) { ?>
					<div class="form-group marbot0">
						<label class="col-xs-12 col-sm-3 col-md-2 control-label"></label>
						<div class="col-sm-9 col-xs-12">
							<label class="radio-inline">
								<input type="radio" name="type" value="<?php  echo $store['id'];?>"/>
								<?php  echo $store['title'];?>
							</label>
							<div class="help-block">房源</div>
						</div>
					</div>
					<?php  } else { ?>
					<div class="form-group marbot0">
						<label class="col-xs-12 col-sm-3 col-md-2 control-label"></label>
						<div class="col-sm-9 col-xs-12">
							<label class="radio-inline">
								<input type="radio" name="type" value="<?php  echo $store['id'];?>"/>
								<?php  echo $store['title'];?>
							</label>
							<div class="help-block">普通店铺</div>
						</div>
					</div>
					<?php  } ?>
					<?php  } } ?>
					<?php  } ?>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal" onclick="location.href='<?php  echo $this->createWeburl('goodsmanage', array('op' => 'edit'))?>&store_base_id=' + $('#store-modal input[type=radio]:checked').val()">确定</button>
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
				<input type="hidden" name="do" value="goodsmanage" />
				<input type="hidden" name="store_type" value="<?php  echo $store_type;?>">
				<div class="form-group">
					
					<div class="col-sm-7 col-lg-9 col-xs-12 btn-group">
						
						<a href="<?php  echo filter_url('store_type:1');?>" class="btn <?php  if($store_type == 1) { ?>btn-primary<?php  } else { ?>btn-default<?php  } ?>">房源</a>
					</div>
				</div>
			</form>
			<form action="./index.php" method="get" class="form-horizontal" role="form">
				<input type="hidden" name="c" value="site" />
				<input type="hidden" name="a" value="entry" />
				<input type="hidden" name="m" value="wn_storex" />
				<input type="hidden" name="do" value="goodsmanage" />
				<input type="hidden" name="store_type" value="<?php  echo $store_type;?>">
				<div class="form-group">
					<label class="col-xs-12 col-sm-2 col-md-2 col-lg-1 control-label">店铺</label>
					<div class=" col-xs-12 col-sm-8 col-lg-9">
						<input class="form-control" name="hoteltitle"  type="text" value="<?php  if(!empty($hotel)) { ?><?php  echo $hotel['title'];?><?php  } else { ?><?php  echo $_GPC['hoteltitle'];?><?php  } ?>">
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-2 col-md-2 col-lg-1 control-label">房源名称</label>
					<div class="col-xs-12 col-sm-8 col-lg-9">
						<input class="form-control" name="title" id="" type="text" value="<?php  echo $_GPC['title'];?>">
					</div>
					<div class=" col-xs-12 col-sm-2 col-lg-2">
						<button class="btn btn-default"><i class="fa fa-search"></i> 搜索</button>
					</div>
				</div>
				<div class="form-group">
				</div>
			</form>
		</div>
	</div>

	<div class="panel panel-default">
		<div class="panel-body table-responsive">
		<!--<button class="btn pull-left btn-primary span2" id="room_status" onClick="location.href='<?php  echo $this->createWebUrl('room_status')?>'">批量修改房态</button>-->
		<!--<button class="btn pull-left btn-primary span2" id="room_price" onClick="location.href='<?php  echo $this->createWebUrl('room_price')?>'">批量修改房价</button>-->
		<!--<br/><br/>-->
		<table class="table table-hover" >
			<thead class="navbar-inner">
			<tr>
				<th class='with-checkbox' style='width:30px;'>
					<input type="checkbox" class="check_all" />
				</th>
				<th style="width:120px;">房源</th>
				<th style="width:100px;">分类</th>
				<th style="width:150px;">房源名称</th>
				<?php  if(!empty($store_type)) { ?>
				<th style="width:100px;">房源类型</th>
				<th style="width:100px;">房源排序号</th>
				<?php  } else { ?>
				<th style="width:100px;">房源排序号</th>
				<?php  } ?>
				<th style='width:200px;'>前台价（原价)</th>
				<th style='width:120px;'>优惠价（现价)</th>
				<th style='width:100px;'>积分</th>
				<th style='width:100px;'>状态</th>
				<th style="width:420px;">操作</th>
			</tr>
			</thead>
			<tbody>
			<?php  if(is_array($list)) { foreach($list as $item) { ?>
			<tr>
				<td class="with-checkbox">
				<input type="checkbox" name="check" value="<?php  echo $item['id'];?>">
				</td>
				<td><?php  echo $item['hoteltitle'];?></td>
				<td><?php  if($item['type'] == 0) { ?>城市房源<?php  } ?><?php  if($item['type'] == 1) { ?>景区房源<?php  } ?><?php  if($item['type'] == 2) { ?>温泉房源<?php  } ?></td>
				
				<td><?php  echo $item['title'];?></td>
				<?php  if($store_type == 1) { ?>
					<?php  if($item['is_house'] == 1) { ?>
					<td>房源</td>
					<?php  } else { ?>
					<td>非房源</td>
					<?php  } ?>
				<?php  } ?>
				<td><?php  echo $item['sortid'];?></td>
				<td><?php  echo $item['oprice'];?></td>
				<td><?php  echo $item['cprice'];?></td>
				<td><?php  echo $item['score'];?></td>
				<td><?php  if($item['status']==1) { ?>
					<span class='label label-success'>显示</span>
					<?php  } else { ?>
					<span class='label label-default'>隐藏</span>
					<?php  } ?>
				</td>
				<td>
					<?php  if(!empty($store_type)) { ?>
					<a href="<?php  echo $this->createWebUrl('goodsmanage',array('op'=>'copyroom','store_base_id'=>$item['hotelid'],'id'=>$item['id']))?>" class="btn  btn-default" data-toggle="tooltip" data-placement="bottom" title="复制房源">复制房源</a>
					<a href="<?php  echo $this->createWebUrl('goodscomment',array('store_base_id'=>$item['hotelid'],'id'=>$item['id'],'store_type'=> $store_type))?>" class="btn  btn-default" data-toggle="tooltip" data-placement="bottom" title="查看评价">查看评价</a>
					<a href="<?php  echo $this->createWebUrl('order',array('hotelid'=>$item['hotelid'],'roomid'=>$item['id'], store_type => $store_type))?>" class="btn  btn-default" data-toggle="tooltip" data-placement="bottom" title="订单查看">订单查看</a>
					<?php  } else { ?>
					<a href="<?php  echo $this->createWebUrl('goodsmanage',array('op'=>'copyroom','store_base_id'=>$item['store_base_id'],'id'=>$item['id']))?>" class="btn  btn-default" data-toggle="tooltip" data-placement="bottom" title="复制房源">复制房源</a>
					<a href="<?php  echo $this->createWebUrl('goodscomment',array('store_base_id'=>$item['store_base_id'],'id'=>$item['id'],'store_type'=> $store_type))?>" class="btn  btn-default" data-toggle="tooltip" data-placement="bottom" title="查看评价">查看评价</a>
					<a href="<?php  echo $this->createWebUrl('order',array('hotelid'=>$item['store_base_id'],'roomid'=>$item['id'], store_type => $store_type))?>" class="btn  btn-default" data-toggle="tooltip" data-placement="bottom" title="订单查看">订单查看</a>
					<?php  } ?>
					<a class="btn btn-default" data-toggle="tooltip" data-placement="bottom" href="<?php  echo $this->createWebUrl('goodsmanage',array('op'=>'edit','store_type'=> $store_type,'id'=>$item['id'],'store_base_id'=>$item['store_base_id']))?>" title="编辑"><i class="fa fa-edit"></i></a>
					<?php  if($item['status']==0) { ?>
					<a class="btn btn-default" title="显示" href="#" onclick="drop_confirm('您确定要显示此房源吗?', '<?php  echo $this->createWebUrl('goodsmanage',array('op'=>'status','status'=>1, 'id'=>$item['id'], 'store_type' => $store_type))?>');" data-toggle="tooltip" data-placement="bottom"><i class="fa fa-play"></i></a>
					<?php  } else if($item['status']==1) { ?>
					<a class="btn btn-default" title="隐藏" href="#" onclick="drop_confirm('您确定要隐藏此房源吗?', '<?php  echo $this->createWebUrl('goodsmanage',array('op'=>'status','status'=>0, 'id'=>$item['id'], 'store_type' => $store_type))?>');" data-toggle="tooltip" data-placement="bottom"><i class="fa fa-stop"></i></a>
					<?php  } ?>
					<a class="btn btn-default" href="#" onclick="drop_confirm('您确定要删除吗?', '<?php  echo $this->createWebUrl('goodsmanage',array('op'=>'delete', 'id'=>$item['id'], 'store_type' => $store_type))?>');" title="删除" data-toggle="tooltip" data-placement="bottom"><i class="fa fa-times"></i></a>
				</td>
			</tr>
			<?php  } } ?>
			<tr>
				<?php  if($store_type == 1) { ?>
				<td colspan="12">
				<?php  } else { ?>
				<td colspan="11">
				<?php  } ?>
					<input type="button" class="btn btn-primary" name="deleteall" value="删除选择的" />
					<input type="button" class="btn btn-primary edit_all" name="showall" value="批量显示" />
					<input type="button" class="btn btn-primary edit_all" name="hideall" value="批量隐藏" />
				</td>
			</tr>
			</tbody>
			<input name="token" type="hidden" value="<?php  echo $_W['token'];?>" />
		</table>
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
			$("input[type=checkbox]").prop("checked",checked);
		});
		$("input[name=deleteall]").click(function(){
			var check = $("input[name='check']:checked");
			if(check.length < 1){
				alert('请选择要删除的记录!');
				return false;
			}
			if( confirm("确认要删除选择的记录?")){
				var id = new Array();
				check.each(function(i){
					id[i] = $(this).val();
				});
				$.post("<?php  echo $this->createWebUrl('goodsmanage',array('op'=>'deleteall'))?>", {idArr:id},function(data){
					if (data.message.errno ==0) {
						util.message(data.message.message, 'refresh', 'success');
					} else {
						util.message(data.message.message);
					}
				},'json');
			}
		});
		
		$(".edit_all").click(function(){
			var name = $(this).attr('name');
			var check = $("input:checked");
			if(check.length<1){
				alert('请选择要操作的记录!');
				return false;
			}
			var id = new Array();
			check.each(function(i){
				id[i] = $(this).val();
			});
			$.post("<?php  echo $this->createWebUrl('goodsmanage',array('op'=>'showall', 'store_type'=>$store_type))?>", {idArr:id,show_name:name},function(data){
				if (data.message.errno ==0) {
					util.message(data.message.message, 'refresh', 'success');
				} else {
					util.message(data.message.message);
				}
			},'json');
		});
	});
</script>
<script>
	function drop_confirm(msg, url){
		if(confirm(msg)){
			window.location = url;
		}
	}
</script>

<?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('common/footer', TEMPLATE_INCLUDEPATH)) : (include template('common/footer', TEMPLATE_INCLUDEPATH));?>
