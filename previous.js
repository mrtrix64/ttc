// JavaScript Document


	// If you want to prevent dragging, uncomment this section
	/*
	function preventBehavior(e) 
	{ 
      e.preventDefault(); 
    };
	document.addEventListener("touchmove", preventBehavior, false);
	*/
	
	/* If you are supporting your own protocol, the var invokeString will contain any arguments to the app launch.
	see http://iphonedevelopertips.com/cocoa/launching-your-own-application-via-a-custom-url-scheme.html
	for more details -jm */
	/*
	function handleOpenURL(url)
	{
		// TODO: do something with the url passed in.
	}
	*/
	
	function onBodyLoad()
	{		
		document.addEventListener("deviceready", onDeviceReady, false);
		
	}
	
	/* When this function is called, PhoneGap has been initialized and is ready to roll */
	/* If you are supporting your own protocol, the var invokeString will contain any arguments to the app launch.
	see http://iphonedevelopertips.com/cocoa/launching-your-own-application-via-a-custom-url-scheme.html
	for more details -jm */
	function onDeviceReady()
	{
		// do your thing!
		//navigator.notification.alert("PhoneGap is working")
		
	}
    
  
  
  
  
  

    // Wait for Cordova to load
    // 
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is loaded and it is now safe to make calls Cordova methods
    //
    function onDeviceReady() {
        checkConnection();
    }

    function checkConnection() {
        var networkState = navigator.network.connection.type;
		//alert(networkState);

        var states = {};
        states[Connection.UNKNOWN]  = 'Uknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.NONE]     = 'No network connection';
		 //alert('Connection type: ' + states[networkState]);
		 
		 if (states[networkState] == 'No network connection') {
  			alert('It appears you have no network connection. Please switch in your wi-fi or 3G to enable this App');
			};
			
		if (states[networkState] == 'Uknown connection') {
  			alert('It appears you have no network connection. Please switch in your wi-fi or 3G to enable this App');
			};	
       
    }
	
	
