$("#formulaire").submit(function(e){
	
	e.preventDefault(); // empêcher de rediriger vers une autre page

	var chien = 5;
	var chat = 5;
	var rongeur = 5;
	var snake = 5;
	var tarantule = 5;
	var cheval = 5;
	
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
	cheval = Math.round(cheval*100)/100; //pour afficher 2 d?cimales seulement
	chat = (chat*100)/res;
	chat = Math.round(chat*100)/100;
	chien = (chien*100)/res;
	chien = Math.round(chien*100)/100;
	snake = (snake*100)/res;
	snake = Math.round(snake*100)/100;
	rongeur = (rongeur*100)/res;
	rongeur = Math.round(rongeur*100)/100;
	

	//pour les classer du plus grand au plus petit
	var tab = [];
	tab.push(cheval, chien, chat, rongeur, tarantule, snake);
	tab.sort(function(a, b) { return b - a; });
	
	/*
	//je sais pas comment mettre le tableau class? ici mais de toute
	//fa?on tu voulais mettre les resultats dans une page appart non?
	alert("chien = "+chien+"%"+"\n"+
			"chat ="+chat+"%"+"\n"+
			"rongeur ="+rongeur+"%"+"\n"+
			"snake ="+snake+"%"+"\n"+
			"tarentule ="+tarantule+"%"+"\n"+
			"cheval ="+cheval+"%"+"\n"
	);
	*/

	var noms = ['Chien', 'Chat', 'Serpent', 'Rongeur', 'Tarentule', 'Cheval'];
	var ids = ['chien', 'chat', 'snake', 'rongeur', 'tarentule', 'cheval'];
	var values = [chien, chat, snake, rongeur, tarantule, cheval];
	var i;
	
	for(i = 0; i < ids.length; ++i) {
		
		$('#' + ids[i]).html(noms[i] + ' : ' + values[i] + '%')
		   .css("animation-name", "none") // trick pour restart l'animation
		   .css("width", values[i] * 2 + '%') // on modifie la width ici pour forcer le re-chargement de l'affichage
		   .css("animation-name", "pourcentage")
		   .attr('class', 'resultat');
		  
		if(values[i] >= tab[0]) {
		
			$('#' + ids[i]).addClass('meilleur_resultat');	
		}
	}
});