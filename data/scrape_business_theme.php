<link href="../jquery-mobile/jquery.mobile-1.4.5.min.css" rel="stylesheet" type="text/css"/>
<link href="../style/main2.css" rel="stylesheet" type="text/css">
<link href="../style/scrape.css" rel="stylesheet" type="text/css">
<?php
$url = 'http://www.thetravelconvention.com/business_theme.php';
$content = file_get_contents($url);
$first_step = explode( '<div id="content_area">' , $content );
$second_step = explode("</div>" , $first_step[1] );

echo $second_step[0];
?>