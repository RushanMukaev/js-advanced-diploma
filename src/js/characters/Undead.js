import Character from '../Character.js';

export default class Undead extends Character {
    constructor(level, type = "undead") {
        super(level, type);
        this.attack = 40;
        this.defence = 10;
    }
}