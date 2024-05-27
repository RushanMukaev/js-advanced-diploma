export default class Team {
  constructor(characters) {
		this.characters = [];
    characters.forEach(
			char => this.characters.push(char)
		)
	}
}
