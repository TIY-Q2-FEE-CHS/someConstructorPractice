function Character(name, type, ability, speed) {
		this.name = name;
		this.type = type;
		this.ability = ability;
		this.life = 100;
		this.changeAbility = function(newAbility) {
			this.ability = newAbility;
		};
		this.speed = speed;
		this.addDamage = function(weapon) {
			if (this.life <= 0) {
				console.log("im in add damage if less eq to this.life");
				this.ability = "none";
				alert(this.name + " died. Game over for" + this.name);
			}
			this.life = this.life - weapon.damage;

		};
}

function World(landType, gravity, oxygen) {
		this.landType = landType;
		// 1 = earth gravity
		this.gravity = gravity;
		this.oxygen = oxygen || "unknown";
		this.blowShitUp = function() {
			this.gravity = 0;
			this.landType = "space";
		};
}

function Weapons(type, damage, weight) {
		this.type = type || "pea shooter";
		this.damage = damage || 0;
		this.weight = weight || "1 kilo";
		this.fire = function(target) {
			console.log("pew pew");
			var chance = Math.floor(Math.random() * 10);
			console.log(chance);
			if (chance < 3) {
				target.addDamage(this);
			}
		};

}
var ariel = new Character("ariel", "angel", "flying harbinger of truth", 300);
var laserGun = new Weapons("gun", 90, "4 kilos");

function Phone(type, brand) {
	this.type = type;
	this.brand = brand;

}

Phone.prototype.dropPhone = function() {
	this.broken = true;
};

var calvinPhone = new Phone("smart", "apple");










