import { WarHammer, Sword, BattleAxe, Bow, Dagger, Wand } from "./weapons";
import { Archer, Warrior, Mage, Priest, Rouge } from "./heroes";
import { Arena } from "./arena";

const bela = new Warrior('Béla');
bela.equipWeapon(new WarHammer());

const pista = new Warrior('Pista');
pista.equipWeapon(new Sword());

Arena.tournament(bela, pista);