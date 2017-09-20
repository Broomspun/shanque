<?php
/**
 * [WeEngine System] Copyright (c) 2014 shanque.zhangshuoyin.cn
 * WeEngine is NOT a free software, it under the license terms, visited http://shanque.zhangshuoyin.cn/ for more details.
 */
defined('IN_IA') or exit('Access Denied');
define('FRAME', 'advertisement');
if ($do == 'display') {
	define('ACTIVE_FRAME_URL', url('advertisement/content-provider/account_list'));
}

