"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arena = void 0;
const abilities_1 = require("./abilities");
var clc = require("cli-color");
class Arena {
    static async tournament(hero1, hero2) {
        let hero2HP = hero2.hp;
        let hero1HP = hero1.hp;
        let i = 1;
        do {
            let x = Math.floor(Math.random() * 2 + 1);
            console.log(clc.yellow("..................................................."));
            console.log(clc.yellow.bold("     ROUND: " + i));
            let attackerHP;
            let defenderHP;
            if (x == 1) {
                console.log("Attacker: " + hero1.name + " Defender: " + hero2.name);
                attackerHP = hero1HP;
                defenderHP = hero2HP;
                console.log(clc.cyan("Before attack: Attacker's HP ( " + hero1.name + " ): " + defenderHP + "         Defender's HP ( " + hero2.name + " ): " + attackerHP));
                //Calculating ability chance
                let abilityChanceHero1 = Math.floor(Math.random() * 100 + 1);
                let abilityChanceHero2 = Math.floor(Math.random() * 100 + 1);
                //Calculating damage
                let damage = Math.floor(Math.random() * hero1.weaponDamageMax + hero1.weaponDamageMin);
                //Ability that affect armour
                hero2.armour = (0, abilities_1.AbilitythatAffectArmour)(abilityChanceHero2, hero2.ability, hero2.armour, hero2.name);
                //Calculating finalDamage
                let finalDamage = damage - Math.floor(hero2.armour / 3);
                //Abilities that affect finalDamage
                finalDamage = (0, abilities_1.AbilitiesThatAffectFinalDamage)(abilityChanceHero1, hero1.ability, finalDamage, hero1.name);
                //Calculating damage chance
                let DamageChanceRandomNumber = Math.floor(Math.random() * 100 + 1);
                if (DamageChanceRandomNumber < hero1.weaponDamageChance) {
                    //Calculating evasion
                    let evasionChance = Math.floor(Math.random() * 100);
                    //Ability that affect evasion
                    hero2.evasion = (0, abilities_1.AbilityThatAffectEvasion)(abilityChanceHero2, hero2.ability, hero2.evasion, hero2.name);
                    if (evasionChance <= hero2.evasion) {
                        console.log("");
                        console.log("MISSED HIT! Beacause of the evasion.");
                    }
                    else {
                        //Ability that affect hp
                        defenderHP = (0, abilities_1.AbilityThatAffectHp)(abilityChanceHero2, hero2.ability, hero2.name, defenderHP);
                        console.log(" ");
                        console.log("HIT!" + "          FinalDamage: " + finalDamage);
                        defenderHP -= finalDamage;
                    }
                }
                else {
                    console.log("");
                    console.log("NO HIT! Because of the damage chance.");
                }
                console.log(clc.cyan("After attack: Attacker's HP ( " + hero1.name + " ): " + defenderHP + "         Defender's HP ( " + hero2.name + " ): " + attackerHP));
                hero2HP = defenderHP;
            }
            else {
                console.log("Attacker: " + hero2.name + " Defender: " + hero1.name);
                defenderHP = hero1HP;
                attackerHP = hero2HP;
                console.log(clc.cyan("Before attack: Defender's HP ( " + hero1.name + " ): " + defenderHP + "          Attacker's HP ( " + hero2.name + " ): " + attackerHP));
                //Calculating ability chance
                let abilityChanceHero1 = Math.floor(Math.random() * 100 + 1);
                let abilityChanceHero2 = Math.floor(Math.random() * 100 + 1);
                //Calculating damage
                let damage = Math.floor(Math.random() * hero2.weaponDamageMax + hero2.weaponDamageMin);
                //Ability that affect armour
                hero1.armour = (0, abilities_1.AbilitythatAffectArmour)(abilityChanceHero1, hero1.ability, hero1.armour, hero1.name);
                //Calculating finalDamage
                let finalDamage = damage - Math.floor(hero1.armour / 3);
                //Abilities that affect finalDamage
                finalDamage = (0, abilities_1.AbilitiesThatAffectFinalDamage)(abilityChanceHero2, hero2.ability, finalDamage, hero2.name);
                //Calculating damage chance
                let DamageChanceRandomNumber = Math.floor(Math.random() * 100 + 1);
                if (DamageChanceRandomNumber < hero2.weaponDamageChance) {
                    //Calculating evasion chance
                    let evasionChance = Math.floor(Math.random() * 100);
                    //Ability that affect evasion
                    hero1.evasion = (0, abilities_1.AbilityThatAffectEvasion)(abilityChanceHero1, hero1.ability, hero1.evasion, hero1.name);
                    if (evasionChance <= hero1.evasion) {
                        console.log("");
                        console.log("MISSED HIT! Beacause of the evasion.");
                    }
                    else {
                        //Ability that affect hp             
                        defenderHP = (0, abilities_1.AbilityThatAffectHp)(abilityChanceHero1, hero1.ability, hero1.name, defenderHP);
                        console.log("");
                        console.log("HIT!" + "          FinalDamage: " + finalDamage);
                        defenderHP -= finalDamage;
                    }
                }
                else {
                    console.log("");
                    console.log("NO HIT! Because of the damage chance.");
                }
                console.log(clc.cyan("After attack: Defender's HP ( " + hero1.name + " ): " + defenderHP + "          Attacker's HP ( " + hero2.name + " ): " + attackerHP));
                hero1HP = defenderHP;
            }
            console.log("");
            console.log("");
            i++;
        } while (hero1HP > 0 && hero2HP > 0);
        if (hero1HP > hero2HP) {
            console.log(clc.xterm(202).bold("THE WINNER IS: " + hero1.name));
        }
        else {
            console.log(clc.xterm(202).bold("THE WINNER IS: " + hero2.name));
        }
    }
}
exports.Arena = Arena;
console.log(clc.yellow("        ......................CLI-CLASH......................"));
console.log("");
