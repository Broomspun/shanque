<?php
require $_SERVER["DOCUMENT_ROOT"].'/framework/bootstrap.inc.php';
if($_GPC['id']!=-1) {
    $rooms = pdo_fetchall("SELECT * FROM " . tablename('storex_room_price') . " WHERE roomid = :id ", array(':id' => $_GPC['id']));
    $date = array();

    foreach ($rooms as $room) {
        $date[$room['thisdate']] = array('price' => $room['cprice'], 'status' => $room['status'], 'num' => $room['num']);
    }
}

echo json_encode($date);
die();