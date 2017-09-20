<?php
/**
 * [WeEngine System] Copyright (c) 2014 shanque.zhangshuoyin.cn
 * WeEngine is NOT a free software, it under the license terms, visited http://shanque.zhangshuoyin.cn/ for more details.
 */
 
defined('IN_IA') or exit('Access Denied');

$site = WeUtility::createModuleSite($entry['module']);
if(!is_error($site)) {
	$method = 'doMobile' . ucfirst($entry['do']);
	exit($site->$method());
}
exit();