class Fighter {
	#name; #damage; #agility; #hp; #strength;
	constructor(obj){
		this.#name = obj.name;
		this.#damage = obj.damage;
		this.#hp = obj.hp;
		this.#strength = obj.strength;
		this.#agility = obj.agility;
		this.win = 0;
		this.loss = 0;
	}
	getName() {
		return this.#name;
	}
	getDamage() {
		return this.#damage;
	}
	getStrength() {
		return this.#strength;
	}
	getAgility() {
		return this.#agility;
	}
	getHealth() {
		return this.#hp;
	}

	attack(secondFighter) {
		//debugger;
		console.log(this);
		let random = Math.floor(Math.random() * 101);
		let probability = secondFighter.getStrength() + secondFighter.getAgility();
		if (random <= probability){
			console.log(`${this.#name} makes ${this.#damage} damage to ${secondFighter.getName()}`)
			secondFighter.dealDamage(this.#damage);
			console.log(secondFighter.getHealth()); 
		} else {
			console.log(`${this.#name} attack missed`);
		}
	}

	logCombatHistory(){
		let combatHistory = `Name: ${this.#name}, Wins: ${win}, Losses: ${loss}`;
		console.log(combatHistory);
	}
	heal(value){
		this.#hp += value;

	}
	dealDamage(value){
		//debugger;
		this.#hp -= value;
		return this.#hp < 0 ? this.#hp = 0 : this.#hp; 
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
	// let check = () => {
	// 	cheked = true;
	// 	return fighter1.getHealth() === 0 || fighter2.getHealth() === 0 ? true : false;
	// };
	// if (check()) {
	// 		console.log("The Battle can not begin! One of the Fighters is dead.");
	// 		//return;
	// 	}
	// }
	let fight = () {
		
	}
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

		return battle(fighter1, fighter2);
	}


}


const myFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25}); // returns an object with methods


const myFighter2 = new Fighter({name: 'Vladius', damage: 35, hp: 100, strength: 20, agility: 27});

// myFighter.attack(myFighter2);

battle(myFighter, myFighter2);


// myFighter2.dealDamage(50);
// console.log(myFighter2.getHealth());
// Fighter methods:

// let name = myFighter.getName();
// console.log(name); // Maximus

// let damage = myFighter.getDamage();
// console.log(damage); // 20

// let strength = myFighter.getStrength();
// console.log(strength); // 30

// let agility = myFighter.getAgility();
// console.log(agility); // 25

// let health = myFighter.getHealth();
// console.log(health); // 100

// let name = myFighter.name;
// console.log(name); // undefined
