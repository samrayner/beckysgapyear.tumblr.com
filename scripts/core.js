var Core = {
	getElementsByClass: function(searchClass, node, tag) {
		var classElements = new Array();
		if(node == null)
			node = document;
		if(tag == null)
			tag = "*";
		var els = node.getElementsByTagName(tag);
		var elsLen = els.length;
		var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
		for (i = 0, j = 0; i < elsLen; i++) {
			if(pattern.test(els[i].className)) {
				classElements[j] = els[i];
				j++;
			}
		}
		return classElements;
	},
	
	sketch: function(className) {
		if(document.getElementsByClassName)
			Cufon.replace(document.getElementsByClassName(className), {hover: true});
		else 
			Cufon.replace(Core.getElementsByClass(className), {hover: true});
	},
	
	searchHandler: function(input) {	
		if(input.value == "Search posts...") {
			input.value = "";
			input.style.color = "#222"
		}
			
		else if(input.value == "") {
			input.style.color = "#999"
			input.value = "Search posts...";
		}
	},
	
	init: function() {
		Core.sketch("sketchblock");
		
		var searchInput = document.getElementById("search").getElementsByTagName("input")[0];
		
		if(searchInput.addEventListener) {
			searchInput.addEventListener("focus", function(){ Core.searchHandler(searchInput); }, false);
			searchInput.addEventListener("blur", function(){ Core.searchHandler(searchInput); }, false);
		}
		else if(searchInput.attachEvent) {
			searchInput.attachEvent("onfocus", function(){ Core.searchHandler(searchInput); });
			searchInput.attachEvent("onblur", function(){ Core.searchHandler(searchInput); });
		}
	}
}

if(window.addEventListener)
	window.addEventListener("DOMContentLoaded", Core.init, false);
else if(window.attachEvent)
	window.attachEvent("onload", Core.init);