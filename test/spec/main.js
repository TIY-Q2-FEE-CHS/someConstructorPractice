/* global describe, it */

(function () {
    'use strict';

    describe('Constructors FTW', function () {
        describe('Weapons Constructor Tests', function () {
        	var testWeapon = new Weapons();
        	var nonDefaultWeapon = new Weapons("slingshot", 20, ".5 kilo");

        		it('should be an instance of Weapons', function() {
        			expect(testWeapon).to.be.an.instanceof(Weapons);
        		});

        		it('instance should have defaults', function() {
        			// type
        			expect(testWeapon.type).to.equal('pea shooter');
        			// damage
        			expect(testWeapon.damage).to.equal(0);
        			// weight
        			expect(testWeapon.weight).to.equal('1 kilo');


        		});

        		it('defaults should be correct type', function() {

        			expect(testWeapon.type).to.be.a('string');
        			expect(testWeapon.damage).to.be.a('number');
        			expect(testWeapon.weight).to.be.a('string');
        		});

        		it('instance properties should relflect what was passed in', function() {

        			expect(nonDefaultWeapon.type).to.equal('slingshot');
        			expect(nonDefaultWeapon.damage).to.equal(20);
        			expect(nonDefaultWeapon.weight).to.equal('.5 kilo');

        			// laser gun from main.js file

        			expect(laserGun.type).to.equal('gun');
        			expect(laserGun.damage).to.equal(90);
        			expect(laserGun.weight).to.equal('4 kilos');


        		});

        		it('the weapon.fire method successfully subtracts damage', function() {
        				// to eliminate chance, we assign hard value
        				laserGun.chance = 2;
        				expect(ariel.life).to.equal(100);	
        				laserGun.fire(ariel);
        				expect(ariel.life).to.equal(10);


        		});

        		
            
        });
    });
		
		describe('Character Constructor Tests', function() {
				var testCharacter = new Character();
        var characterWithProperties = new Character("Ryan McGovernator", "Cyborg", "x ray vision", "usain bolt fast");
        		
        		it('should be an instance of Character', function() {
        			expect(testCharacter).to.be.an.instanceof(Character);
        		});

        		describe('Character defaults', function() {

        			// there's only one default name
        			it('should only have one default, this.name', function(){

        				expect(testCharacter.name).to.equal("cookie monster");
        				expect(testCharacter.type).to.be.an('undefined');
        				expect(testCharacter.ability).to.be.an('undefined');
        				expect(testCharacter.speed).to.be.an('undefined');

        			});
        		});

        		it('character instance should be able to change ability', function() {
        			expect(characterWithProperties.ability).to.be.a('string');
        			expect(characterWithProperties.ability).to.be.equal('x ray vision');

        			// change the ability
        			characterWithProperties.changeAbility('can swim 1000mph');
        			expect(characterWithProperties.ability).to.be.equal('can swim 1000mph');

        		});

        		it('character instance addDamage should subtract from life', function() {
        			var nonDefaultWeapon = new Weapons("slingshot", 20, ".5 kilo");

        			expect(characterWithProperties.life).to.be.equal(100);
        			characterWithProperties.addDamage(nonDefaultWeapon);
        			expect(characterWithProperties.life).to.be.equal(80);



        		});
        		it('if character life is zero, ability should be none', function() {
        				characterWithProperties.life = 0;
        				var nonDefaultWeapon = new Weapons("slingshot", 20, ".5 kilo");
        				characterWithProperties.addDamage(nonDefaultWeapon);
        				expect(characterWithProperties.ability).to.be.equal("none");

        			});

		});


})();