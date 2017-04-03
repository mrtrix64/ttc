<?php
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
$hostname_abtabackend = "localhost";
$database_abtabackend = "db99712_abtatravel17";
$username_abtabackend = "db99712_anne";
$password_abtabackend = "treestump2010";
$abtabackend = mysql_connect($hostname_abtabackend, $username_abtabackend, $password_abtabackend) or trigger_error(mysql_error(),E_USER_ERROR);
/*$hostname_abtabackend = "internal-db.s99712.gridserver.com";
$database_abtabackend = "db99712_abtatravel17";
$username_abtabackend = "db99712_anne";
$password_abtabackend = "treestump2010";
$abtabackend = mysql_connect($hostname_abtabackend, $username_abtabackend, $password_abtabackend) or trigger_error(mysql_error(),E_USER_ERROR); */
?>
<?php include('cms_screening.php'); ?>