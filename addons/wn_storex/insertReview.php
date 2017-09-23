<?php
require $_SERVER["DOCUMENT_ROOT"].'/framework/bootstrap.inc.php';
date_default_timezone_set('Asia/Shanghai');
$today = date("Y-m-d");

    $entry = array(
        'id'            => null,
        'uid'           => $_GPC['uid'],
        'roomid'        => $_GPC['roomid'],
        'review'        => $_GPC['review-desc'],
        'review_date'   => $today
    );

    $message = pdo_insert('storex_room_review',$entry);
    $last_insert_id =pdo_insertid();

    $last_review = pdo_fetch("SELECT m1.avatar, m1.nickname FROM ".tablename('mc_members')." AS m1 LEFT JOIN ".tablename('storex_room_review')." AS m2 ON m1.uid=m2.uid WHERE m2.id=:id",array(':id' => $last_insert_id));

    $data['message']        = $message;
    $data['entry']          = $entry;
    $data['review_date']    = $today;
    $data['avatar']         = $last_review['avatar'];
    $data['nickname']       = $last_review['nickname'];
    $data['lastid']         = $last_insert_id;

echo json_encode($data);
die();