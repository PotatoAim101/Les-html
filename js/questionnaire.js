var chien = 5;
var chat = 5;
var rongeur = 5;
var snake = 5;
var tarantule = 5;
var cheval = 5;

$("#formulaire").submit(function(){
	if ($( "input[ value='chat']" ).is(":checked")) { // ou .prop("ckecked") == true
		rongeur -= 1;
		chien -= 1;
		chat += 1;
		snake -=1;
	}
	
	if ($( "input[ value='chien']" ).is(":checked")) {
		chien += 1;
	}
	
	if ($( "input[ value='rongeur']" ).is(":checked")) {
		rongeur += 2;
	}
	
	if ($( "input[ value='autre']" ).is(":checked")) {
		tarantule +=1;
		snake += 1;
	}
	
	if ($( "input[ value='aucun']" ).is(":checked")) {
		rongeur += 1;
	}
	
	if ($( "input[ value='pappart']" ).is(":checked")) {
		rongeur += 1;
		chien -= 1;
		chat -= 2;
		snake += 1;
		cheval -= 4;
		tarantule += 2;
	}
	
	if (($( "input[ value='gappart']" ).is(":checked")) || ($( "input[ value='pmaison']" ).is(":checked"))) {
		rongeur += 1;
		chien += 1;
		chat += 1;
		snake += 1;
		cheval -= 4;
		tarantule += 1;
	}
	
	if ($( "input[ value='gmaison']" ).is(":checked")) {
		rongeur += 1;
		chien += 1;
		chat += 1;
		snake += 1;
		cheval += 1;
		tarantule += 1;
	}
	
	if ($( "input[ value='gentil']" ).is(":checked")) {
		chien += 1;
		chat += 2;
		tarantule -= 4;
		snake -= 4;
	}
	
	if ($( "input[ value='fidele']" ).is(":checked")) {
		cheval += 1;
		chien += 1;
		chat += 1;
	}
	
	if ($( "input[ value='original']" ).is(":checked")) {
		tarantule += 2;
		snake += 2;
	}
	
	if ($( "input[ value='indep']" ).is(":checked")) {
		chat += 2;
	}
	
	if ($( "input[ value='bcp']" ).is(":checked")) {
		chien += 1;
		cheval += 1;
		chat += 1;
		rongeur += 1;
	}
	
	if ($( "input[ value='pasbcp']" ).is(":checked")) {
		tarantule += 1;
		snake += 1;
	}
	
	if ($( "input[ value='insectes']" ).is(":checked")) {
		tarantule -= 4;
		rongeur -= 1;
	}
	
	if ($( "input[ value='dark']" ).is(":checked")) {
		chat -= 1;
	}
	
	if ($( "input[ value='rat']" ).is(":checked")) {
		chat += 1;
		snake -= 4;
		rongeur -= 1;
	}
	
	if ($( "input[ value='seul']" ).is(":checked")) {
		chien += 1;
		snake -= 1;
		tarantule -= 1;
	}
	
	if ($( "input[ value='vide']" ).is(":checked")) {
		cheval -= 2;
	}
	
	if (($( "input[ value='occuper']" ).is(":checked")) || $( "input[ value='accompagner']" ).is(":checked")) {
		cheval += 1;
		chien += 2;
		chat += 2;
	}
	
	if ($( "input[ value='intriguer']" ).is(":checked")) {
		tarantule += 1;
		snake += 1;
	}
	
	if ($( "input[ value='mieux']" ).is(":checked")) {
		chat += 1;
		chien += 1;
		cheval += 1;
	}
	
	if ($( "input[ value='mieux']" ).is(":checked")) {
		chat += 1;
		chien += 1;
		cheval += 1;
	}
	
	if ($( "input[ value='rythme']" ).is(":checked")) {
		rongeur -= 1;
		cheval -=1;
	}
	
	if ($( "input[ value='25']" ).is(":checked")) {
		rongeur += 1;
		tarantule += 1;
		cheval -=1;
	}
	
	if ($( "input[ value='35']" ).is(":checked")) {
		snake += 1;
		cheval -=1;
	}
	
	if ($( "input[ value='65']" ).is(":checked")) {
		chat += 1;
		chien += 1;
		cheval -=1;
	}
	
	if (($( "input[ value='tres']" ).is(":checked")) || ($( "input[ value='betises']" ).is(":checked")) || ($( "input[ value='allergie']" ).is(":checked"))){
		chat -= 1;
		cheval -= 1;
		chien -= 1;
	}
	
	if ($( "input[ value='rats']" ).is(":checked")) {
		tarantule -= 3;
		snake -= 3;
	}
	
	if ($( "input[ value='sortir']" ).is(":checked")) {
		chien -= 2;
	}
	
	//transformer en pourcentage

	var res = 0.0;
	res += cheval+chat+chien+tarantule+snake+rongeur;

	cheval = (cheval*100)/res;
	chat = (chat*100)/res;
	chien = (chien*100)/res;
	tarantule = (tarantule*100)/res;
	snake = (snake*100)/res;
	rongeur = (rongeur*100)/res;
	
	alert("chien = "+chien+"%"+"\n"+
			"chat ="+chat+"%"+"\n"+
			"rongeur ="+rongeur+"%"+"\n"+
			"snake ="+snake+"%"+"\n"+
			"tarentule ="+tarantule+"%"+"\n"+
			"cheval ="+cheval+"%"+"\n"
	);
});