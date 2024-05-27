import Character from "./Character";
import GamePlay from "./GamePlay";
import PositionedCharacter from "./PositionedCharacter";
import Team from "./Team";
import Bowman from "./characters/Bowman";
import Magician from "./characters/Magician";
import Swordsman from "./characters/Swordsman";
import Vampire from "./characters/Vampire";
import Undead from "./characters/Undead";
import Daemon from "./characters/Daemon";
import { generateTeam } from "./generators";

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    this.gamePlay.drawUi("prairie");
    const playerTypes = [Bowman, Swordsman, Magician]
    const enemyPlayerTypes = [Vampire, Undead, Daemon]
    const team = generateTeam(playerTypes, 5, 3)
    const teamEnemy = generateTeam(enemyPlayerTypes, 5, 3)
    const positionedCharacter = []
    const positions = [0,1,8,9,16,17,24,25,32,33,40,41,48,49,56,57]
    const enemyPositions = [6,7,14,15,22,23,30,31,38,39,46,47,54,55,62,63]
    
    team.characters.forEach((character) => {
      let position = positions.splice((Math.floor(Math.random()* positions.length)), 1)
      positionedCharacter.push(new PositionedCharacter(character, position[0]))
    })
    teamEnemy.characters.forEach((character) => {
      let position = enemyPositions.splice((Math.floor(Math.random()* positions.length)), 1)
      positionedCharacter.push(new PositionedCharacter(character, position[0]))
    })
    this.gamePlay.redrawPositions(positionedCharacter)
    this.someMethodName()
  }

  someMethodName() { // <- что это за метод и где это нужно сделать решите сами
    this.gamePlay.addCellEnterListener(this.onCellEnter);
 }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
      let message = `U+1F396 - ${1} U+2694 - ${1} U+1F6E1 - ${1} U+2764 - ${1}`
      console.log()
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
