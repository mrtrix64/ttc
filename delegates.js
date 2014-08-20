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
	var email = delegate;
	//alert("Checking email credentials");
	if (delegate === "undefined") {
	//Show the input screen
	//alert ("Stored email is empty");

} else {
	
	
$.ajax({
        type: "GET",
        //url: "http://localhost/ttc_data/data/delegates.xml",
		url: "http://e-update.co.uk/ttc_ios/data/delegates.xml",
        dataType: "xml",
        success: function (xml) {
            //check if any Email element has the entered email as its value
            var valid = $(xml).find('Email_Address').filter(function () {
                return $.trim($(this).text()) == email
            }).length == 0;
            //if valid submit the data
            if (valid) {
                //alert('email NOT registered');
				//alert("Result is DONT "+display);
					$("#message").show();
					$("#delegate_listview").hide();
					$("#search_area").hide();
					$('#message h1').text("You have entered "+delegate+" - This email address is not registered with us. Please enter the email address used when registering with TTC.");
            } else {
                //alert('email already registered');
				//alert("Result is "+display);	
				$("#theform").hide();
				$("#message").hide();
				$("#delegate_listview").show();	
				$("#search_area").show();
            }
        }
    });	
}
}

});
