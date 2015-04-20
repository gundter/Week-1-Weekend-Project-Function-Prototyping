var arrayPlayer = [];
var arrayMonster = [];
var attackBonus;
var i;

document.getElementById('addStats').addEventListener('click', addStats);
document.getElementById('fight').addEventListener('click', fight);

function Monster(strength, dexterity, constitution, wisdom, intelligence, charisma){
	this.type = "Monster";
	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.wisdom = wisdom;
	this.intelligence = intelligence;
	this.charisma = charisma;
	this.attack = function(){
		console.log("Hey, Im working");
			if (this.type == "Monster"){
				attackBonus = rollDie(1, 20);
				console.log("Monster attack bonus: " + attackBonus);
				this.attBonus = attackBonus;
				console.log("Monster attack bonus property" + this.attBonus);
				this.attackTotal = attackBonus + this.strength;
				console.log("Monster attack total: " + this.attackTotal);
				return this.attackTotal;
			}else if (this.type == "Player"){
				attackBonus = rollDie(1, 20);
				console.log("Player attack bonus: " + attackBonus);
				this.attBonus = attackBonus;
				console.log("Player attack bonus property: " + this.attBonus);
				this.attackTotal = attackBonus + this.dexterity;
				console.log("Player attack total: " + this.attackTotal);
				return this.attackTotal;
			}
		}
}

function addStats (){
	//console.log("Entering addStats function");
	//|-----------------Creating Monster-----------------------------|
	/*var Monster = {
		type : "Monster",
		strength : parseInt(document.getElementById('strength').elements[0].value),
		dexterity : parseInt(document.getElementById('dexterity').elements[0].value),
		constitution : parseInt(document.getElementById('constitution').elements[0].value),
		wisdom : parseInt(document.getElementById('wisdom').elements[0].value),
		intelligence : parseInt(document.getElementById('intelligence').elements[0].value),
		charisma : parseInt(document.getElementById('charisma').elements[0].value),
		attack : function(){
			if (this.type == "Monster"){
				attackBonus = rollDie();
				this.attBonus = attackBonus;
				this.attackTotal = attackBonus + this.strength;
				return this.attackTotal;
			}else if (this.type == "Player"){
				attackBonus = rollDie();
				this.attBonus = attackBonus;
				this.attackTotal = attackBonus + this.dexterity;
				return this.attackTotal;
			}
		}
	}*/
	//|---------------Creating Player--------------------------------|
	var Player = new Monster(
		parseInt(document.getElementById('strength').elements[0].value),
		parseInt(document.getElementById('dexterity').elements[0].value),
		parseInt(document.getElementById('constitution').elements[0].value),
		parseInt(document.getElementById('wisdom').elements[0].value),
		parseInt(document.getElementById('intelligence').elements[0].value),
		parseInt(document.getElementById('charisma').elements[0].value)
		);

	var Enemy = new Monster(
		parseInt(document.getElementById('strength').elements[0].value),
		parseInt(document.getElementById('dexterity').elements[0].value),
		parseInt(document.getElementById('constitution').elements[0].value),
		parseInt(document.getElementById('wisdom').elements[0].value),
		parseInt(document.getElementById('intelligence').elements[0].value),
		parseInt(document.getElementById('charisma').elements[0].value)
		);

	Player.type = "Player";
	Player.enteredName = document.getElementById('plaName').elements[0].value;

	Enemy.type = "Monster";
	Enemy.enteredName = document.getElementById('monName').elements[0].value;

	arrayMonster.push(Enemy);
	arrayPlayer.push(Player);

	console.log(Player);
	console.log(Enemy);

	console.log("ARRAY Player: " + arrayPlayer);
	console.log("Array Monster: " + arrayMonster);

	for (i=0; i < arrayPlayer.length; i++){
			document.getElementById('plaName').reset();
			document.getElementById('playerName').innerHTML = arrayPlayer[i].enteredName;

			document.getElementById('strength').reset();
			document.getElementById('playerStr').innerHTML = arrayPlayer[i].strength;

			document.getElementById('dexterity').reset();
			document.getElementById('playerDex').innerHTML = arrayPlayer[i].dexterity;

			document.getElementById('constitution').reset();
			document.getElementById('playerCon').innerHTML = arrayPlayer[i].constitution;

			document.getElementById('wisdom').reset();
			document.getElementById('playerWis').innerHTML = arrayPlayer[i].wisdom;

			document.getElementById('intelligence').reset();
			document.getElementById('playerInt').innerHTML = arrayPlayer[i].intelligence;

			document.getElementById('charisma').reset();
			document.getElementById('playerChar').innerHTML = arrayPlayer[i].charisma;
	}

	for (i=0; i < arrayMonster.length; i++){
			document.getElementById('monName').reset();
			document.getElementById('monsterName').innerHTML = arrayMonster[i].enteredName;

			document.getElementById('strength').reset();
			document.getElementById('monsterStr').innerHTML = arrayMonster[i].strength;

			document.getElementById('dexterity').reset();
			document.getElementById('monsterDex').innerHTML = arrayMonster[i].dexterity;

			document.getElementById('constitution').reset();
			document.getElementById('monsterCon').innerHTML = arrayMonster[i].constitution;

			document.getElementById('wisdom').reset();
			document.getElementById('monsterWis').innerHTML = arrayMonster[i].wisdom;

			document.getElementById('intelligence').reset();
			document.getElementById('monsterInt').innerHTML = arrayMonster[i].intelligence;

			document.getElementById('charisma').reset();
			document.getElementById('monsterChar').innerHTML = arrayMonster[i].charisma;
	}

}

function fight(){
	console.log("YUUUP ");
	for (i = 0; i <arrayPlayer.length; i++){
		console.log("Im in da player loop " + i);
		var playerAttack = arrayPlayer[i].attack();
		console.log("Player adjusted attack: "+ playerAttack);
	}
	for (i = 0; i < arrayMonster.length; i++){
		console.log("I'm in da monster loop " + i);
		var monsterAttack = arrayMonster[i].attack();
		console.log("Monster adjusted attack: " + monsterAttack);
	}
	if (monsterAttack > playerAttack){
		document.getElementById('result').innerHTML = "The Monster's attack is: " + monsterAttack +"!<br>" +"The Player's attack is: " + playerAttack + "!<br>" + "The Monster wins!";
		//alert("The Monster's attack is: " + monsterAttack +"!<br>" +"The Player's attack is: " + playerAttack + "!<br>" + "The Monster wins!");
	}else if (monsterAttack < playerAttack){
		document.getElementById('result').innerHTML = "The Monster's attack is: " + monsterAttack +"!<br>" +"The Player's attack is: " + playerAttack + "!<br>" + "The Player wins!";
		//alert("The Monster's attack is: " + monsterAttack +"!<br>" +"The Player's attack is: " + playerAttack + "!<br>" + "The Player wins!");
	}else if (monsterAttack == playerAttack){
		document.getElementById('result').innerHTML = "The Monster's attack is: " + monsterAttack +"!<br>" +"The Player's attack is: " + playerAttack + "!<br>" + "The result is a tie!";
		//alert("The Monster's attack is: " + monsterAttack +"!<br>" +"The Player's attack is: " + playerAttack + "!<br>" + "The result is a tie!");
	}

}
/*
		
	}
*/



function rollDie(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}