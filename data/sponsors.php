<?php require_once('../Connections/abtaFrontConn.php'); ?>
<?php
if (!function_exists("GetSQLValueString")) {
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  if (PHP_VERSION < 6) {
    $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;
  }

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? doubleval($theValue) : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}
}

mysql_select_db($database_abtaFrontConn, $abtaFrontConn);
$query_Recordset1 = "SELECT * FROM exhibitors WHERE publish = 'y' ORDER BY exhibitor_name ASC";
$Recordset1 = mysql_query($query_Recordset1, $abtaFrontConn) or die(mysql_error());
$row_Recordset1 = mysql_fetch_assoc($Recordset1);
$totalRows_Recordset1 = mysql_num_rows($Recordset1);

if (isset($_GET['view_xml'])) {
	header("Content-type: text/xml");
	header("Pragma: public");
	header("Cache-control: private");
	header("Expires: -1");
	$export_Recordset1="";
	if($export_Recordset1=="1"){
		header("Content-Disposition: attachment; filename=recordset.xml");
		header("Content-Type: application/force-download");
	}
	echo "<?xml version=\"1.0\" encoding=\"utf-8\"?>"; 
	echo "<recordset total=\"".$totalRows_Recordset1."\">";
	if($totalRows_Recordset1 > 0){
		$Start_Record = 0;
		$Num_Records = $totalRows_Recordset1;
		$Current_Record = 0;
		if(isset($_POST['Start_Record']) && $_POST['Start_Record']!="" &&  isset($_POST['Num_Records']) && $_POST['Num_Records']!=""){
			$Start_Record = $_POST['Start_Record'];
			$Num_Records = $_POST['Num_Records'];
		}
		if(isset($_GET['Start_Record']) && $_GET['Start_Record']!="" &&  isset($_GET['Num_Records']) && $_GET['Num_Records']!=""){
			$Start_Record = $_GET['Start_Record'];
			$Num_Records = $_GET['Num_Records'];
		}
		$totalColumns=mysql_num_fields($Recordset1);
		do{
			if($Current_Record>=$Start_Record){
				echo "<record>";
				for ($x=0; $x<$totalColumns; $x++) {
					$field=mysql_field_name($Recordset1, $x);
					echo "<".$field."><"."![CD"."ATA[".$row_Recordset1[$field]."]"."]></".$field.">";
				}
				echo "</record>";
			}
			$Current_Record=$Current_Record+1;
			if($Current_Record-$Start_Record==$Num_Records){break;}
		}while ($row_Recordset1 = mysql_fetch_assoc($Recordset1)); 
	}
	echo "</recordset>";
	die(); 
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Untitled Document</title>
</head>

<body>
</body>
</html>
<?php
mysql_free_result($Recordset1);
?>
