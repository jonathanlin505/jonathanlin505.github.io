function randomizeSelection(){
	var numbers = [];
	for (var i = 0; i < 721; i++){
		numbers[i] = i+1;
	};

	function shuffle(o) {
	    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	};

	var random = shuffle(numbers);

	for(var i = 0; i < 10; i++){
		$.getJSON({
			url: "https://pokeapi.co/api/v2/pokemon/" + random[i],
			success: function(species){
				displayAll(species);
				},
		  	error: function(species){
				alert('AJAX error');
			  	console.log(species);
				}
		 });
	}
};

$('#randomize').click(function(){
	$('tbody').empty();
	randomizeSelection();
	return false;
});



var assessTypes = [
	{"t1":"", "t2":""},
	{"t1":"", "t2":""},
	{"t1":"", "t2":""},
	{"t1":"", "t2":""},
	{"t1":"", "t2":""},
	{"t1":"", "t2":""}
];

// LOCAL STORAGE
function addLocal(){
	localStorage.teamContainer = $('#teamContainer').html();
	localStorage.teamCount = $('#teamContainer').children().length;

	assessTypes = [
		{"t1":"", "t2":""},
		{"t1":"", "t2":""},
		{"t1":"", "t2":""},
		{"t1":"", "t2":""},
		{"t1":"", "t2":""},
		{"t1":"", "t2":""}
	];
	
	for(var i = 1; i < $('#teamContainer').children().length + 1; i++){
		var localType1 = $('#teamContainer').children(':nth-child(' + i + ')').children(':nth-child(3)').attr('src');
		var localType2 = $('#teamContainer').children(':nth-child(' + i + ')').children(':nth-child(4)').attr('src');

		if(localType2 == undefined){
			localType1 = localType1.slice(0,-4).substring(4);
			assessTypes[i-1].t1 = localType1;
			assessTypes[i-1].t2 = "";
		} else {
			localType1 = localType1.slice(0,-4).substring(4);
			localType2 = localType2.slice(0,-4).substring(4);
			assessTypes[i-1].t1 = localType1;
			assessTypes[i-1].t2 = localType2;
		}
	}

	localStorage.pokeData = JSON.stringify(assessTypes);
}



$('#teamContainer').html(localStorage.teamContainer);

function teamCount(){
	$('#teamCount').html($('#teamContainer').children().length);
}

$('#clearTeam').click(function(){
	$('#teamContainer').empty();
	nopeButtons();
	teamCount();
	addLocal();

});

function nopeButtons(){
	if ($('.pokeCard').length == 6){
		$('.addTeam').css('border','2px solid rgb(179,179,179)');
		$('.addTeam').css('background-color','rgba(212,212,212,1)');
		$('.addTeam').css('color','rgb(179,179,179)');
		$('.addTeam').hover(function(){
			$(this).css('cursor','auto');
			$(this).css('background-color','rgba(212,212,212,1)');
			$(this).css('color','rgb(179,179,179)');
		});
		$('.addTeam').mouseleave(function(){
			$(this).css('background-color','rgba(212,212,212,1)');
			$(this).css('color','rgb(179,179,179)');
		});
	} else {
		$('.addTeam').css('border','2px solid #7dc5a2');
		$('.addTeam').css('background-color','rgba(187,187,187,0)');
		$('.addTeam').css('color','#7dc5a2');
		$('.addTeam').hover(function(){
			$(this).css('cursor','pointer');
			$(this).css('background-color','#93dcb8');
			$(this).css('color','#fbfbfb');
		});
		$('.addTeam').mouseleave(function(){
			$(this).css('background-color','rgba(187,187,187,0)');
			$(this).css('color','#7dc5a2');
		});
	}
}

function bindRemoveTeam(){
			$('.removeTeam').click(function(){
				$(this).parent().remove();
				nopeButtons();
				teamCount();
				addLocal();
			})
		};

function bindAddTeam(){
			$('.addTeam').click(function(){

				if ($('.pokeCard').length < 6){
					var div = $('<div>');
					var p = $('<p>');
					var imgSprite = $('<img>');
					var imgType1 = $('<img>');
					var imgType2 = $('<img>');
					var button = $('<button>');

					div.addClass('pokeCard');
					p.html($(this).parent().parent().children(':nth-child(3)').html());
					imgSprite.attr('src', $(this).parent().parent().children(':nth-child(2)').children().attr('src'));
					imgSprite.attr('alt', $(this).parent().parent().children(':nth-child(2)').children().attr('alt'));
					imgType1.attr('src', $(this).parent().parent().children(':nth-child(4)').children().attr('src'));
					imgType1.attr('alt', $(this).parent().parent().children(':nth-child(4)').children().attr('alt'));
					imgType2.attr('src', $(this).parent().parent().children(':nth-child(5)').children().attr('src'));
					imgType2.attr('alt', $(this).parent().parent().children(':nth-child(5)').children().attr('alt'));
					button.html('-');
					button.addClass('removeTeam');

					div.append(p);
					div.append(imgSprite);
					div.append(imgType1);
					if ($(this).parent().parent().children(':nth-child(5)').html() != ''){
						div.append(imgType2);
					}
					div.append(button);

					$('#teamContainer').append(div);

					bindRemoveTeam();
					nopeButtons();
					teamCount();
					addLocal();
				};
			})
		};

bindRemoveTeam();
nopeButtons();
teamCount();
bindAddTeam();



	var type_2 = 'any';
  	var type_1 = 'any';

  	$('#submit-id').click(function(){
  		$('small').html('');

  		var searchTerm = $('#name').val().trim();
  		var searchType = $('#type').val().trim();
  		var searchType2 = $('#type2').val().trim();

  		$('#name').val('');
  		$('#type').val('any');
  		$('#type2').val('any');

  		if(searchTerm.length == 0 && searchType =='any' && searchType2 == 'any'){
  			sortAll();
  			return false;
  		} else if ((searchTerm.length != 0 && searchType != 'any') || (searchTerm.length != 0 && searchType2 != 'any')){
  			$('small').html('Search by name/dex no. or by type. Not both.')
  		} else if (searchTerm.length != 0){
		  	$.getJSON({
		  		url: "https://pokeapi.co/api/v2/pokemon/" + searchTerm,
		  		success: function(species){
		  			displayDataByName(species);
		  		},
		  		error: function(species){
		  			$('small').html('Invalid Pokemon or dex no.');
		  			console.log(species);
		  		}
		  	});
		  	return false;
  		} else {
  			if (searchType == 'any'){
  				type_1 = searchType2;
  				type_2 = searchType;
  			} else {
  				type_1 = searchType;
  				type_2 = searchType2;
  			}
  			$.getJSON({
  				url: "https://pokeapi.co/api/v2/type/" + type_1,
  				success: function(typeResult){
  					sortDataByType(typeResult);
  				},
  				error: function(typeResult){
  					alert('AJAX error');
  					console.log(typeResult);
  				}
  			});
  		};
  		return false;
  	});

  	function sortAll(){
  		$('tbody').empty();

  		for (var i = 1; i < 722; i++){
  			$.getJSON({
  				url: "https://pokeapi.co/api/v2/pokemon/" + i,
  				success: function(allPokemon){
  					displayAll(allPokemon);
  				},
  				error: function(allPokemon){
  					alert('AJAX error');
  					console.log(allPokemon);
  				}
  			})
  		}

  	};

  	function sortDataByType(typeResult){
  		$('tbody').empty();

  		for (var i = 0; i < typeResult.pokemon.length; i++){
  			$.getJSON({
  				url: typeResult.pokemon[i].pokemon.url,
  				success: function(typePokemon){
  					displayDataByType(typePokemon);
  				},
  				error: function(typePokemon){
  					alert('AJAX error');
  					console.log(typePokemon);
  				}
  			})
  		}

  	};

  	function displayAll(allPokemon){

  		var dexNo = allPokemon.id;

  		if (dexNo > 721){
  			return false;
  		} else {
  			var name = allPokemon.name;
  			var spriteUrl = allPokemon.sprites.front_default;
  			var typeLength = allPokemon.types.length;
  			if (typeLength == 1){
  				var type1 = allPokemon.types[0].type.name;
  				var type2 = '';
  			} else if (allPokemon.types[0].slot == 1){
  				var type1 = allPokemon.types[0].type.name;
  				var type2 = allPokemon.types[1].type.name;
  			} else {
  				var type1 = allPokemon.types[1].type.name;
  				var type2 = allPokemon.types[0].type.name;
  			}	
  		}

  		var tr = $('<tr>');
  		var td1 = $('<td>');
		var td2 = $('<td>');
		var td3 = $('<td>');
		var td4 = $('<td>');
		var td5 = $('<td>');
		var td6 = $('<td>');
		var img1 = $('<img>');
		var img2 = $('<img>');
		var button = $('<button>');

		img1.attr('src', spriteUrl);
		img1.attr('alt', name);

		img2.attr('src', 'img/' + type1 + '.gif');
		img2.attr('alt', type1);

		td1.html(dexNo);
		td3.html(name);

		button.html('+');
		button.addClass('addTeam');

		td2.append(img1);
		td4.append(img2);
		if (type2 != ''){
			var img3 = $('<img>');
			img3.attr('src', 'img/' + type2 + '.gif');
			img3.attr('alt', type2);
			td5.append(img3);
		};
		td6.append(button);
		tr.append(td1);
		tr.append(td2);
		tr.append(td3);
		tr.append(td4);
		tr.append(td5);
		tr.append(td6);

		$('tbody').append(tr);

		$('.addTeam').unbind();
  		bindAddTeam();
  		nopeButtons();
  		countResults();


  	};

  	function displayDataByType(typePokemon){

  		var dexNo = typePokemon.id;

  		if (dexNo > 721){
  			return false;
  		} else {
  			var name = typePokemon.name;
  			var spriteUrl = typePokemon.sprites.front_default;
  			var typeLength = typePokemon.types.length;
  			if (typeLength == 1 && type_2 == 'any'){
  				var type1 = typePokemon.types[0].type.name;
  				var type2 = '';

  				var tr = $('<tr>');
		  		var td1 = $('<td>');
				var td2 = $('<td>');
				var td3 = $('<td>');
				var td4 = $('<td>');
				var td5 = $('<td>');
				var td6 = $('<td>');
				var img1 = $('<img>');
				var img2 = $('<img>');
				var button = $('<button>');

				img1.attr('src', spriteUrl);
				img1.attr('alt', name);

				img2.attr('src', 'img/' + type1 + '.gif');
				img2.attr('alt', type1);

				td1.html(dexNo);
				td3.html(name);

				button.html('+');
				button.addClass('addTeam');

				td2.append(img1);
				td4.append(img2);
				if (type2 != ''){
					var img3 = $('<img>');
					img3.attr('src', 'img/' + type2 + '.gif');
					img3.attr('alt', type2);
					td5.append(img3);
				};
				td6.append(button);
				tr.append(td1);
				tr.append(td2);
				tr.append(td3);
				tr.append(td4);
				tr.append(td5);
				tr.append(td6);

				$('tbody').append(tr);

  			} else if (typePokemon.types[0].slot == 1 && type_2 =='any'){
  				var type1 = typePokemon.types[0].type.name;
  				var type2 = typePokemon.types[1].type.name;

  				var tr = $('<tr>');
		  		var td1 = $('<td>');
				var td2 = $('<td>');
				var td3 = $('<td>');
				var td4 = $('<td>');
				var td5 = $('<td>');
				var td6 = $('<td>');
				var img1 = $('<img>');
				var img2 = $('<img>');
				var button = $('<button>');

				img1.attr('src', spriteUrl);
				img1.attr('alt', name);

				img2.attr('src', 'img/' + type1 + '.gif');
				img2.attr('alt', type1);

				td1.html(dexNo);
				td3.html(name);

				button.html('+');
				button.addClass('addTeam');

				td2.append(img1);
				td4.append(img2);
				if (type2 != ''){
					var img3 = $('<img>');
					img3.attr('src', 'img/' + type2 + '.gif');
					img3.attr('alt', type2);
					td5.append(img3);
				};
				td6.append(button);
				tr.append(td1);
				tr.append(td2);
				tr.append(td3);
				tr.append(td4);
				tr.append(td5);
				tr.append(td6);

				$('tbody').append(tr);

  			} else if (typePokemon.types[0].slot == 2 && type_2 =='any'){
  				var type1 = typePokemon.types[1].type.name;
  				var type2 = typePokemon.types[0].type.name;

  				var tr = $('<tr>');
		  		var td1 = $('<td>');
				var td2 = $('<td>');
				var td3 = $('<td>');
				var td4 = $('<td>');
				var td5 = $('<td>');
				var td6 = $('<td>');
				var img1 = $('<img>');
				var img2 = $('<img>');
				var button = $('<button>');

				img1.attr('src', spriteUrl);
				img1.attr('alt', name);

				img2.attr('src', 'img/' + type1 + '.gif');
				img2.attr('alt', type1);

				td1.html(dexNo);
				td3.html(name);

				button.html('+');
				button.addClass('addTeam');

				td2.append(img1);
				td4.append(img2);
				if (type2 != ''){
					var img3 = $('<img>');
					img3.attr('src', 'img/' + type2 + '.gif');
					img3.attr('alt', type2);
					td5.append(img3);
				};
				td6.append(button);
				tr.append(td1);
				tr.append(td2);
				tr.append(td3);
				tr.append(td4);
				tr.append(td5);
				tr.append(td6);

				$('tbody').append(tr);

  			} else if (type_1 != 'any' && type_2 != 'any'){
  				if (typePokemon.types.length == 1){

  				} else {

  					var type1Check = typePokemon.types[0].type.name;
	 				var type2Check = typePokemon.types[1].type.name;

  					if (type_1 == type1Check && type_2 == type2Check){

  						if (typePokemon.types[0].slot == 1){
  							var type1 = typePokemon.types[0].type.name;
	  						var type2 = typePokemon.types[1].type.name;
  						} else {
		  					var type1 = typePokemon.types[1].type.name;
		  					var type2 = typePokemon.types[0].type.name;
		  				}

	  					var tr = $('<tr>');
				  		var td1 = $('<td>');
						var td2 = $('<td>');
						var td3 = $('<td>');
						var td4 = $('<td>');
						var td5 = $('<td>');
						var td6 = $('<td>');
						var img1 = $('<img>');
						var img2 = $('<img>');
						var button = $('<button>');

						img1.attr('src', spriteUrl);
						img1.attr('alt', name);

						img2.attr('src', 'img/' + type1 + '.gif');
						img2.attr('alt', type1);

						td1.html(dexNo);
						td3.html(name);

						button.html('+');
						button.addClass('addTeam');

						td2.append(img1);
						td4.append(img2);
						if (type2 != ''){
							var img3 = $('<img>');
							img3.attr('src', 'img/' + type2 + '.gif');
							img3.attr('alt', type2);
							td5.append(img3);
						};
						td6.append(button);
						tr.append(td1);
						tr.append(td2);
						tr.append(td3);
						tr.append(td4);
						tr.append(td5);
						tr.append(td6);

						$('tbody').append(tr);

					} else if (type_1 == type2Check && type_2 == type1Check){

						if (typePokemon.types[0].slot == 1){
  							var type1 = typePokemon.types[0].type.name;
	  						var type2 = typePokemon.types[1].type.name;
  						} else {
		  					var type1 = typePokemon.types[1].type.name;
		  					var type2 = typePokemon.types[0].type.name;
		  				}

	  					var tr = $('<tr>');
				  		var td1 = $('<td>');
						var td2 = $('<td>');
						var td3 = $('<td>');
						var td4 = $('<td>');
						var td5 = $('<td>');
						var td6 = $('<td>');
						var img1 = $('<img>');
						var img2 = $('<img>');
						var button = $('<button>');

						img1.attr('src', spriteUrl);
						img1.attr('alt', name);

						img2.attr('src', 'img/' + type1 + '.gif');
						img2.attr('alt', type1);

						td1.html(dexNo);
						td3.html(name);

						button.html('+');
						button.addClass('addTeam');

						td2.append(img1);
						td4.append(img2);
						if (type2 != ''){
							var img3 = $('<img>');
							img3.attr('src', 'img/' + type2 + '.gif');
							img3.attr('alt', type2);
							td5.append(img3);
						};
						td6.append(button);
						tr.append(td1);
						tr.append(td2);
						tr.append(td3);
						tr.append(td4);
						tr.append(td5);
						tr.append(td6);

						$('tbody').append(tr);

					}

  				};
  			};
  		};
  		$('.addTeam').unbind();
  		bindAddTeam();
  		nopeButtons();
  		countResults();



  	};

  	function displayDataByName(species){
  		$('tbody').empty();

  		var dexNo = species.id;

  		if (dexNo > 721){
  			return false;
  		} else {
  			var name = species.name;
  			var spriteUrl = species.sprites.front_default;
  			var typeLength = species.types.length;
  			if (typeLength == 1){
  				var type1 = species.types[0].type.name;
  				var type2 = '';
  			} else if (species.types[0].slot == 1){
  				var type1 = species.types[0].type.name;
  				var type2 = species.types[1].type.name;
  			} else {
  				var type1 = species.types[1].type.name;
  				var type2 = species.types[0].type.name;
  			}	
  		}

  		var tr = $('<tr>');
  		var td1 = $('<td>');
		var td2 = $('<td>');
		var td3 = $('<td>');
		var td4 = $('<td>');
		var td5 = $('<td>');
		var td6 = $('<td>');
		var img1 = $('<img>');
		var img2 = $('<img>');
		var button = $('<button>');

		img1.attr('src', spriteUrl);
		img1.attr('alt', name);

		img2.attr('src', 'img/' + type1 + '.gif');
		img2.attr('alt', type1);

		td1.html(dexNo);
		td3.html(name);

		button.html('+');
		button.addClass('addTeam');

		td2.append(img1);
		td4.append(img2);
		if (type2 != ''){
			var img3 = $('<img>');
			img3.attr('src', 'img/' + type2 + '.gif');
			img3.attr('alt', type2);
			td5.append(img3);
		};
		td6.append(button);
		tr.append(td1);
		tr.append(td2);
		tr.append(td3);
		tr.append(td4);
		tr.append(td5);
		tr.append(td6);

		$('tbody').append(tr);
		bindAddTeam();
		nopeButtons();
		countResults();

  	};


countResults();
randomizeSelection();
addLocal();


function countResults(){
	$('#resultCount').html($('tbody').children().length);
	if ($('#resultCount').html() == "0"){
		$('small').html('No Pokemon with such type combination.');
	} else {
		$('small').html('');
	}
};