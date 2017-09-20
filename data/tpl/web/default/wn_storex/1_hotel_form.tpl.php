<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('common/header', TEMPLATE_INCLUDEPATH)) : (include template('common/header', TEMPLATE_INCLUDEPATH));?>

<?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('common', TEMPLATE_INCLUDEPATH)) : (include template('common', TEMPLATE_INCLUDEPATH));?>

<style>
	.item{position:relative;display:block;float:left;border:1px #ddd solid;border-radius:5px;background-color:#fff;padding:5px;width:190px;margin:0 20px 20px 0; overflow:hidden;}
	.title{margin:5px auto;line-height:2em;}
	.item img{width:178px;height:270px; cursor:pointer;}
	.item-style:hover img{width:178px;height:270px;border:3px #009cd6 solid;padding:1px; }
	.title .fa{display:none}
</style>
<div class="main">
	<ul class="nav nav-tabs">
		<li <?php  if($op=='list' || empty($op)) { ?>class="active"<?php  } ?>><a href="<?php  echo $this->createWebUrl('storemanage',array('op'=>'list'));?>">房东管理</a></li>
		<li <?php  if($op=='edit' && empty($item['id'])) { ?>class="active"<?php  } ?>><a href="<?php  echo $this->createWebUrl('storemanage',array('op'=>'edit'));?>">添加房东</a></li>
		<?php  if($op=='edit' && !empty($item['id'])) { ?><li class="active"><a href="<?php  echo $this->createWebUrl('storemanage', array('op'=>'edit','id'=>$id));?>">编辑房东</a></li><?php  } ?>
	</ul>
	<form action="" class="form-horizontal form" method="post" enctype="multipart/form-data" onsubmit="return formcheck()">
		<input type="hidden" name="id" value="<?php  echo $item['id'];?>">
		<div class="panel panel-default">
			<div class="panel-heading">
				房东基本信息
			</div>
			<div class="panel-body">
				<div class="form-group">
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">店铺类型</label>
					<div class="col-sm-9 col-xs-12">
						<label class="radio-inline">
							<!--<input type="radio" name="store_type" value="1" <?php  if($item['store_type'] == 1) { ?>checked<?php  } ?> onclick="$('#store_add_info').show();$('#distance_info').hide()"/>酒店-->
							<input type="radio" name="store_type" value="1"  onclick="$('#store_add_info').show();$('#distance_info').hide()"/>短租房
						</label>
						<!--<label class="radio-inline">
							<input type="radio" name="store_type" value="0" <?php  if($item['store_type'] == 0) { ?>checked<?php  } ?> onclick="$('#store_add_info').hide();$('#distance_info').show()"/>普通店铺
						</label>-->
						<span class='help-block'>店铺类型决定店铺的填写信息，慎重选择</span>
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">店铺皮肤</label>
					<div class="col-sm-9 col-xs-12">
						<label class="radio-inline">
							<div class="item item-style <?php  if($item['skin_style'] == 'display') { ?> active<?php  } ?>">
								<div class="title">
									<div style="overflow:hidden; height:28px;center:auto">经典皮肤
										<input style="margin-left:10px" type="radio" name="skin_style" value="display" <?php  if($item['skin_style'] == 'display') { ?>checked<?php  } ?>/>
									</div>
									<img src="../addons/wn_storex/display.png" class="img-rounded" />
									<span class="fa fa-check"></span>
								</div>
							</div>
						</label>
						<label class="radio-inline">
							<div class="item item-style <?php  if($item['skin_style'] == 'black') { ?> active<?php  } ?>">
								<div class="title">
									<div style="overflow:hidden; height:28px;">黑色皮肤（酒店）
										<input style="margin-left:10px;" type="radio" name="skin_style" value="black" <?php  if($item['skin_style'] == 'black') { ?>checked<?php  } ?>/>
									</div>
									<img src="../addons/wn_storex/black.png" class="img-rounded" />
									<span class="fa fa-check"></span>
								</div>
							</div>
						</label>
						<span class='help-block'>店铺皮肤决定店铺的直观体验，慎重选择（黑色皮肤是酒店专用）</span>
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">排序</label>
					<div class="col-sm-9 col-xs-12">
						<input type="text" id="displayorder" name="displayorder"  class="form-control" value="<?php  echo $item['displayorder'];?>">
						<span class='help-block'>数字越大排名越高</span>
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">店铺名称</label>
					<div class="col-sm-9 col-xs-12">
						<input type="text" name="title" id="title"  class="form-control" value="<?php  echo $item['title'];?>">
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">分类设置</label>
					<div class="col-sm-9 col-xs-12">
						<label class="radio-inline">
							<input type="radio" name="category_set" value="1" <?php  if($item['category_set'] == 1) { ?> checked <?php  } ?>"/>开启
						</label>
						<label class="radio-inline">
							<input type="radio" name="category_set" value="2" <?php  if($item['store_type'] == 1) { ?> onclick="confirm('关闭分类将隐藏非酒店类的房源！')" <?php  } ?> <?php  if($item['category_set'] == 2) { ?> checked <?php  } ?>"/>关闭
						</label>
						<span class='help-block'>添加房源的时候选择分类的设置，关闭则根据该房东的类型显示房源，例如（房东关闭分类，则只显示房源）请慎重选择</span>
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">运营时间</label>
					<div class="col-sm-4 col-xs-6">
						<?php  echo tpl_form_field_clock('timestart', $item['timestart'])?>
					</div>
					<div class="col-sm-4 col-xs-6">
						<?php  echo tpl_form_field_clock('timeend', $item['timeend'])?>
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">LOGO/缩略图</label>
					<div class="col-sm-9 col-xs-12">
						<?php  echo tpl_form_field_image('thumb',$item['thumb'])?>
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">首页图片</label>
					<div class="col-sm-9 col-xs-12">
						<?php  echo tpl_form_field_multi_image('thumbs',$item['thumbs'])?>
						<span class='help-block'>图片尺寸 （750*1232）</span>
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">详情页图片</label>
					<div class="col-sm-9 col-xs-12">
						<?php  echo tpl_form_field_multi_image('detail_thumbs',$item['detail_thumbs'])?>
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">店铺电话</label>
					<div class="col-sm-9 col-xs-12">
						<input type="text" id="phone" name="phone"  class="form-control" value="<?php  echo $item['phone'];?>">
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">店铺Email</label>
					<div class="col-sm-9 col-xs-12">
						<input type="text" id="mail" name="mail"  class="form-control" value="<?php  echo $item['mail'];?>">
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">店铺地址</label>
					<div class="col-sm-9 col-xs-12">
						<input type="text" id="address" name="address"  class="form-control" value="<?php  echo $item['address'];?>">
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">所在地区</label>
					<div class="col-sm-9 col-xs-12">
						<?php  echo tpl_form_field_district('district',array('province'=>$item['location_p'],'city'=>$item['location_c'],'district'=>$item['location_a']))?>
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">店铺坐标</label>
					<div class="col-sm-9 col-xs-12" style="padding-left:15px;">
						<?php  echo tpl_form_field_coordinate('baidumap',$item)?>
					</div>
				</div>
				<div class="form-group">
					<?php  if($item['store_type'] != 1) { ?>
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">配送距离</label>
					<?php  } else { ?>
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">显示距离</label>
					<?php  } ?>
					<div class="col-sm-9 col-xs-12">
						<input type="text" id="distance" name="distance"  class="form-control" value="<?php  echo $item['distance'];?>">
						<span class='help-block'>配送距离或者是搜索店铺显示的距离范围（单位：公里），0则不限距离</span>
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">店铺介绍</label>
					<div class="col-sm-9 col-xs-12">
						<textarea style="height:100px;" id="description" name="description" class="form-control" cols="60"><?php  echo $item['description'];?></textarea>
						<div class="help-block">用于正文内的详情</div>
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">预定说明</label>
					<div class="col-sm-9 col-xs-12">
						<textarea style="height:100px;" id="content" name="content" class="form-control" cols="60"><?php  echo $item['content'];?></textarea>
						<div class="help-block">预定订单说明(选填)</div>
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">关于我们</label>
					<div class="col-sm-9 col-xs-12">
						<?php  echo tpl_ueditor('store_info', $item['store_info']);?>
					</div>
				</div>
				<div class="form-group">
					<label class="col-xs-12 col-sm-3 col-md-2 control-label">位置交通</label>
					<div class="col-sm-9 col-xs-12">
						<textarea style="height:100px;" id="traffic" name="traffic" class="form-control" cols="60"><?php  echo $item['traffic'];?></textarea>
						<div class="help-block">店铺位置交通说明(选填)</div>
					</div>
				</div> 
				<span <?php  if($item['store_type'] != 1) { ?>style="display: none"<?php  } ?> id="store_add_info">
					<div class="form-group">
						<label class="col-xs-12 col-sm-3 col-md-2 control-label">品牌</label>
						<div class="col-sm-9 col-xs-12">
							<select class='form-control' id='brandid' name='brandid'>
								<option value=''>品牌</option>
								<?php  if(is_array($brands)) { foreach($brands as $b) { ?>
								<option value ="<?php  echo $b['id'];?>" <?php  if($item['brandid'] == $b['id']) { ?>selected="selected"<?php  } ?>><?php  echo $b['title'];?></option>
								<?php  } } ?>
							</select>
						</div>
					</div>
					<div class="form-group">
						<label class="col-xs-12 col-sm-3 col-md-2 control-label">所属商圈</label>
						<div class="col-sm-9 col-xs-12">
							<input type='hidden' id='businessid' name='businessid' value="<?php  echo $item['businessid'];?>" />
							<div class='input-group'>
								<input type="text" name="hotelbusiness" maxlength="30" value="<?php  echo $item['hotelbusinesss'];?>" id="hotelbusiness" class="form-control" readonly />
								<div class='input-group-btn'>
									<button class="btn btn-default" type="button" onclick="popwin = $('#modal-module-menus').modal();">商圈</button>
								</div>
							</div>
							<div id="modal-module-menus"  class="modal fade" tabindex="-1">
								<div class="modal-dialog" style='width: 920px;'>
									<div class="modal-content">
										<div class="modal-header"><button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button><h3>商圈</h3></div>
										<div class="modal-body" >
											<div class="row">
												<div class="input-group">
													<input type="text" class="form-control" name="keyword" value="" id="search-kwd" placeholder="请输入短租商圈" />
													<span class='input-group-btn'><button type="button" class="btn btn-default" onclick="search_business();">搜索</button></span>
												</div>
											</div>
											<div id="module-menus" style="padding-top:5px;"></div>
										</div>
										<div class="modal-footer"><a href="#" class="btn btn-default" data-dismiss="modal" aria-hidden="true">关闭</a></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="form-group">
						<label class="col-xs-12 col-md-2 control-label">设施</label>
						<div class="col-md-10" id="device-container" style="padding-left: 0px;">
							<?php  if(is_array($devices)) { foreach($devices as $key => $device) { ?>
							<div class="col-sm-5" style="margin: 5px 0px;">
								<div class="input-group">
									<span class="input-group-addon">
										<input type="checkbox" name="show_device[<?php  echo $key;?>]" value="1" <?php  if($device['isshow'] > 0) { ?>checked<?php  } ?> aria-label="Checkbox for following text input">
			  						</span>
									<input type="text" name="device[<?php  echo $key;?>]" class="form-control device-input" value="<?php  echo $device['value'];?>" />
									<span class="input-group-btn">
										<button class="btn btn-default device-delete" type="button">删除</button>
									</span>
								</div>
							</div>
							<?php  } } ?>
							<div class="col-sm-5">
								<button type="button" id="add_device" class="btn btn-default"><i class="fa fa-plus"></i> 添加</button>
							</div>
						</div>
					</div>
					<div class="form-group">
						<label class="col-xs-12 col-sm-3 col-md-2 control-label">短租分类</label>
						<div class="col-sm-9 col-xs-12">
							<select class='form-control' id='level' name='level'>
								<option value=''>--请选择短租分类--</option>
								<?php  if(is_array($hotel_level_config)) { foreach($hotel_level_config as $key => $value) { ?>
								<option value ="<?php  echo $key;?>" <?php  if($item['level'] == $key) { ?>selected="selected"<?php  } ?>><?php  echo $value;?></option>
								<?php  } } ?>
							</select>
						</div>
					</div>
					<div class="form-group">
						<label class="col-xs-12 col-sm-3 col-md-2 control-label">活动信息</label>
						<div class="col-sm-9 col-xs-12">
							<textarea style="height:100px;" id="sales" name="sales" class="form-control" cols="60"><?php  echo $item['sales'];?></textarea>
							<div class="help-block">活动信息(选填)</div>
						</div>
					</div>
				</span>
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
</div>

<script type="text/javascript">

	function search_business() {
		$("#module-menus").html("正在搜索....")
		$.post('<?php  echo $this->createWebUrl("storemanage",array("op"=>"getbusiness"));?>', {
			keyword: $.trim($('#search-kwd').val())
		}, function(dat){
			$('#module-menus').html(dat);
		});
	}

	function select_business(o) {
		$("#businessid").val(o.id);
		$("#hotelbusiness").val( o.title );
		$(".close").click();
	}

	function deletepic(obj){
		if (confirm("确认要删除？")) {
			var $thisob=$(obj);
			var $liobj=$thisob.parent();
			var picurl=$liobj.children('input').val();
			$.post('<?php  echo $this->createMobileUrl('ajaxdelete',array())?>',{ pic:picurl},function(m){
				if(m=='1') {
					$liobj.remove();
				} else {
					alert("删除失败");
				}
			},"html");
		}
	}

	$("#add_device").click(function() {
		var index = $('.device-input').length;
		var html =
			'<div class="col-sm-5" style="margin: 5px 0px;">' +
				'<div class="input-group">' +
					'<span class="input-group-addon">' +
						'<input type="checkbox" name="show_device[' + index + ']" value="1" aria-label="Checkbox for following text input">' +
					'</span>' +
					'<input type="text" name="device[' + index + ']" class="form-control device-input" value="">' +
					'<span class="input-group-btn">' +
						'<button class="btn btn-default" type="button">删除</button>' +
					'</span>' +
				'</div>' +
			'</div>';

		$(this).parent().before(html);
	});

	$('.device-delete').click(function() {
		$(this).parent().parent().parent().remove();
	});


	function del_device(num) {
		$("#add_device_" + num).remove();
	}

	function formcheck() {
		if ($("#title").val().trim() == '') {
			Tip.focus("title", "请填写酒店名称!", "right");
			return false;
		}
		return true;
	}
</script>

<?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('common/footer', TEMPLATE_INCLUDEPATH)) : (include template('common/footer', TEMPLATE_INCLUDEPATH));?>
