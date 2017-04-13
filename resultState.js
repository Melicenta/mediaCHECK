function resultState(){ 

	var that = this; 

	var checkPlugs = function (){ 
		var checkFlashPlugs = navigator.plugins['Shockwave Flash'] || navigator.plugins['Silverlight Plug-In']; 
		if (checkFlashPlugs) { 
			return true; 
		} else { 
			return false; 
		} 
	}; 

	var checkWebRTC = function () { 
		var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia; 
		if (getUserMedia) { 
			//console.log('You are using a browser that does not support the Media Capture API'); 
			//for another information visit https://webrtc.github.io/samples.
			return true; 
		} else { 
			return false; 
		} 
	}; 


	return { 
		checkFlashResult: function () { 
			return checkPlugs() ? 1 : 0; 
		}, 
		checkRTCResult: function () { 
			return checkWebRTC() ? 1 : 0; 
		}, 
		checkByDefault: function () { 
			if (this.checkFlashResult() || this.checkRTCResult()) {// or && 
				return true; 
			} 
		} 
	} 

}