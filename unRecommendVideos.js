function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function unRecommendVideos() {
    'use strict';
    var items = document.querySelectorAll('ytd-menu-renderer > yt-icon-button.dropdown-trigger > button[aria-label]');
    var out;
	
	console.log(items.length);

	for (var i = 0; i < items.length; i++) {
		items[i].click();
        out = setTimeout(function () {		
			document.querySelector('paper-listbox.style-scope.ytd-menu-popup-renderer').children[3].click()
        }, 100);
        await sleep(250); // sleep cause browser can not handle the process
        clearTimeout(out);		
	}	
	
	document.querySelector("#endpoint > paper-item > yt-formatted-string").click();
	
	// Added method to clear the console 
	console.clear();

}

unRecommendVideos();
