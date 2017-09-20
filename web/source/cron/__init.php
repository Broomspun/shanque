<?php
/**
 * [WeEngine System] Copyright (c) 2014 shanque.zhangshuoyin.cn
 * WeEngine is NOT a free software, it under the license terms, visited http://shanque.zhangshuoyin.cn/ for more details.
 */
if($action != 'entry') {
	define('FRAME', 'setting');
	$frames = buildframes(array(FRAME));
	$frames = $frames[FRAME];
}
