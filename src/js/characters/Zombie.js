import Character from './Character.js';

export default class Zombie extends Character {
    constructor(level, type = "zombie") {
        super(level, type);
        this.attack = 40;
        this.defence = 10;
    }
}