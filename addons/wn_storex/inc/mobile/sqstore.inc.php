<?php

defined('IN_IA') or exit('Access Denied');

global $_W, $_GPC;
$ops = array('store_list', 'store_detail', 'store_comment');

$op = in_array($_GPC['op'], $ops) ? trim($_GPC['op']) : 'error';

check_params();

//获取店铺列表
if ($op == 'store_list') {
	$keyword = trim($_GPC['keyword']);
	$setting = get_storex_set();
	$storex_bases = pdo_getall('storex_bases', array('weid' => $_W['uniacid'], 'status' => 1, 'title LIKE' => '%' . $keyword . '%'), array(), '', 'displayorder DESC');
	foreach ($storex_bases as $key => $info) {
		if (!empty($_GPC['lat']) && !empty($_GPC['lng'])) {
			$lat = trim($_GPC['lat']);
			$lng = trim($_GPC['lng']);
			$distance = distanceBetween($info['lng'], $info['lat'], $lng, $lat);
			$distance = round($distance / 1000, 2);
			$storex_bases[$key]['distances'] = $distance;
			if (!empty($info['distance'])) {
				if ($distance > $info['distance']) {
					unset($storex_bases[$key]);
					continue;
				}
			}
		}
		if (!empty($_GPC['city'])) {
			$city = code2city(trim($_GPC['city']));
			if ($city != $info['location_c']) {
				unset($storex_bases[$key]);
				continue;
			}
		}
		$storex_bases[$key]['thumb'] = tomedia($info['thumb']);
		$info['thumbs'] = iunserializer($info['thumbs']);
		$info['detail_thumbs'] = iunserializer($info['detail_thumbs']);
		$timestart = strexists($info['timestart'],':');
		if ($timestart) {
			$storex_bases[$key]['timestart'] = $info['timestart'];
		} else {
			$storex_bases[$key]['timestart'] = date("G:i", $info['timestart']);
		}
		$timeend = strexists($info['timeend'],':');
		if ($timeend) {
			$storex_bases[$key]['timeend'] = $info['timeend'];
		} else {
			$storex_bases[$key]['timeend'] = date("G:i", $info['timeend']);
		}
		if (!empty($info['thumbs'])) {
			$storex_bases[$key]['thumbs'] = format_url($info['thumbs']);
		}
		if (!empty($info['detail_thumbs'])) {
			$storex_bases[$key]['detail_thumbs'] = format_url($info['detail_thumbs']);
		}
	}
	if ($setting['version'] == 0) {//单店
		if (!empty($storex_bases) && count($storex_bases) > 1) {
			foreach ($storex_bases as $val) {
				$storex_bases = array();
				$storex_bases[] = $val;
				break;
			}
		}
	}
	$store_list = array();
	$store_list['version'] = $setting['version'];
	$store_list['stores'] = $storex_bases;
	message(error(0, $store_list), '', 'ajax');
}

