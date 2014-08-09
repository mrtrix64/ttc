// JavaScript Document
var myXML; 


function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}

$(document).ready(function() {
	
	//first of retrieve stored delegate email, if any and store as variable 'check_storage' then call the function 'check_credentials.
var check_storage = localStorage.getItem("ttcemail");
//alert ("START UP - Stored email is "+check_storage);

check_credentials (check_storage);
	
	
	
	
	
	// check if email address is formated correctly
	$('#btnValidate').click(function() {
        var sEmail = $('#txtEmail').val();
        if ($.trim(sEmail).length == 0) {
			$('#message h1').text('Please enter a valid email address');
            //alert('Please enter valid email address');
			localStorage.removeItem("ttcemail");
			var check_storage = localStorage.getItem("ttcemail");
			$("#message").show();
			$("#delegate_listview").hide();
			$("#search_area").hide();
			//alert ("Stored email is "+check_storage);
            //e.preventDefault();
			
        }
        if (validateEmail(sEmail)) {
            //alert('Email is valid');
			saveSettings();
        }
        else {
            //alert('Invalid Email Address');
			$('#message h1').text('Please enter a valid email address');
			localStorage.removeItem("ttcemail");
			var check_storage = localStorage.getItem("ttcemail");
			$("#message").show();
			$("#delegate_listview").hide();
			$("#search_area").hide();
			//alert ("Stored email is "+check_storage);
            //e.preventDefault();
			

        }
    });
	
// store NEW inputed email value (ttc_email) into html5 localstorage
function saveSettings() {
	var ttc_email = $('#txtEmail').val();
	
	//take the input value and store it
    localStorage.setItem("ttcemail", ttc_email);
	
	//retrieve the storage, just to be sure!
	var check_storage = localStorage.getItem("ttcemail");
	//alert ("The NEW storage is "+check_storage);
	
	//Now run a check on it and display as appropriate
	check_credentials (check_storage);
    return false;
}	
	
	
function check_credentials (delegate) {
	//alert("Checking email credentials");
	if (delegate === "undefined") {
	//Show the input screen
	//alert ("Stored email is empty");

} else {
$.ajax({
     type:"GET",
	 url: "http://e-update.co.uk/ttc_ios/data/delegates.php?view_xml=1",
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
				$("#message").hide();
				$("#delegate_listview").show();	
				$("#search_area").show();
			} else {
				//alert("Result is DONT "+display);
					$("#message").show();
					$("#delegate_listview").hide();
					$("#search_area").hide();
			}
        } 
  });	
}
}




});




//Page transition
$(document).bind("mobileinit", function(){
    $.mobile.defaultPageTransition = 'slide'
 });