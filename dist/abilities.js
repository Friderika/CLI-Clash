"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityThatAffectHp = exports.AbilitythatAffectArmour = exports.AbilityThatAffectEvasion = exports.AbilitiesThatAffectFinalDamage = void 0;
var clc = require("cli-color");
function AbilitiesThatAffectFinalDamage(abilityChance, heroAbility, finalDamage, heroName) {
    let modifiedFinalDamage = finalDamage;
    if (abilityChance < 10) {
        switch (heroAbility) {
            case "headshot": {
                console.log(clc.magenta(heroName + ": " + heroAbility + " ability activated."));
                process.stdout.write("FinalDamage before " + heroAbility + " ability: " + finalDamage);
                modifiedFinalDamage = finalDamage + 15;
                console.log("       FinalDamage after " + heroAbility + " ability: " + modifiedFinalDamage);
                console.log("");
                break;
            }
            case "firestorm": {
                console.log(clc.magenta(heroName + ": " + heroAbility + " ability activated."));
                process.stdout.write("FinalDamage before " + heroAbility + " ability: " + finalDamage);
                modifiedFinalDamage = finalDamage + 20;
                console.log("       FinalDamage after " + heroAbility + " ability: " + modifiedFinalDamage);
                console.log("");
                break;
            }
            default:
                break;
        }
    }
    return modifiedFinalDamage;
}
exports.AbilitiesThatAffectFinalDamage = AbilitiesThatAffectFinalDamage;
function AbilityThatAffectEvasion(abilityChance, heroAbility, heroEvasion, heroName) {
    let modifiedHeroEvasion = heroEvasion;
    if (abilityChance < 10) {
        switch (heroAbility) {
            case "dodge":
                console.log(clc.magenta(heroName + ": " + heroAbility + " ability activated."));
                process.stdout.write("Evasion before " + heroName + "'s ability: " + heroEvasion);
                modifiedHeroEvasion = heroEvasion + 100;
                console.log("       Evasion after " + heroName + "'s ability: " + modifiedHeroEvasion);
                console.log("");
                break;
            default:
                break;
        }
    }
    return modifiedHeroEvasion;
}
exports.AbilityThatAffectEvasion = AbilityThatAffectEvasion;
function AbilitythatAffectArmour(abilityChance, heroAbility, heroArmour, heroName) {
    let modifiedArmour = heroArmour;
    if (abilityChance < 10) {
        switch (heroAbility) {
            case "armour":
                console.log(clc.magenta(heroName + ": " + heroAbility + " ability activated."));
                process.stdout.write("Armour before " + heroName + "'s ability: " + heroArmour);
                modifiedArmour = heroArmour + 10;
                console.log("       Armour after " + heroName + "'s ability: " + modifiedArmour);
                console.log("");
                break;
            default:
                break;
        }
    }
    return modifiedArmour;
}
exports.AbilitythatAffectArmour = AbilitythatAffectArmour;
function AbilityThatAffectHp(abilityChance, heroAbility, heroName, heroHP) {
    let modifiedHP = heroHP;
    if (abilityChance < 10) {
        switch (heroAbility) {
            case "heal":
                console.log(clc.magenta(heroName + ": " + heroAbility + " ability activated."));
                process.stdout.write("HP before " + heroName + "'s ability: " + heroHP);
                modifiedHP = heroHP + 10;
                console.log("                   HP after " + heroName + "'s ability: " + modifiedHP);
                console.log("");
                break;
            default:
                break;
        }
    }
    return modifiedHP;
}
exports.AbilityThatAffectHp = AbilityThatAffectHp;
