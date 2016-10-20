(function(){
	
	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	var pictureSource;
	var destinationType;

	function onDeviceReady(){
		pictureSource = navigator.camera.PictureSourceType;
		destinationType = navigator.camera.DestinationType;

	document.getElementById("capturePhoto").onclick = function(){
		navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
			quality:50,
			destinationType : destinationType.DATA_URL });
	
}
};

	function onPhotoDataSuccess (imageData) {
		var smallImage = document.getElementById('smallImage');
		smallImage.style.display = 'block';
		smallImage.src = "data:image/jpeg;base64," + imageData;
	}

	function onFail (message){
		alert('Failed because:' + message);
	}


})();


(function(){
	
	document.addEventListener('deviceready', onDeviceReady.bind(this), false);

	function onDeviceReady(){

	document.getElementById("barcode").onclick = function(){
			cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          "preferFrontCamera" : true, // iOS and Android 
          "showFlipCameraButton" : true, // iOS and Android 
          "prompt" : "Place a barcode inside the scan area", // supported on Android only 
          "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED 
          "orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device 
      }
   );
		      
	}
     // document.getElementById("geolocationdata").onclick = function(){
     // 	navigator.geolocation.getCurrentPosition(onSuccess, onError);
     // }
     
};
})();

	

	/*var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              );
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

	
       

})();*/