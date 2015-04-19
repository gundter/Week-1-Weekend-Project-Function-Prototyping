var arrayUser = [];
var attackBonus;
var i;

document.getElementById('addStats').addEventListener('click', addStats);
document.getElementById('fight').addEventListener('click', fight);

function addStats (){
	console.log("Entering addStats function");
	//|-----------------Creating Monster-----------------------------|
var Monster = {
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
}
//|---------------Creating Player--------------------------------|
var Player = Object.create( Monster );
Player.type = "Player";
Player.enteredName = document.getElementById('name').elements[0].value;

arrayUser.push(Player);
arrayUser.push(Monster);

for (i=0; i < arrayUser.length; i++){
		document.getElementById('name').reset();
		document.getElementById('userName').innerHTML = arrayUser[i].enteredName;

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

function fight(){
	for (i = 0; i <arrayUser.length -1; i++){
		var playerAttack = arrayUser[i].attack;
		var monsterAttack = arrayUser[i+1].attack;

		if (monsterAttack > playerAttack){
			document.getElementById('result').innerHTML = "The Monster's attack is: " + monsterAttack +"!/n" +"The Player's attack is: " + playerAttack + "!/n" + "The Monster wins!";
			//alert("The Monster's attack is: " + monsterAttack +"!/n" +"The Player's attack is: " + playerAttack + "!/n" + "The Monster wins!");
		}else if (monsterAttack < playerAttack){
			document.getElementById('result').innerHTML = "The Monster's attack is: " + monsterAttack +"!/n" +"The Player's attack is: " + playerAttack + "!/n" + "The Player wins!";
			//alert("The Monster's attack is: " + monsterAttack +"!/n" +"The Player's attack is: " + playerAttack + "!/n" + "The Player wins!");
		}else if (monsterAttack == playerAttack){
			document.getElementById('result').innerHTML = "The Monster's attack is: " + monsterAttack +"!/n" +"The Player's attack is: " + playerAttack + "!/n" + "The result is a tie!";
			//alert("The Monster's attack is: " + monsterAttack +"!/n" +"The Player's attack is: " + playerAttack + "!/n" + "The result is a tie!");
		}
	}
}

function rollDie(){
	return Math.floor(Math.random() * 20) + 1;
}