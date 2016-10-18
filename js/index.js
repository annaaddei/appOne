(function(){
	
	document,addEventListener('deviceready', onDeviceReady.bind(this), false);
	var pictureSource;
	var destinationType;

	function onDeviceReady(){
		pictureSource = navigator.camera.pictureSource;
		destinationType = navigator.camera.destinationType;

	document.getElementById("capturePhoto").onclick = function(){
		navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
			quality:50,
			destinationType : destinationType.DATA_URL });
	}

	document.getElementById("barcode").onclick = function(){
		cordova.plugins.barcodeScanner.encode(cordova.plugins.barcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com", function(success) {
            alert("encode success: " + success);
          }, function(fail) {
            alert("encoding failed: " + fail);
          }
      }

     
     	var watchID = cordova.geolocation.watchPosition(onSuccess, onError, {timeout: 30000});
     
};

	function onPhotoDataSuccess (imageData) {
		var smallImage = document.getElementById('smallImage');
		smallImage.style.display = 'block';
		smallImage.src = "data:image/jpeg;base64," + imageData;
	}

	function onSuccess = function (position){
		var element = document.getElementById('geolocation');
		element.innerHTML = 'Latitude:' + position.coords.latitude + '<br />' +
							'Longitude:' + position.coords.longitude + '<br />' +
							'<hr />' + element.innerHTML;
	};

	function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

	
       

})();