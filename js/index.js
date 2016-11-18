(function(){

	document.addEventListener('deviceready', onDeviceReady.bind(this), false);

	function onDeviceReady(){

	document.getElementById("barcode").onclick = function(){

		cordova.plugins.barcodeScanner.scan(onBarcodeSuccess, onBarcodeFail,
            {
                "preferFrontCamera": true,
                "showFlipCameraButton": true,
                "prompt": "Place a barcode inside the scan area",
                "formats": "QR_CODE,PDF_417",
                "orientation": "landscape"
            });
	
}
};

function onBarcodeSuccess(result) {
    alert("We got a barcode\n" +
            "Result: " + result.text + "\n" +
            "Format: " + result.format + "\n" +
            "Cancelled: " + result.cancelled);
}

function onBarcodeFail(error) {
    alert("Scanning failed: " + error);
}



})();



	
