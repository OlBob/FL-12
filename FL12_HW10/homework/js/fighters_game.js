class Fighter {
	constructor(obj) {
		const _name = obj.name,
				_damage = obj.damage,
				_strength = obj.strength,
				_agility = obj.agility;
		let _hp = obj.hp,
				_win = 0,
				_loss = 0;

		return {
			getName: () => _name,
			getDamage: () => _damage,
			getStrength: () => _strength,
			getAgility: () => _agility,
			getHealth: () => _hp,

			attack: (secondFighter) => {
				const PROBABILITY = secondFighter.getStrength() + secondFighter.getAgility(),
							VARIABLE = 101;
				if (Math.floor(Math.random() * VARIABLE) >= PROBABILITY) {
					console.log(`${_name} makes ${_damage} damage to ${secondFighter.getName()}`)
					secondFighter.dealDamage(_damage);
				} else {
					console.log(`${_name} attack missed`);
				}
			},
			logCombatHistory: () => {
				console.log(`Name: ${_name}, Wins: ${_win}, Losses: ${_loss}`);
			},
			heal: (value) => {
				_hp += value;
				return;
			},
			dealDamage: (value) => {
				_hp -= value;
				_hp < 0 ? _hp = 0 : _hp;
				return;
			},
			addWin: () => _win++,
			addLoss: () => _loss++
		}
	}
}

const battle = (fighter1, fighter2) => {
	let cheked = false;
	const check = () => {
		cheked = true;
		return !!(fighter1.getHealth() === 0 || fighter2.getHealth() === 0);
	};
	if (check() || !cheked) {
		let deadFighter = fighter1.getHealth() === 0 ? fighter1.getName() : fighter2.getName();
		console.log(`The Battle can not begin! ${deadFighter} is dead.`);
		return;
	}

	const fight = () => {
		if (fighter1.getHealth() === 0) {
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
			fighter1.attack(fighter2);
			fighter2.attack(fighter1);
			return fight();
		}
	}
	return fight();
}


let myFighter = new Fighter({ name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25 });


const myFighter2 = new Fighter({ name: 'Vladius', damage: 35, hp: 100, strength: 20, agility: 27 });


battle(myFighter, myFighter2);

// myFighter.logCombatHistory();

// myFighter2.logCombatHistory();