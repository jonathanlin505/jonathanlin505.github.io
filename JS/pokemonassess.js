var typeMatchupOffense = [
	[50, 100, 50, 50, 25, 25, 25, 25, 25, 100, 50, 50, 50, 25, 100, 50, 25, 50],
	[50, 25, 50, 50, 25, 25, 50, 50, 100, 50, 50, 50, 50, 50, 100, 50, 50, 50],
	[50, 50, 100, 50, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 25, 50],
	[50, 50, 25, 25, 50, 50, 50, 100, 50, 25, 0, 50, 50, 50, 50, 50, 50, 100],
	[50, 100, 100, 50, 50, 100, 25, 50, 50, 50, 50, 50, 50, 25, 50, 50, 25, 50],
	[25, 100, 50, 50, 25, 50, 50, 25, 0, 50, 50, 100, 100, 25, 25, 100, 100, 50],
	[100, 50, 25, 50, 50, 50, 25, 50, 50, 100, 50, 100, 50, 50, 50, 25, 100, 25],
	[100, 50, 50, 25, 50, 100, 50, 50, 50, 100, 50, 50, 50, 50, 50, 25, 25, 50],
	[50, 25, 50, 50, 50, 50, 50, 50, 100, 50, 50, 50, 0, 50, 100, 50, 50, 50],
	[25, 50, 25, 50, 50, 50, 25, 25, 50, 25, 100, 50, 50, 25, 50, 100, 25, 100],
	[25, 50, 50, 100, 50, 50, 100, 0, 50, 25, 50, 50, 50, 100, 50, 100, 100, 50],
	[50, 50, 100, 50, 50, 50, 25, 100, 50, 100, 100, 25, 50, 50, 50, 50, 25, 25],
	[50, 50, 50, 50, 50, 50, 50, 50, 0, 50, 50, 50, 50, 50, 50, 25, 25, 50],
	[50, 50, 50, 50, 100, 50, 50, 50, 25, 100, 25, 50, 50, 25, 50, 25, 0, 50],
	[0, 50, 50, 50, 100, 50, 50, 50, 50, 50, 50, 50, 100, 25, 50, 25, 50],
	[100, 50, 50, 50, 50, 25, 100, 100, 50, 50, 25, 100, 50, 50, 50, 50, 25, 50],
	[50, 50, 50, 25, 100, 50, 25, 50, 50, 50, 50, 100, 50, 50, 50, 100, 25, 25],
	[50, 50, 25, 50, 50, 50, 100, 50, 50, 25, 100, 50, 50, 50, 50, 100, 50, 25]
];

var typeMatchupDefense = [
	[1, 1, 1, 1, 1, 0.5, 2, 2, 1, 0.5, 0.5, 1, 1, 1, 1, 2, 1, 1],
	[2, 0.5, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 1, 0, 1, 1, 1],
	[1, 1, 2, 0.5, 2, 1, 0.5, 1, 1, 0.5, 1, 2, 1, 1, 1, 1, 1, 0.5],
	[1, 1, 1, 0.5, 1, 1, 1, 0.5, 1, 1, 2, 1, 1, 1, 1, 1, 0.5, 1],
	[0.5, 0.5, 0, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1],
	[0.5, 0.5, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 0.5, 1, 1],
	[0.5, 1, 1, 1, 0.5, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 2, 0.5, 2],
	[0.5, 1, 1, 2, 1, 0.5, 1, 1, 1, 0.5, 0, 2, 1, 1, 1, 2, 1, 1],
	[0.5, 2, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 0, 0.5, 1, 1, 1, 1],
	[2, 1, 1, 0.5, 1, 1, 2, 2, 1, 0.5, 0.5, 2, 1, 2, 1, 1, 1, 0.5],
	[1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0.5, 1, 0.5, 1, 2],
	[1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 2, 1],
	[1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 2, 1, 1, 0.5, 2, 1, 1, 1],
	[2, 2, 1, 1, 1, 0.5, 1, 1, 2, 1, 1, 1, 1, 1, 0.5, 1, 1, 1],
	[1, 1, 1, 1, 1, 2, 0.5, 0.5, 1, 2, 2, 1, 0.5, 0.5, 1, 1, 2, 2],
	[0.5, 1, 0.5, 1, 0.5, 2, 2, 0.5, 1, 0.5, 2, 0.5, 0.5, 0, 0.5, 0.5, 0.5, 1],
	[1, 1, 1, 2, 1, 1, 0.5, 1, 1, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 0.5]
];


var pokeTeam = [];
var pokeTeamd = [];

if(localStorage.pokeData == undefined){

} else {
	var pokeData = JSON.parse(localStorage.pokeData);

	if(pokeData[0].t1 == ""){

	} else {

		for(var i = 0; i < pokeData.length; i++){
			var pokeType = [];
			var pokeTyped = [];

			if(pokeData[i].t1 == 'bug'){
				var type1 = typeMatchupOffense[0];
				var type1d = typeMatchupDefense[0];
			} else if(pokeData[i].t1 == 'dark'){
				var type1 = typeMatchupOffense[1];
				var type1d = typeMatchupDefense[1];
			} else if(pokeData[i].t1 == 'dragon'){
				var type1 = typeMatchupOffense[2];
				var type1d = typeMatchupDefense[2];
			} else if(pokeData[i].t1 == 'electric'){
				var type1 = typeMatchupOffense[3];
				var type1d = typeMatchupDefense[3];
			} else if(pokeData[i].t1 == 'fairy'){
				var type1 = typeMatchupOffense[4];
				var type1d = typeMatchupDefense[4];
			} else if(pokeData[i].t1 == 'fighting'){
				var type1 = typeMatchupOffense[5];
				var type1d = typeMatchupDefense[5];
			} else if(pokeData[i].t1 == 'fire'){
				var type1 = typeMatchupOffense[6];
				var type1d = typeMatchupDefense[6];
			} else if(pokeData[i].t1 == 'flying'){
				var type1 = typeMatchupOffense[7];
				var type1d = typeMatchupDefense[7];
			} else if(pokeData[i].t1 == 'ghost'){
				var type1 = typeMatchupOffense[8];
				var type1d = typeMatchupDefense[8];
			} else if(pokeData[i].t1 == 'grass'){
				var type1 = typeMatchupOffense[9];
				var type1d = typeMatchupDefense[9];
			} else if(pokeData[i].t1 == 'ground'){
				var type1 = typeMatchupOffense[10];
				var type1d = typeMatchupDefense[10];
			} else if(pokeData[i].t1 == 'ice'){
				var type1 = typeMatchupOffense[11];
				var type1d = typeMatchupDefense[11];
			} else if(pokeData[i].t1 == 'normal'){
				var type1 = typeMatchupOffense[12];
				var type1d = typeMatchupDefense[12];
			} else if(pokeData[i].t1 == 'poison'){
				var type1 = typeMatchupOffense[13];
				var type1d = typeMatchupDefense[13];
			} else if(pokeData[i].t1 == 'psychic'){
				var type1 = typeMatchupOffense[14];
				var type1d = typeMatchupDefense[14];
			} else if(pokeData[i].t1 == 'rock'){
				var type1 = typeMatchupOffense[15];
				var type1d = typeMatchupDefense[15];
			} else if(pokeData[i].t1 == 'steel'){
				var type1 = typeMatchupOffense[16];
				var type1d = typeMatchupDefense[16];
			} else if(pokeData[i].t1 == 'water'){
				var type1 = typeMatchupOffense[17];
				var type1d = typeMatchupDefense[17];
			} else {
				var type1 = "";
				var type1d = "";
			}

			if(pokeData[i].t2 == 'bug'){
				var type2 = typeMatchupOffense[0];
				var type2d = typeMatchupDefense[0];
			} else if(pokeData[i].t2 == 'dark'){
				var type2 = typeMatchupOffense[1];
				var type2d = typeMatchupDefense[1];
			} else if(pokeData[i].t2 == 'dragon'){
				var type2 = typeMatchupOffense[2];
				var type2d = typeMatchupDefense[2];
			} else if(pokeData[i].t2 == 'electric'){
				var type2 = typeMatchupOffense[3];
				var type2d = typeMatchupDefense[3];
			} else if(pokeData[i].t2 == 'fairy'){
				var type2 = typeMatchupOffense[4];
				var type2d = typeMatchupDefense[4];
			} else if(pokeData[i].t2 == 'fighting'){
				var type2 = typeMatchupOffense[5];
				var type2d = typeMatchupDefense[5];
			} else if(pokeData[i].t2 == 'fire'){
				var type2 = typeMatchupOffense[6];
				var type2d = typeMatchupDefense[6];
			} else if(pokeData[i].t2 == 'flying'){
				var type2 = typeMatchupOffense[7];
				var type2d = typeMatchupDefense[7];
			} else if(pokeData[i].t2 == 'ghost'){
				var type2 = typeMatchupOffense[8];
				var type2d = typeMatchupDefense[8];
			} else if(pokeData[i].t2 == 'grass'){
				var type2 = typeMatchupOffense[9];
				var type2d = typeMatchupDefense[9];
			} else if(pokeData[i].t2 == 'ground'){
				var type2 = typeMatchupOffense[10];
				var type2d = typeMatchupDefense[10];
			} else if(pokeData[i].t2 == 'ice'){
				var type2 = typeMatchupOffense[11];
				var type2d = typeMatchupDefense[11];
			} else if(pokeData[i].t2 == 'normal'){
				var type2 = typeMatchupOffense[12];
				var type2d = typeMatchupDefense[12];
			} else if(pokeData[i].t2 == 'poison'){
				var type2 = typeMatchupOffense[13];
				var type2d = typeMatchupDefense[13];
			} else if(pokeData[i].t2 == 'psychic'){
				var type2 = typeMatchupOffense[14];
				var type2d = typeMatchupDefense[14];
			} else if(pokeData[i].t2 == 'rock'){
				var type2 = typeMatchupOffense[15];
				var type2d = typeMatchupDefense[15];
			} else if(pokeData[i].t2 == 'steel'){
				var type2 = typeMatchupOffense[16];
				var type2d = typeMatchupDefense[16];
			} else if(pokeData[i].t2 == 'water'){
				var type2 = typeMatchupOffense[17];
				var type2d = typeMatchupDefense[17];
			} else {
				var type2 = "";
				var type2d = "";
			}

			if(type1 == "" && type2 == ""){

			} else if (type1 != "" && type2 ==""){
				pokeTeam.push(type1);
			} else {
				pokeTeam.push(type1);
				pokeTeam.push(type2);

			}

			if(type1d == "" && type2d == ""){

			} else if (type1d != "" && type2d ==""){
				pokeTeamd[i] = type1d;
			} else {
				for(var j = 0; j < 18; j++){
					pokeTyped[j] = type1d[j] * type2d[j];
				}

				pokeTeamd[i] = pokeTyped;

			}

		}

	}
}

var offenseMatchup = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


var array = pokeTeam,
    offenseMatchup = array.reduce(function (r, a) {
        a.forEach(function (b, i) {
            r[i] = (r[i] || 0) + b;
        });
        return r;
    }, []);

for (i = 0; i < offenseMatchup.length; i++){
	offenseMatchup[i] = (offenseMatchup[i] / pokeTeam.length) * (localStorage.teamCount / 6);
}

var total = 0;
for(var i = 0; i < offenseMatchup.length; i++) {
    total += offenseMatchup[i];
}
var avg = total / offenseMatchup.length;

offenseMatchup.push(avg);

for (i = 0; i < offenseMatchup.length; i++){
	offenseMatchup[i] = offenseMatchup[i].toFixed(1);
}



var defenseMatchup = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for(i = 0; i < pokeTeamd.length; i++){
	for(j = 0; j < pokeTeamd[0].length; j++){

		if (pokeTeamd[i][j] == 4){
			pokeTeamd[i][j] = 0;
		} else if (pokeTeamd[i][j] == 2){
			pokeTeamd[i][j] = 25;
		} else if (pokeTeamd[i][j] == 1){
			pokeTeamd[i][j] = 50;
		} else if (pokeTeamd[i][j] == 0.5){
			pokeTeamd[i][j] = 50 + 50/3;
		} else if (pokeTeamd[i][j] == 0.25){
			pokeTeamd[i][j] = 50 + 100/3;
		} else if (pokeTeamd[i][j] == 0){
			pokeTeamd[i][j] = 100;
		}

	}
}

var arrayd = pokeTeamd,
    defenseMatchup = arrayd.reduce(function (r, a) {
        a.forEach(function (b, i) {
            r[i] = (r[i] || 0) + b;
        });
        return r;
    }, []);

for (i = 0; i < defenseMatchup.length; i++){
	defenseMatchup[i] = (defenseMatchup[i] / pokeTeamd.length) * (localStorage.teamCount / 6);
}


var total = 0;
for(var i = 0; i < defenseMatchup.length; i++) {
    total += defenseMatchup[i];
}
var avg = total / defenseMatchup.length;

defenseMatchup.push(avg);

for (i = 0; i < defenseMatchup.length; i++){
	defenseMatchup[i] = defenseMatchup[i].toFixed(1);
}

