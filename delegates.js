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
	////alert("Clearing Storage");
	localStorage.removeItem("ttcemail");
	hide_delegates();	
}




$(document).ready(function() {
//first of retrieve stored delegate email, if any and store as variable 'check_storage' then call the function 'check_credentials.
var check_storage = localStorage.getItem("ttcemail");
//alert (check_storage);
$("#txtEmail").val(check_storage);

if (check_storage == null) {
	$("#clearbutton").hide();
}




function check_credentials() {
	var check_storage = localStorage.getItem("ttcemail");
	//alert ("Running check creds with "+check_storage);
	//Check the hidden email div for the value stored or entered
	var isContains = $('#delegate_email_view').text().indexOf(check_storage) > -1;
	
	
	if (isContains == true) {
		//alert (isContains);
		$('#message').text("");
		$.mobile.changePage($("#delegate_list"), "none");
	} else {
		//alert (isContains);
		$('#message').text('Sorry there is an error. Either you have no internet connection or the email address you have entered is not registered. Please try re-connecting to the internet or re-enter your email address ensuring it is all lower case.');
	}
}
	
	// check if email address is formated correctly
	$('#btnValidate').click(function() {
        var sEmail = $('#txtEmail').val();
        if ($.trim(sEmail).length == 0) {
			$('#message').text('Please enter a valid email address');
            //alert('Please enter valid email address');
			localStorage.removeItem("ttcemail");
			var check_storage = localStorage.getItem("ttcemail");
			//hide_delegates();
			//alert ("Stored email is "+check_storage);
            //e.preventDefault();
			
        }
        if (validateEmail(sEmail)) {
            //alert('Email is valid');
			saveSettings();
			
        }
        else {
            //alert('Invalid Email Address');
			$('#message').text('Please enter a valid email address');
			localStorage.removeItem("ttcemail");
			var check_storage = localStorage.getItem("ttcemail");
			$('#btnValidate').val('View Delegates');
			
			//hide_delegates()
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
	check_credentials();
    return false;
}	


});


document.addEventListener("deviceready", onDeviceReady, false);
// device APIs are available
//

function onDeviceReady() {
    checkConnection();
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
	    //alert('Connection type: ' + states[networkState]);

		if ((states[networkState]) == states[Connection.NONE]) {
		$.mobile.changePage($("#offline"), "none");
        alert('Very slow or no Internet Connection');
		//states[networkState] = states[Connection.UNKNOWN]
		//alert(states[networkState]);
        //navigator.app.exitApp();
		}
}
    
