// JavaScript Document
var myXML; 

$(document).ready(function() {
//first of retrieve stored delegate email, if any and store as variable 'check_storage' then call the function 'check_credentials.
var check_storage = localStorage.getItem("email");
//alert ("Stored email is "+check_storage);

check_credentials (check_storage);

});


function check_credentials (delegate) {
	if (delegate === "undefined") {
	//Show the input screen
	//alert ("Stored email is empty");

} else {
$.ajax({
     type:"GET",
     url: "data.php?view_xml=1",
     dataType: "xml",
     success: function(xml){
		//Get form input
		var searchFor = delegate;
		 	
          // Filter the input out of the bunch
          myXML = $(xml).find("record").filter(function() {
			
                return $(this).find('Email_Address').text() == searchFor;
            });

            	var display = myXML.children().map(function() {
                return this.tagName + '=' + $(this).text();
            	}).get().join(' ');
            
			if(display != "") {
			//alert("Result is "+display);	
				//$("#theform").hide();
				$("#blocked").hide();
				$("#delegates").show();	
			} else {
					$("#blocked").show();
					$("#delegates").hide();
			}
        } 
  });	
}
}


// store NEW inputed email value (ttc_email) into html5 localstorage
function saveSettings() {
	var ttc_email = $('#search_input').val();
	
	//take the input value and store it
    localStorage.setItem("email", ttc_email);
	
	//retrieve the storage, just to be sure!
	var check_storage = localStorage.getItem("email");
	//alert ("The NEW storage is "+check_storage);
	
	//Now run a check on it and display as appropriate
	check_credentials (check_storage);
    return false;
}