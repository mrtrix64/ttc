<?php
    //Create Database connection
   $db = mysql_connect("internal-db.s99712.gridserver.com","db99712_user","treestump2010");
    if (!$db) {
        die('Could not connect to db: ' . mysql_error());
    }
	
	
	
	
//LOCAL
/*$db = mysql_connect("localhost","mrtrix","jazzaj64");
    if (!$db) {
        die('Could not connect to db: ' . mysql_error());
    }*/



    //Select the Database
    mysql_select_db("db99712_abtatravel15",$db);
    
    //Replace * in the query with the column names.
    $result = mysql_query("SELECT * FROM delegates WHERE Privacy_Required = 'F' ORDER BY Organization ASC", $db);  


header("Content-Type: application/xml");
 echo "<recordset>"."\n";
    while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
		echo "<records>"."\n";
		echo "<delegate_id><![CDATA[".htmlspecialchars($row['delegate_id'], ENT_QUOTES)."]]></delegate_id>"."\n";
		echo "<First_Name><![CDATA[".htmlspecialchars($row['First_Name'], ENT_QUOTES)."]]></First_Name>"."\n";
		echo "<Last_Name><![CDATA[".htmlspecialchars($row['Last_Name'], ENT_QUOTES)."]]></Last_Name>"."\n";
		echo "<Organization><![CDATA[".htmlspecialchars($row['Organization'], ENT_QUOTES)."]]></Organization>"."\n";
		echo "<Email_Address><![CDATA[".htmlspecialchars($row['Email_Address'], ENT_QUOTES)."]]></Email_Address>"."\n";
		echo "<Position><![CDATA[".htmlspecialchars($row['Position'], ENT_QUOTES)."]]></Position>"."\n";
		echo "<Privacy_Required><![CDATA[".htmlspecialchars($row['Privacy_Required'], ENT_QUOTES)."]]></Privacy_Required>"."\n";
		echo "<G><![CDATA[".htmlspecialchars($row['G'], ENT_QUOTES)."]]></G>"."\n";
		echo "</records>"."\n";

    }
    //echo json_encode($json_response);
    
    //Close the database connection
    fclose($db);
	echo "</recordset>";
?>