function bourrer() {
	var str = '';

	for(var i = 0; i < 300; ++i) {
		
		str += "<br>";
	}
	
	$(document.body).append(str);
}

$(document).scroll(function() {
	
	var opacity = Math.min($(document).scrollTop() / 700.0, 1.0); // On évite de dépasser 1.0 en opacité
	$('.ancre_menu').css('opacity', opacity);
});
