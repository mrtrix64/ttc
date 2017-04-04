<?php
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
/*$hostname_abtaFrontConn = "internal-db.s99712.gridserver.com";
$database_abtaFrontConn = "db99712_abtatravel17";
$username_abtaFrontConn = "db99712_user";
$password_abtaFrontConn = "Treestump17@@";
$abtaFrontConn = mysql_connect($hostname_abtaFrontConn, $username_abtaFrontConn, $password_abtaFrontConn) or trigger_error(mysql_error(),E_USER_ERROR); */

$hostname_abtaFrontConn = "localhost";
$database_abtaFrontConn = "db99712_abtatravel17";
$username_abtaFrontConn = "db99712_user";
$password_abtaFrontConn = "treestump2010";
$abtaFrontConn = mysql_connect($hostname_abtaFrontConn, $username_abtaFrontConn, $password_abtaFrontConn) or trigger_error(mysql_error(),E_USER_ERROR); 
?>