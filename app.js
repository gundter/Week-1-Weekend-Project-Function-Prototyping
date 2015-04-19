var arrayUser = [];
var attackBonus;
var i;

document.getElementById('addStats').addEventListener('click', makePlayer);
//document.getElementById().addEventListener('click', fight);

function makePlayer(){
	arrayUser.push(new Monster("Player"));
	arrayUser.push(new Monster("Monster"));

	for (i=0; i < arrayUser.length; i++){
		document.getElementById('name').reset();
		document.getElementById('pMName').innerHTML = arrayUser[i].name;

		document.getElementById('strength').reset();
		document.getElementById('userStr').innerHTML = arrayUser[i].strength;

		document.getElementById('dexterity').reset();
		document.getElementById('userDex').innerHTML = arrayUser[i].dexterity;

		document.getElementById('constitution').reset();
		document.getElementById('userCon').innerHTML = arrayUser[i].constitution;

		document.getElementById('wisdom').reset();
		document.getElementById('userWis').innerHTML = arrayUser[i].wisdom;

		document.getElementById('intelligence').reset();
		document.getElementById('userInt').innerHTML = arrayUser[i].intelligence;

		document.getElementById('charisma').reset();
		document.getElementById('userChar').innerHTML = arrayUser[i].charisma;
	}
}

function Monster (name) {
	this.name = name;
	this.strength = parseInt(document.getElementById('strength').elements[0].value);
	this.dexterity = parseInt(document.getElementById('dexterity').elements[0].value);;
	this.constitution = parseInt(document.getElementById('constitution').elements[0].value);;
	this.wisdom = parseInt(document.getElementById('wisdom').elements[0].value);;
	this.intelligence = parseInt(document.getElementById('intelligence').elements[0].value);;
	this.charisma = parseInt(document.getElementById('charisma').elements[0].value);;
	this.attack = function(){
		if (this.name == "Monster"){
			attackBonus = rollDie();
			this.attBonus = attackBonus;
			this.attackTotal = attackBonus + this.strength;
			return this.attackTotal;
		}else if (this.name == "Player"){
			attackBonus = rollDie();
			this.attBonus = attackBonus;
			this.attackTotal = attackBonus + this.dexterity;
			return this.attackTotal;
		}
	}
}

function fight(){
	for (i = 0; i <arrayUser.length - 1; i++){
		var playerAttack = arrayUser[i].attack;
		var monsterAttack = arrayUser[i+1].attack;

		
	}
}

function rollDie(){
	return Math.floor(Math.random() *20) + 1;
}