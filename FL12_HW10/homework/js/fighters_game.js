class Fighter {
	constructor(obj){
		this._name = obj.name;
		this._damage = obj.damage;
		this._hp = obj.hp;
		this._strength = obj.strength;
		this._agility = obj.agility;
		this.win = 0;
		this.loss = 0;
	}
	getName() {
		return this._name;
	}
	getDamage() {
		return this._damage;
	}
	getStrength() {
		return this._strength;
	}
	getAgility() {
		return this._agility;
	}
	getHealth() {
		return this._hp;
	}

	attack(secondFighter) {
		//debugger;
		console.log(this);
		let random = Math.floor(Math.random() * 101);
		let probability = secondFighter.getStrength() + secondFighter.getAgility();
		if (random <= probability){
			console.log(`${this._name} makes ${this._damage} damage to ${secondFighter.getName()}`)
			secondFighter.dealDamage(this._damage);
			console.log(secondFighter.getHealth()); 
		} else {
			console.log(`${this._name} attack missed`);
		}
	}

	logCombatHistory(){
		let combatHistory = `Name: ${this._name}, Wins: ${this.win}, Losses: ${this.loss}`;
		console.log(combatHistory);
	}
	heal(value){
		this._hp += value;

	}
	dealDamage(value){
		//debugger;
		this._hp -= value;
		this._hp < 0 ? this._hp = 0 : this._hp
		return; 
	}
	addWin(){
		return this.win++;
	}
	addLoss(){
		return this.loss++;
	}
}

const battle = (fighter1, fighter2) => {
	//debugger;
	let fightsCount = 0, cheked = false;
	const check = () => {
		cheked = true;
		return !!(fighter1.getHealth() === 0 || fighter2.getHealth() === 0);
	};
	if (check() || cheked === false) {
		console.log('The Battle can not begin! One of the Fighters is dead.');
		return;
	}
	
	const fight = () => {
		if(fighter1.getHealth() === 0) {
			console.log(`${fighter2.getName()} has won`);
			fighter1.addLoss();
			fighter2.addWin();
			return;
		} else if (fighter2.getHealth() === 0) {
			console.log(`${fighter1.getName()} has won`);
			fighter2.addLoss();
			fighter1.addWin();
			return;
		} else {
			fightsCount++;
			console.log('Fights: ' + fightsCount);
			fighter1.attack(fighter2);
			fighter2.attack(fighter1);

			return fight();
		}
	}
	return fight();

}


const myFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});


const myFighter2 = new Fighter({name: 'Vladius', damage: 35, hp: 100, strength: 20, agility: 27});


battle(myFighter, myFighter2);

