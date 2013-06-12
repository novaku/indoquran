//init variables
var default_content="";
var menuId=["depan","alquran","bukutamu"];
var lasturl="";

function addActiveClass(activate) {
	for (var i=0; i<menuId.length; i++) {
		var idMenu = "#"+menuId[i];
		if(menuId[i] == activate) {
			$(idMenu).addClass("active");
		} else {
			$(idMenu).removeClass("active");
		}
	}
}

function checkURL(hash){
	if(!hash) hash=window.location.hash;
	if(hash != lasturl){
		lasturl=hash;
		// FIX - if we've used the history buttons to return to the homepage,
		// fill the result with the default_content
		if(hash=="") {
			$('#result').html(default_content);
		} else {
			loadPage(hash);
		}
	}
}

function loadPage(url){
	url=url==undefined?'#pagedepan':url;
	url=url.replace('#page','');
	$('#loading').css('visibility','visible');
	$.ajax({
		type: "POST",
		url: "mobile/loadResult",
		data: 'page='+url,
		dataType: "html",
		success: function(msg){
			if(parseInt(msg)!=0){
				$('#result').html('<img id="loading" src="assets/images/loading-min.gif" alt="loading" />');
				$('#loading').css('visibility','hidden');
				$('#result').html(msg);
				addActiveClass(url);
			}
		}
	});
}

function loadPageAttrib(attr, attrId) {
	$.get('mobile/loadPageAttrib/'+attr, function(data) {
		$('#'+attrId).html(data);
	});
}

$(document).ready(function(){
	$('#loading').css('visibility','hidden');
	checkURL();
	$('ul li a').click(function (e){
		checkURL(this.hash);
	});
	loadPageAttrib('menu','page-menu');
	loadPageAttrib('footer','page-footer');
	loadPageAttrib('header','page-header');
	default_content = $('#result').html();
	setInterval("checkURL()",100);
	var hash = window.location.hash == '' ? '#pagedepan' : window.location.hash;
	loadPage(hash);
});