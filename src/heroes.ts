import { WarHammer, Sword, BattleAxe, Bow, Dagger, Wand } from "./weapons";
var clc = require("cli-color");

export class Warrior {
  //Hero's parameters
  name: string;
  equippedWeapon: string;
  type: string;
  hp: number;
  ability: string;
  armour: number;
  evasion: number;

  //Weapon's parameters
  weaponDamageMin: number;
  weaponDamageMax: number;
  weaponDamageChance: number;

  constructor(name: string) {
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

  equipWeapon(weapon: Sword | WarHammer | BattleAxe | Bow | Dagger | Wand) {
    if (weapon instanceof BattleAxe) {
      this.equippedWeapon = "battleAxe";
      this.weaponDamageMin = 12;
      this.weaponDamageMax = 15;
      this.weaponDamageChance = 92;

      console.log(clc.green(clc.green(this.name + "'s weapon of choice is the " + weapon.name)) );
    } else if (weapon instanceof Sword) {
      this.equippedWeapon = "sword";
      this.weaponDamageMin = 8;
      this.weaponDamageMax = 12;
      this.weaponDamageChance = 90;

      console.log(clc.green(this.name + "'s weapon of choice is the " + weapon.name) );
    } else {
      console.log(clc.red( clc.red("The chosen weapon cannot be used by " + this.name + ". Therefore " + this.name + "'s damage will be 0")));
      console.log("");
    }
  }
}

export class Priest {
  //Hero's parameters
  name: string;
  equippedWeapon: string;
  type: string;
  hp: number;
  ability: string;
  armour: number;
  evasion: number;

  //Weapon's parameters
  weaponDamageMin: number;
  weaponDamageMax: number;
  weaponDamageChance: number;

  constructor(name: string) {
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

  equipWeapon(weapon: Sword | WarHammer | BattleAxe | Bow | Dagger | Wand) {
    if (weapon instanceof WarHammer) {
      this.equippedWeapon = "warHammer";
      this.weaponDamageMin = 10;
      this.weaponDamageMax = 15;
      this.weaponDamageChance = 93;

      console.log(clc.green(this.name + "'s weapon of choice is the " + weapon.name) );
    } else if (weapon instanceof Sword) {
      this.equippedWeapon = "sword";
      this.weaponDamageMin = 8;
      this.weaponDamageMax = 12;
      this.weaponDamageChance = 90;
      console.log(clc.green(this.name + "'s weapon of choice is the " + weapon.name) );
    } else {
      console.log( clc.red("The chosen weapon cannot be used by " + this.name + ". Therefore " + this.name + "'s damage will be 0"));
      console.log("");
    }
  }
}

export class Mage {
  //Hero's parameters
  name: string;
  equippedWeapon: string;
  type: string;
  hp: number;
  ability: string;
  armour: number;
  evasion: number;

  //Weapon's parameters
  weaponDamageMin: number;
  weaponDamageMax: number;
  weaponDamageChance: number;

  constructor(name: string) {
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

  equipWeapon(weapon: Sword | WarHammer | BattleAxe | Bow | Dagger | Wand) {
    if (weapon instanceof Wand) {
      this.equippedWeapon = "wand";
      this.weaponDamageMin = 9;
      this.weaponDamageMax = 15;
      this.weaponDamageChance = 97;
      console.log(clc.green(this.name + "'s weapon of choice is the " + weapon.name) );
    } else if (weapon instanceof Sword) {
      this.equippedWeapon = "sword";
      this.weaponDamageMin = 8;
      this.weaponDamageMax = 12;
      this.weaponDamageChance = 90;
      console.log(clc.green(this.name + "'s weapon of choice is the " + weapon.name) );
    } else {
      console.log( clc.red("The chosen weapon cannot be used by " + this.name + ". Therefore " + this.name + "'s damage will be 0"));
      console.log("");
    }
  }
}

export class Rouge {
  //Hero's parameters
  name: string;
  equippedWeapon: string;
  type: string;
  hp: number;
  ability: string;
  armour: number;
  evasion: number;

  //Weapon's parameters
  weaponDamageMin: number;
  weaponDamageMax: number;
  weaponDamageChance: number;

  constructor(name: string) {
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

  equipWeapon(weapon: Sword | WarHammer | BattleAxe | Bow | Dagger | Wand) {
    if (weapon instanceof Dagger) {
      this.equippedWeapon = "dagger";
      this.weaponDamageMin = 4;
      this.weaponDamageMax = 5;
      this.weaponDamageChance = 98;

      console.log(clc.green(this.name + "'s weapon of choice is the " + weapon.name) );
    } else if (weapon instanceof Sword) {
      this.equippedWeapon = "sword";
      this.weaponDamageMin = 8;
      this.weaponDamageMax = 12;
      this.weaponDamageChance = 90;
      console.log(clc.green(this.name + "'s weapon of choice is the " + weapon.name) );
    } else {
      console.log( clc.red("The chosen weapon cannot be used by " + this.name + ". Therefore " + this.name + "'s damage will be 0"));
      console.log("");
    }
  }
}

export class Archer {
  //Hero's parameters
  name: string;
  equippedWeapon: string;
  type: string;
  hp: number;
  ability: string;
  armour: number;
  evasion: number;

  //Weapon's parameters
  weaponDamageMin: number;
  weaponDamageMax: number;
  weaponDamageChance: number;

  constructor(name: string) {
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

  equipWeapon(weapon: Sword | WarHammer | BattleAxe | Bow | Dagger | Wand) {
    if (weapon instanceof Bow) {
      this.equippedWeapon = "bow";
      this.weaponDamageMin = 7;
      this.weaponDamageMax = 12;
      this.weaponDamageChance = 89;
      console.log(clc.green(this.name + "'s weapon of choice is the " + weapon.name) );
    } else if (weapon instanceof Sword) {
      this.equippedWeapon = "sword";
      this.weaponDamageMin = 8;
      this.weaponDamageMax = 12;
      this.weaponDamageChance = 90;
      console.log(clc.green(this.name + "'s weapon of choice is the " + weapon.name) );
    } else {
      console.log( clc.red("The chosen weapon cannot be used by " + this.name + ". Therefore " + this.name + "'s damage will be 0"));
      console.log(" ");
    }
  }
}
