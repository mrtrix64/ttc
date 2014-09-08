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
		$('#message').text('The email address you entered is not registered, please try again.');
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


// Call onDeviceReady when PhoneGap is loaded.
    //
    // At this point, the document has loaded but phonegap-1.0.0.js has not.
    // When PhoneGap is loaded and talking with the native device,
    // it will call the event `deviceready`.
    // 
    document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
    //
    function onDeviceReady() {
        // Now safe to use the PhoneGap API
alert ("DEVICE IS READY");

function init() {
document.addEventListener("online", toggleCon, false);
document.addEventListener("offline", toggleCon, false);
 
if(navigator.network.connection.type == Connection.NONE) {
navigator.notification.alert("Sorry, you are offline.", function() {}, "Offline!");
} else {
setupButtonHandler();
}
 
}
 
function toggleCon(e) {
console.log("Called",e.type);
if(e.type == "offline") {
$("#searchBtn").off("touchstart").attr("disabled","disabled");
navigator.notification.alert("Sorry, you are offline.", function() {}, "Offline!");
} else {
$("#searchBtn").removeAttr("disabled");
navigator.notification.alert("Woot, you are back online.", function() {}, "Online!");
setupButtonHandler();
}
}


}

