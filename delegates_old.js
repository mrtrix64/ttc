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

function clearStorage() {
	//alert("Clearing Storage");
	localStorage.removeItem("ttcemail");
	hide_delegates();	
}

$(document).ready(function() {
	
	//first of retrieve stored delegate email, if any and store as variable 'check_storage' then call the function 'check_credentials.
var check_storage = localStorage.getItem("ttcemail");
startup_check(check_storage);

function startup_check(check_storage) {
	if (check_storage == null) {
    //block of code to be executed if the condition is true
	$('#message h1').text("");
	//alert("Null - no storage");
	hide_delegates();
	
	
} else {
   // block of code to be executed if the condition is false
   check_credentials (check_storage);
}
	
}


function hide_delegates() {
	//alert("Hiding delegates and showing form");
	$("#message").show();
	$("#delegate_listview").hide();
	$("#search_area").hide();
	$("#attendee_sponsor").hide();
	$("#theform").show();
	$("#clearbutton").hide();
}

function show_delegates() {
	//alert("Showing delegates and hiding form");
	$("#message").hide();
	$("#delegate_listview").show();
	$("#search_area").show();
	$("#attendee_sponsor").show();
	$("#theform").hide();
	$("#clearbutton").show();
}


	
	
	
	
	// check if email address is formated correctly
	$('#btnValidate').click(function() {
        var sEmail = $('#txtEmail').val();
        if ($.trim(sEmail).length == 0) {
			$('#message h1').text('Please enter a valid email address');
            ////alert('Please enter valid email address');
			localStorage.removeItem("ttcemail");
			var check_storage = localStorage.getItem("ttcemail");
			hide_delegates();
			////alert ("Stored email is "+check_storage);
            //e.preventDefault();
			
        }
        if (validateEmail(sEmail)) {
            ////alert('Email is valid');
			saveSettings();
        }
        else {
            ////alert('Invalid Email Address');
			$('#message h1').text('Please enter a valid email address');
			localStorage.removeItem("ttcemail");
			var check_storage = localStorage.getItem("ttcemail");
			$("#message").show();
			hide_delegates()
			////alert ("Stored email is "+check_storage);
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
	////alert ("The NEW storage is "+check_storage);
	
	//Now run a check on it and display as appropriate
	check_credentials (check_storage);
    return false;
}	
	
	
function check_credentials (delegate) {
	var email = delegate;
	////alert("Checking email credentials");
	if (delegate == "") {
		hide_delegates();
		
	//Show the input screen
	//alert ("Stored email is empty");

} else {
	
	
$.ajax({
        type: "GET",
        //url: "http://e-update.co.uk/ttc_ios/data/delegates.php",
		url: "http://e-update.co.uk/ttc_ios/data/delegates.php",
        dataType: "xml",
        success: function (xml) {
            //check if any Email element has the entered email as its value
            var valid = $(xml).find('Email_Address').filter(function () {
                return $.trim($(this).text()) == email
            }).length == 0;
            //if valid submit the data
            if (valid) {
                ////alert('email NOT registered');
				////alert("Result is DONT "+display);
				
					$('#message h1').text("You have entered "+delegate+" - This email address is not registered with us. Please enter the email address used when registering with TTC.");
					hide_delegates();
            } else {
                ////alert('email already registered');
				////alert("Result is "+display);	
				show_delegates();
            }
        }
    });	
}
}

});
