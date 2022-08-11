"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archer = exports.Rouge = exports.Mage = exports.Priest = exports.Warrior = void 0;
const weapons_1 = require("./weapons");
var clc = require("cli-color");
class Warrior {
    constructor(name) {
        //Hero's parameters
        this.name = name;
        this.equippedWeapon = "";
        this.type = "warrior";
        this.hp = 100;
        this.ability = "armour";
        this.armour = 5;
        this.evasion = 20;
        //Weapon's parameters
        this.weaponDamageMin = 0;
        this.weaponDamageMax = 0;
        this.weaponDamageChance = 0;
    }
    equipWeapon(weapon) {
        if (weapon instanceof weapons_1.BattleAxe) {
            this.equippedWeapon = "battleAxe";
            this.weaponDamageMin = 12;
            this.weaponDamageMax = 15;
            this.weaponDamageChance = 92;
            console.log(clc.green(clc.green(this.name + "'s weapon of choice is the " + weapon.name)));
        }
        else if (weapon instanceof weapons_1.Sword) {
            this.equippedWeapon = "sword";
            this.weaponDamageMin = 8;
            this.weaponDamageMax = 12;
            this.weaponDamageChance = 90;
            console.log(clc.green(this.name + "'s weapon of choice is the " + weapon.name));
        }
        else {
            console.log(clc.red(clc.red("The chosen weapon cannot be used by " + this.name + ". Therefore " + this.name + "'s damage will be 0")));
            console.log("");
        }
    }
}
exports.Warrior = Warrior;
class Priest {
    constructor(name) {
        //Hero's parameters
        this.name = name;
        this.equippedWeapon = "";
        this.type = "priest";
        this.hp = 90;
        this.ability = "heal";
        this.armour = 4;
        this.evasion = 20;
        //Weapon's parameters
        this.weaponDamageMin = 0;
        this.weaponDamageMax = 0;
        this.weaponDamageChance = 0;
    }
    equipWeapon(weapon) {
        if (weapon instanceof weapons_1.WarHammer) {
            this.equippedWeapon = "warHammer";
            this.weaponDamageMin = 10;
            this.weaponDamageMax = 15;
            this.weaponDamageChance = 93;
            console.log(clc.green(this.name + "'s weapon of choice is the " + weapon.name));
        }
        else if (weapon instanceof weapons_1.Sword) {
            this.equippedWeapon = "sword";
            this.weaponDamageMin = 8;
            this.weaponDamageMax = 12;
            this.weaponDamageChance = 90;
            console.log(clc.green(this.name + "'s weapon of choice is the " + weapon.name));
        }
        else {
            console.log(clc.red("The chosen weapon cannot be used by " + this.name + ". Therefore " + this.name + "'s damage will be 0"));
            console.log("");
        }
    }
}
exports.Priest = Priest;
class Mage {
    constructor(name) {
        //Hero's parameters
        this.name = name;
        this.equippedWeapon = "";
        this.type = "mage";
        this.hp = 70;
        this.ability = "firestorm";
        this.armour = 1;
        this.evasion = 5;
        //Weapon's parameters
        this.weaponDamageMin = 0;
        this.weaponDamageMax = 0;
        this.weaponDamageChance = 0;
    }
    equipWeapon(weapon) {
        if (weapon instanceof weapons_1.Wand) {
            this.equippedWeapon = "wand";
            this.weaponDamageMin = 9;
            this.weaponDamageMax = 15;
            this.weaponDamageChance = 97;
            console.log(clc.green(this.name + "'s weapon of choice is the " + weapon.name));
        }
        else if (weapon instanceof weapons_1.Sword) {
            this.equippedWeapon = "sword";
            this.weaponDamageMin = 8;
            this.weaponDamageMax = 12;
            this.weaponDamageChance = 90;
            console.log(clc.green(this.name + "'s weapon of choice is the " + weapon.name));
        }
        else {
            console.log(clc.red("The chosen weapon cannot be used by " + this.name + ". Therefore " + this.name + "'s damage will be 0"));
            console.log("");
        }
    }
}
exports.Mage = Mage;
class Rouge {
    constructor(name) {
        //Hero's parameters
        this.name = name;
        this.equippedWeapon = "";
        this.type = "rouge";
        this.hp = 80;
        this.ability = "dodge";
        this.armour = 3;
        this.evasion = 15;
        //Weapon's parameters
        this.weaponDamageMin = 0;
        this.weaponDamageMax = 0;
        this.weaponDamageChance = 0;
    }
    equipWeapon(weapon) {
        if (weapon instanceof weapons_1.Dagger) {
            this.equippedWeapon = "dagger";
            this.weaponDamageMin = 4;
            this.weaponDamageMax = 5;
            this.weaponDamageChance = 98;
            console.log(clc.green(this.name + "'s weapon of choice is the " + weapon.name));
        }
        else if (weapon instanceof weapons_1.Sword) {
            this.equippedWeapon = "sword";
            this.weaponDamageMin = 8;
            this.weaponDamageMax = 12;
            this.weaponDamageChance = 90;
            console.log(clc.green(this.name + "'s weapon of choice is the " + weapon.name));
        }
        else {
            console.log(clc.red("The chosen weapon cannot be used by " + this.name + ". Therefore " + this.name + "'s damage will be 0"));
            console.log("");
        }
    }
}
exports.Rouge = Rouge;
class Archer {
    constructor(name) {
        //Hero's parameters
        this.name = name;
        this.equippedWeapon = "";
        this.type = "archer";
        this.hp = 80;
        this.ability = "headshot";
        this.armour = 2;
        this.evasion = 15;
        //Weapon's parameters
        this.weaponDamageMin = 0;
        this.weaponDamageMax = 0;
        this.weaponDamageChance = 0;
    }
    equipWeapon(weapon) {
        if (weapon instanceof weapons_1.Bow) {
            this.equippedWeapon = "bow";
            this.weaponDamageMin = 7;
            this.weaponDamageMax = 12;
            this.weaponDamageChance = 89;
            console.log(clc.green(this.name + "'s weapon of choice is the " + weapon.name));
        }
        else if (weapon instanceof weapons_1.Sword) {
            this.equippedWeapon = "sword";
            this.weaponDamageMin = 8;
            this.weaponDamageMax = 12;
            this.weaponDamageChance = 90;
            console.log(clc.green(this.name + "'s weapon of choice is the " + weapon.name));
        }
        else {
            console.log(clc.red("The chosen weapon cannot be used by " + this.name + ". Therefore " + this.name + "'s damage will be 0"));
            console.log(" ");
        }
    }
}
exports.Archer = Archer;
