<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
</head>

<body>
<?php
$url = 'http://thetravelconvention.com/programme.php';
$content = file_get_contents($url);
$first_step = explode( '<div id="content_area">' , $content );
$second_step = explode("</div>" , $first_step[1] );

echo $second_step[0];
?>

</body>
</html>