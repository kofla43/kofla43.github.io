$(document).ready(function() {
	/* pre config styles to switch & DOM properties */

 var inject = $('#init'); // head element ID for include styles dinamicaly
 var skinsPath = 'html/';      // path to custom css directory. it can be empty
  inject.append(
		'<!-- advanced styles [to dynamic DOM trace] -->' +
    '<link type="text/css" rel="stylesheet" media="screen" title="style-mobile" href="'+ skinsPath+'style-mobile.css" />' +
		'<!-- #advanced styles [to dynamic DOM trace] -->'
  );

	/* switches effect */
  $('.styleswitch').click(function() {
      $("#sector").fadeOut(700); // id will have real dom element identificator, you can add effects for other elements. Fade timing is 700 default
      switchStylestyle(this.getAttribute("rel"));
      $("#sector").fadeIn(900);  // see upper
			return false;
		});
		var c = readCookie('style');
		if (c) switchStylestyle(c);
	});

/* walk style function */
function switchStylestyle(styleName) {
  	$('link[rel*=style][title]').each(function(i) {
			this.disabled = true;
			if (this.getAttribute('title') == styleName) this.disabled = false;
		});
		createCookie('style', styleName, 365);  // cookie saving for one year
	}

/* cookie style core */
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

/* read cookie */
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

/* replace cookie */
function eraseCookie(name) {
	createCookie(name,"",-1);
}
