<?php 
/**
 * 
 * 
 */
$_W['page']['title'] = '山雀云服务诊断 - 山雀云服务';
$dos = array('display', 'testapi');
$do = in_array($do, $dos) ? $do : 'display';

if ($do == 'testapi') {
	load()->model('cloud');
	$starttime = microtime(true);
	$response = cloud_request('http://shanque.zhangshuoyin.cn', array(), array('ip' => $_GPC['ip']));
	$endtime = microtime(true);
	message('请求接口成功，耗时 '.(round($endtime - $starttime, 5)).' 秒', '', 'ajax');
} else {
	if(checksubmit()) {
		load()->model('setting');
		setting_save('', 'site');
		message('成功清除站点记录.', 'refresh');
	}
	if (checksubmit('updateserverip')) {
		load()->model('setting');
		if (!empty($_GPC['ip'])) {
			setting_save(array('ip' => $_GPC['ip'], 'expire' => TIMESTAMP + 201600), 'cloudip');
		} else {
			setting_save(array(), 'cloudip');
		}
		message('修改山雀云服务ip成功.', 'refresh');
	}
	if(empty($_W['setting']['site'])) {
		$_W['setting']['site'] = array();
	}
	$checkips = array();
	if (!empty($_W['setting']['cloudip']['ip'])) {
		$checkips[] = $_W['setting']['cloudip']['ip'];
	}
	if (strexists(strtoupper(PHP_OS), 'WINNT')) {
		$cloudip = gethostbyname('shanque.zhangshuoyin.cn');
		if (!in_array($cloudip, $checkips)) {
			$checkips[] = $cloudip;
		}
	} else {
		for ($i = 0; $i <= 10; $i++) {
			$cloudip = gethostbyname('shanque.zhangshuoyin.cn');
			if (!in_array($cloudip, $checkips)) {
				$checkips[] = $cloudip;
			}
		}
	}
	template('cloud/diagnose');
}
