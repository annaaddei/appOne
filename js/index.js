(function(){
	
	document.addEventListener('deviceready', onDeviceReady.bind(this), false);

	function onDeviceReady(){

	document.getElementById("barcode").onclick = function(){
		cordova.plugins.barcodeScanner.encode(cordova.plugins.barcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com",
			function(success) {
				alert("encode success: " + success);
			}, function(fail) {
				alert("encoding failed: " + fail);
			}
		);
	
}
};



})();



	
