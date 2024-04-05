<?php
$directory = 'images/';
$images = [];

// Lấy danh sách tất cả các tập tin trong thư mục "images"
$files = scandir($directory);
foreach ($files as $file) {
    if (is_file($directory . $file)) {
        $images[] = $file;
    }
}

// Trả về danh sách tên tập tin ảnh dưới dạng JSON
header('Content-Type: application/json');
echo json_encode($images);
?>
