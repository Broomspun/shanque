<?php defined('IN_IA') or exit('Access Denied');?><style>
	.checkbox-inline input[type=checkbox]{position:relative;}
</style>
<table class="table table-hover" border="1">
	<thead class="navbar-inner">
	<tr>
		<th colspan="3" style="width:180px;">房源 / 日期</th>
		<th style="width:70px;" onclick='window.prePage()'><i class=' fa fa-chevron-left'></i></th>
		<?php  if(is_array($date_array)) { foreach($date_array as $row) { ?>
		<th style="width:100px;"><?php  echo $row['month'];?>-<?php  echo $row['day'];?></th>
		<?php  } } ?>
		<th style="width:70px;" onclick='window.nextPage()'><i class=' fa fa-chevron-right'></i></th>
	</tr>
	</thead>
	<tbody>
	<?php  if(is_array($list)) { foreach($list as $data1) { ?>
	<tr>
		<td rowspan="2" style="text-align: center; width:150px;white-space:normal;"><?php  echo cutstr($data1['title'], 100)?></td>
		<td rowspan="2" style="text-align: center; width:150px;white-space:normal;">优惠价<br><?php  echo cutstr($data1['cprice'], 8)?></td>
		<td colspan='2'  style="text-align: center;">房态</td>
		<?php  if(is_array($date_array)) { foreach($date_array as $row) { ?>
		<td style="text-align: center">
			<label class="checkbox-inline">
				<input type="checkbox" date="<?php  echo $row['date'];?>" field="status" pricetype="status" hotelid="<?php  echo $data1['price_list'][$row['time']]['hotelid'];?>" roomid="<?php  echo $data1['price_list'][$row['time']]['roomid'];?>" class="status_checkbox" value="1" <?php  if($data1['price_list'][$row['time']]['status']==1) { ?>checked<?php  } ?>/>
				有房
			</label>
		</td>
		<?php  } } ?>
		<td></td>
	</tr>
	<tr>
		<td colspan='2' style="text-align: center;">房量</td>
		<?php  if(is_array($date_array)) { foreach($date_array as $row) { ?>
			<td style="text-align: center">
				<span class="price_span" ><?php  if($data1['price_list'][$row['time']]['num']==-1) { ?>不限<?php  } else { ?><?php  echo $data1['price_list'][$row['time']]['num'];?><?php  } ?></span>
				<span class="price_editspan hide">
					<input type="text" date="<?php  echo $row['date'];?>" field="num" pricetype="num" hotelid="<?php  echo $data1['price_list'][$row['time']]['hotelid'];?>" roomid="<?php  echo $data1['price_list'][$row['time']]['roomid'];?>" class="price_input form-control" value="<?php  echo $data1['price_list'][$row['time']]['num'];?>" />
				</span>
			</td>
		<?php  } } ?>
		<td></td>
	</tr>
	<?php  } } ?>
	</tbody>
</table>
<input type='hidden' id='page' value="<?php  echo $page;?>" />
<input type='hidden' id='totalpage' value="<?php  echo $totalpage;?>" />
