<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('common/header', TEMPLATE_INCLUDEPATH)) : (include template('common/header', TEMPLATE_INCLUDEPATH));?>
<?php  load()->func('tpl')?>
<?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('common', TEMPLATE_INCLUDEPATH)) : (include template('common', TEMPLATE_INCLUDEPATH));?>
<div class="main">
<ul class="nav nav-tabs">
	<li <?php  if($_GPC['op'] == 'edit') { ?>class="active"<?php  } ?>>
		<a href="javascript:;" data-toggle="modal" data-target="#store-modal">
			<?php  if($_GPC['op'] == 'edit' && $_GPC['id'] != '') { ?>
			编辑房源
			<?php  } else { ?>
			添加房源
		<?php  } ?>
		</a>
	</li>
	<li <?php  if(empty($_GPC['op'])) { ?>class="active"<?php  } ?> ><a href="<?php  echo $this->createWebUrl('goodsmanage', array('hotelid' => $rid));?>">房源管理</a></li>
</ul>
<!-- href="<?php  echo $this->createWebUrl('goodsmanage', array('op'=>'edit', 'store_base_id' => $_GPC['store_base_id']));?> -->
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
						<div class="help-block">酒店</div>
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
<form action="" class="form-horizontal form" method="post" enctype="multipart/form-data" onsubmit="return formcheck()">
<input type="hidden" name="id" value="<?php  echo $item['id'];?>">
	<input type="hidden" name="store_type" value="<?php  echo $store_type;?>">
<div class="panel panel-default">
	<div class="panel-heading">
		<?php  if($_GPC['op'] == 'edit' && $_GPC['id'] != '') { ?>
		编辑房源
		<?php  } else { ?>
		添加房源
		<?php  } ?>
	</div>
	<div class="panel-body">
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">选择店铺</label>
			<div class="col-sm-8 col-lg-9 col-xs-12">
				<input type="text" disabled value="<?php  echo $stores[$_GPC['store_base_id']]['title'];?>" class="form-control">
				<span class='help-block'>请先选择店铺</span>
			</div>
		</div>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">房源类型</label>
			<div class="col-sm-9 col-xs-12">
				<label class="radio-inline">
					<input type="radio" value="0" class="change_breakfast" name="type" <?php  if($item['type']==0 || empty($item['type'])) { ?>checked<?php  } ?>/> 城市房源
				</label>
				<label class="radio-inline">
					<input type="radio" value="1" class="change_breakfast" name="type" <?php  if($item['type']==1) { ?>checked<?php  } ?>/> 景区房源
				</label>
				<label class="radio-inline">
					<input type="radio" value="2" class="change_breakfast" name="type" <?php  if($item['type']==2) { ?>checked<?php  } ?>/> 温泉房源
				</label>
			</div>
		</div>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">预定设置</label>
			<div class="col-sm-9 col-xs-12">
				<label class="radio-inline">
					<input type="radio" name="can_reserve" value="1" <?php  if(!isset($item['can_reserve']) ||  $item['can_reserve'] == 1) { ?> checked <?php  } ?> onclick="$('.reserve_device').show();"/>可预定
				</label>
				<label class="radio-inline">
					<input type="radio" name="can_reserve" value="0" <?php  if(isset($item['can_reserve']) && $item['can_reserve'] == 0) { ?> checked <?php  } ?> onclick="$('.reserve_device').hide();"/>不可预定
				</label>
				<span class="help-block">预定不支持线上支付，请谨慎选择</span>
			</div>
		</div>
		<div class="form-group reserve_device" <?php  if($item['can_reserve'] != 1) { ?> style="display:none"<?php  } ?>>
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">预定说明</label>
			<div class="col-sm-9 col-xs-12">
				<?php  echo tpl_ueditor('reserve_device', $item['reserve_device']);?>
				<span class="help-block">房源预定说明（选填）</span>
			</div>
		</div>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">购买设置</label>
			<div class="col-sm-9 col-xs-12">
				<label class="radio-inline">
					<input type="radio" name="can_buy" value="1" <?php  if(!isset($item['can_buy']) || $item['can_buy'] == 1) { ?> checked <?php  } ?>"/>可购买
				</label>
				<label class="radio-inline">
					<input type="radio" name="can_buy" value="0" <?php  if(isset($item['can_buy']) && $item['can_buy'] == 0) { ?> checked <?php  } ?>"/>不可购买
				</label>
			</div>
		</div>
		<?php  if(($storex_bases['category_set'] == 1) ) { ?>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label"><span style='color:red'>*</span>分类</label>
			<div class="col-sm-8 col-xs-12">
				<?php  echo tpl_form_field_category_2level('category', $parent, $children, $item['pcate'], $item['ccate'])?>
				<span class="help-block">二级分类存在则必选，否则不显示房源</span>
			</div>
		</div>
		<?php  } ?>
		<!-- 
		<?php  if($store_type == 1) { ?>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">房源类型</label>
			<div class="col-sm-9 col-xs-12">
				<label class="radio-inline">
					<input type="radio" name="is_house" value="1" <?php  if(!isset($item['is_house']) || $item['is_house'] == 1) { ?> checked <?php  } ?> onclick="$('#hotel_add_info').show()"/>房源
				</label>
				<label class="radio-inline">
					<input type="radio" name="is_house" value="2" <?php  if($item['is_house'] == 2) { ?> checked <?php  } ?> onclick="$('#hotel_add_info').hide()"/>非房源
				</label>
			</div>
		</div>
		<?php  } ?>
		 -->
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">房源名称(类型)</label>
			<div class="col-sm-9 col-xs-12">
				<input type="text" name="title" id="title" value="<?php  echo $item['title'];?>" class="form-control">
			</div>
		</div>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">房源已售</label>
			<div class="col-sm-9 col-xs-12">
				<input type="text" name="sold_num" id="sold_num" value="<?php  echo $item['sold_num'];?>" class="form-control">
			</div>
		</div>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">前台价(原价)</label>
			<div class="col-sm-9 col-xs-12">
				<input type="text" name="oprice" id="oprice" value="<?php  echo $item['oprice'];?>" class="form-control">
			</div>
		</div>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">优惠价(现价)</label>
			<div class="col-sm-9 col-xs-12">
				<input type="text" name="cprice" id="cprice" value="<?php  echo $item['cprice'];?>" class="form-control">
			</div>
		</div>
		<span <?php  if($store_type == 1 && $item['is_house'] != 2) { ?> style="display:none" <?php  } ?> id="express_info">
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">运费设置</label>
			<div class="col-sm-9 col-xs-12">
				<div class="input-group">
					<span class="input-group-addon">默认运费</span>
					<input type="text" class="form-control" name="express" value="<?php  echo $item['express_set']['express'];?>"/>
					<span class="input-group-addon">满</span>
					<input type="text" class="form-control" name="full_free" value="<?php  echo $item['express_set']['full_free'];?>"/>
					<span class="input-group-addon">免运费</span>
				</div>
			</div>
		</div>
		</span>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">缩略图</label>
			<div class="col-sm-9 col-xs-12">
				<?php  echo tpl_form_field_image('thumb',$item['thumb'])?>
			</div>
		</div>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">房源图片</label>
			<div class="col-sm-9 col-xs-12">
				<?php  echo tpl_form_field_multi_image('thumbs',$piclist)?>
			</div>
		</div>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">房源全景</label>
			<div class="col-sm-9 col-xs-12">
				<input type="text" name="quanjing" id="quanjing" value="<?php  echo $item['quanjing'];?>" class="form-control">
			</div>
		</div>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">房源排序编号</label>
			<div class="col-sm-9 col-xs-12">
				<input type="text" name="sortid" id="sortid" value="<?php  echo $item['sortid'];?>" class="form-control">
				<span class="help-block">数字越大排序越靠前</span>
			</div>
		</div>
		<?php  if($card_status == 1) { ?>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">购买积分</label>
			<div class="col-sm-9 col-xs-12">
				<input type="text" name="score" id="score" class="form-control" value="<?php  echo $item['score'];?>" placeholder='此积分为会员购买该房源时赠送的积分' />
			</div>
		</div>
		<?php  } ?>
		<span <?php  if($store_type != 1 || (isset($item['is_house']) && $item['is_house'] == 2)) { ?>style="display: none"<?php  } ?> id="hotel_add_info">
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">早餐设置</label>
			<div class="col-sm-9 col-xs-12">
				<label class="radio-inline">
					<input type="radio" value="0" class="change_breakfast" name="breakfast" <?php  if($item['breakfast']==0 || empty($item['breakfast'])) { ?>checked<?php  } ?>/> 无早
				</label>
				<label class="radio-inline">
					<input type="radio" value="1" class="change_breakfast" name="breakfast" <?php  if($item['breakfast']==1) { ?>checked<?php  } ?>/> 单早
				</label>
				<label class="radio-inline">
					<input type="radio" value="2" class="change_breakfast" name="breakfast" <?php  if($item['breakfast']==2) { ?>checked<?php  } ?>/> 双早
				</label>
			</div>
		</div>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">服务费</label>
			<div class="col-sm-9 col-xs-12">
				<input type="text" name="service" id="" value="<?php  echo $item['service'];?>" class="form-control">
			</div>
		</div>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">房间参数</label>
			<div class="col-sm-4">
				<div class="input-group">
					<span class="input-group-addon">
						<label class='checkbox-inline' style='margin-top:-5px;' > <input type='checkbox' id='bed_show' name="bed_show" value="1"  <?php  if($item['bed_show']==1) { ?>checked<?php  } ?>/> 床位</label>
					</span>
					<input type="text" name="bed" id="bed" class="form-control" value="<?php  echo $item['bed'];?>" />
					<span class="input-group-addon">例如: 2</span>
				</div>
			</div>
			<div class="col-sm-4">
				<div class="input-group">
					<span class="input-group-addon">
						<label class='checkbox-inline' style='margin-top:-5px;' > <input type='checkbox' id='floor_show' name="floor_show" value="1" <?php  if($item['floor_show']==1) { ?>checked<?php  } ?>/> 可住人数</label>
					</span>
					<input type="text" name="floor" id="floor" class="form-control" value="<?php  echo $item['floor'];?>" />
					<span class="input-group-addon">人</span>
				</div>
			</div>
		</div>
		<!-- 
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label"></label>
			<div class="col-sm-4">
				<div class="input-group">
				<span class="input-group-addon">
					<label class='checkbox-inline' style='margin-top:-5px;' > <input type='checkbox' id='area_show' name="area_show" value="1" <?php  if($item['area_show']==1) { ?>checked<?php  } ?> /> 房间面积</label></span>
					<input type="text" name="area" id="area" class="form-control" value="<?php  echo $item['area'];?>" />
					<span class="input-group-addon">平方米</span>
				</div>
			</div>
			<div class="col-sm-4">
				<div class="input-group">
				<span class="input-group-addon">
					<label class='checkbox-inline ' style='margin-top:-5px;' > <input type='checkbox' id='bedadd_show' name="bedadd_show" value="1" <?php  if($item['bedadd_show']==1) { ?>checked<?php  } ?>/> 是否可加床</label></span>
					<input type="text" name="bedadd" id="bedadd" class="form-control" value="<?php  echo $item['bedadd'];?>" placeholder='加床说明' />

				</div>
			</div>
		</div>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label"></label>
			<div class="col-sm-4">
				<div class="input-group">
				<span class="input-group-addon">
					<label class='checkbox-inline' style='margin-top:-5px;' > <input type='checkbox' id='smoke_show' name="smoke_show" value="1" <?php  if($item['smoke_show']==1) { ?>checked<?php  } ?>/> 无烟房</label></span>
					<input type="text" name="smoke" id="smoke" class="form-control" value="<?php  echo $item['smoke'];?>" />
					<span class="input-group-addon">无烟房说明</span>
				</div>
			</div>
			<div class="col-sm-4">
				<div class="input-group">
				<span class="input-group-addon">
					<label class='checkbox-inline' style='margin-top:-5px;' > <input type='checkbox' id='persons_show' name="persons_show" value="1" <?php  if($item['persons_show']==1) { ?>checked<?php  } ?>/> 入住人数</label></span>
					<input type="text" name="persons" id="persons" class="form-control" value="<?php  echo $item['persons'];?>" />
					<span class="input-group-addon">人</span>
				</div>
			</div>
		</div>
		 -->
		</span>
		<!-- 普通店铺的属性  -->
		<sapn <?php  if($store_type != 0) { ?>style="display: none"<?php  } ?> id="goods_add_info">
		
		</sapn>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">促销信息</label>
			<div class="col-sm-9 col-xs-12">
				<textarea style="height:100px;" id="sales" class="form-control" name="sales" cols="70" id="reply-add-text"><?php  echo $item['sales'];?></textarea>
				<span class="help-block">房源的促销信息（选填）</span>
			</div>
		</div>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">房源说明</label>
			<div class="col-sm-9 col-xs-12">
				<?php  echo tpl_ueditor('device', $item['device']);?>
				<span class="help-block">房源特别说明（必填）</span>
			</div>
		</div>
		<div class="form-group">
			<label class="col-xs-12 col-sm-3 col-md-2 control-label">状态</label>
			<div class="col-sm-9 col-xs-12">
				<label class="radio-inline">
					<input type="radio" name="status" value="1" <?php  if($item['status'] == 1) { ?>checked<?php  } ?>/>显示
				</label>
				<label class="radio-inline">
					<input type="radio" name="status" value="0" <?php  if($item['status'] == 0) { ?>checked<?php  } ?>/>隐藏
				</label>
				<span class='help-block'>手机前台是否显示</span>
			</div>
		</div>
	</div>
</div>
<div class="form-group col-sm-12">
	<input type="submit" name="submit" value="提交" class="btn btn-primary col-lg-1" />
	<input type="hidden" name="token" value="<?php  echo $_W['token'];?>" />
</div>

</form>

<script type="text/javascript">
	var parent = '<?php  echo json_encode($parent);?>';
	parent = $.parseJSON(parent);
	$(function(){
		$("#category_parent").change(function(){
			var selectid =$(this).find("option:selected").val();
			if (parent[selectid].category_type == 1) {
				$('#hotel_add_info').show();
				$('#express_info').hide();
				
			} else {
				$('#hotel_add_info').hide();
				$('#express_info').show();
			}
		});
	})
	
	function search_hotels() {
		$("#module-menus").html("正在搜索....")
		$.post('<?php  echo $this->createWebUrl('hotel',array('op'=>'query'));?>', {
			keyword: $.trim($('#search-kwd').val()),
			industry: $.trim($("#industry").val()),
			nature: $.trim($("#nature").val()),
			scale: $.trim($("#scale").val())
		}, function(dat){
			$('#module-menus').html(dat);
		});
	}
	function select_hotel(o) {
		$("#hotelid").val(o.id);
		$("#hotel").val( o.title );
		$(".close").click();
	}

	function formcheck() {
		if ($("#hotel").isEmpty()) {
			Tip.focus("hotel", "请选择所属酒店!", "right");
			return false;
		}
		if ($("#title").isEmpty()) {
			Tip.focus("title", "请填写房源名称!", "right");
			return false;
		}
		return true;
	}
	$(function(){

		$('.change_breakfast').click(function() {
			var value = $(this).val();
			var name = $("#title").val();
			var new_name = name.replace(/\[含早\]/g,'');

			if (value == 0) {
				$("#title").val(new_name);
			} else  {
				$("#title").val(new_name + "[含早]");
			}
		});
	});

</script>
<?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('common/footer', TEMPLATE_INCLUDEPATH)) : (include template('common/footer', TEMPLATE_INCLUDEPATH));?>
