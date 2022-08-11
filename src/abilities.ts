var clc = require("cli-color");


export function AbilitiesThatAffectFinalDamage(abilityChance:number , heroAbility: string, finalDamage: number, heroName: string) {
    let modifiedFinalDamage = finalDamage;
    if (abilityChance < 10) {
        switch (heroAbility) {
          case "headshot": { 
            console.log(clc.magenta(  heroName + ": " + heroAbility + " ability activated."));
            process.stdout.write("FinalDamage before " + heroAbility + " ability: " + finalDamage );
            modifiedFinalDamage = finalDamage + 15;
            console.log("       FinalDamage after " + heroAbility + " ability: " + modifiedFinalDamage );
            console.log("");
            break;
          }
          case "firestorm": { 
            console.log(clc.magenta(  heroName + ": " + heroAbility + " ability activated."));
            process.stdout.write("FinalDamage before " + heroAbility + " ability: " + finalDamage );
            modifiedFinalDamage = finalDamage + 20;
            console.log("       FinalDamage after " + heroAbility + " ability: " + modifiedFinalDamage );
            console.log("");
            break;
          }
          default:
            break;
        }
      }
      return modifiedFinalDamage;
}

export function AbilityThatAffectEvasion(abilityChance: number, heroAbility: string, heroEvasion: number, heroName: string) {
    let modifiedHeroEvasion = heroEvasion;
    if (abilityChance < 10) {
        switch (heroAbility) {
          case "dodge":
            console.log(clc.magenta(  heroName + ": " + heroAbility + " ability activated."));
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

export function AbilitythatAffectArmour(abilityChance: number, heroAbility: string, heroArmour:number, heroName: string) {
    let modifiedArmour = heroArmour;
    if (abilityChance < 10) {
        switch (heroAbility) {
            case "armour":
            console.log(clc.magenta(  heroName + ": " + heroAbility + " ability activated."));
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

export function AbilityThatAffectHp(abilityChance: number, heroAbility: string, heroName: string, heroHP: number) {
    let modifiedHP = heroHP;
    if (abilityChance < 10) {
        switch (heroAbility) {
          case "heal":
            console.log(clc.magenta(  heroName + ": " + heroAbility + " ability activated."));
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