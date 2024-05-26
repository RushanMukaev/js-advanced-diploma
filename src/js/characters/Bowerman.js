import Character from '../Character';

export default class Bowerman extends Character  {
    constructor(level, type = "bowerman") {
        super(level, type);
        this.attack = 25;
        this.defence = 25;
    }
}