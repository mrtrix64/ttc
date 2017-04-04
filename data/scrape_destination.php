<meta charset="UTF-8">
<link href="http://mobile.thetravelconvention.com/jquery-mobile/jquery.mobile-1.4.5.min.css" rel="stylesheet" type="text/css"/>
<link href="http://mobile.thetravelconvention.com/style/main2.css" rel="stylesheet" type="text/css">
<link href="http://mobile.thetravelconvention.com/style/scrape.css" rel="stylesheet" type="text/css">
<?php
$url = 'http://www.thetravelconvention.com/destination.php';
$content = file_get_contents($url);
$first_step = explode( '<div id="content_area">' , $content );
$second_step = explode("</div>" , $first_step[1] );

echo $second_step[0];
?>