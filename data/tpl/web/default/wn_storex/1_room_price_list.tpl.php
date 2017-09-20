<?php defined('IN_IA') or exit('Access Denied');?><table class="table table-hover" border="1">
	<thead class="navbar-inner">
	<tr>
		<th colspan="2" style="width:100px;">房源 / 日期</th>
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
		<td rowspan="2" style="text-align: center;width:100px; white-space:normal;"><?php  echo cutstr($data1['title'], 100)?></td>
		<td colspan='2'  style="text-align: center;">前台价</td>
		<?php  if(is_array($date_array)) { foreach($date_array as $row) { ?>
		<td style="text-align: center">
			<span class="price_span"><?php  echo $data1['price_list'][$row['time']]['oprice'];?></span>
			<span class="price_editspan hide">
				<input type="text" date="<?php  echo $row['date'];?>" pricetype="oprice" hotelid="<?php  echo $data1['price_list'][$row['time']]['hotelid'];?>" roomid="<?php  echo $data1['price_list'][$row['time']]['roomid'];?>" class="price_input form-control" value="<?php  echo $data1['price_list'][$row['time']]['oprice'];?>" />
			</span>
		</td>
		<?php  } } ?>
		<td></td>
	</tr>
	<tr>
		<td colspan='2' style="text-align: center;">优惠价</td>
		<?php  if(is_array($date_array)) { foreach($date_array as $row) { ?>
		<td style="text-align: center">
			<span class="price_span"><?php  echo $data1['price_list'][$row['time']]['cprice'];?></span>
			<span class="price_editspan hide">
				<input type="text" date="<?php  echo $row['date'];?>" pricetype="cprice" hotelid="<?php  echo $data1['price_list'][$row['time']]['hotelid'];?>" roomid="<?php  echo $data1['price_list'][$row['time']]['roomid'];?>" class="price_input form-control" value="<?php  echo $data1['price_list'][$row['time']]['cprice'];?>" />
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
