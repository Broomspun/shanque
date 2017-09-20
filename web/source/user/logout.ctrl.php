<?php
/**
 * [WeEngine System] Copyright (c) 2014 shanque.zhangshuoyin.cn
 * WeEngine is NOT a free software, it under the license terms, visited http://shanque.zhangshuoyin.cn/ for more details.
 */
defined('IN_IA') or exit('Access Denied');
isetcookie('__session', '', -10000);

$forward = $_GPC['forward'];
if (empty($forward)) {
	$forward = './?refersh';
}
header('Location:' . url('user/login'));