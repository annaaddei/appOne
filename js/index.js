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
};

	function onPhotoDataSuccess (imageData) {
		var smallImage = document.getElementById('smallImage');
		smallImage.style.display = 'block';
		smallImage.src = "data:image/jpeg;base64," + imageData;
	}

	function scan(){
		cordova.plugins.barcodeScanner.encode(cordova.plugins.barcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com", function(success) {
            alert("encode success: " + success);
          }, function(fail) {
            alert("encoding failed: " + fail);
          }
        );
	}
})();