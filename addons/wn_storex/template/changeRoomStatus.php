<?php
require $_SERVER["DOCUMENT_ROOT"] . '/framework/bootstrap.inc.php';
date_default_timezone_set('Asia/Shanghai');
$today = $_GPC['current_date'];

$id = intval($_GPC['table_id']);

$entry = array(
    'id' => intval($_GPC['table_id']),
    'weid'      => 1,
    'hotelid'   => 1,
    'roomid'    => intval($_GPC['room_id']),
    'roomdate'  => strtotime($today),
    'thisdate'  => $today,
    'oprice'    => floatval($_GPC['room_cprice']),
    'cprice'    => floatval($_GPC['room_cprice']),
    'num'       => intval($_GPC['room_nums']),
    'status'    => intval($_GPC['room_status']),
);


if ($id < 0)
    $entry['id'] = null;

if ($id < 0)
    $message = pdo_insert('storex_room_price', $entry);

$last_insert_id = pdo_insertid();

$data['message'] = $message;
$data['entry'] = $entry;

echo json_encode($data);
die();