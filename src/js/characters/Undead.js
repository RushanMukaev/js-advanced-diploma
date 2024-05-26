import Character from './Character.js';

export default class Undead extends Character {
    constructor(level, type = "undead") {
        super(level, type);
        this.attack = 25;
        this.defence = 25;
    }
}