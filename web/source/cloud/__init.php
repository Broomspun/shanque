<?php
/**
 * [WeEngine System] Copyright (c) 2014 shanque.zhangshuoyin.cn
 * WeEngine is NOT a free software, it under the license terms, visited http://shanque.zhangshuoyin.cn/ for more details.
 */
defined('IN_IA') or exit('Access Denied');
if (in_array($action, array('upgrade', 'profile', 'diagnose', 'sms'))) {
	define('FRAME', 'site');
} else {
	define('FRAME', 'system');
}

if(in_array($action, array('profile', 'device', 'callback', 'appstore', 'sms'))) {
	$do = $action;
	$action = 'redirect';
}
if($action == 'touch') {
	exit('success');
}