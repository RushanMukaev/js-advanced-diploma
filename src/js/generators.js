import Team from "./Team";

export function* characterGenerator(allowedTypes, maxLevel) {
  for(let i = 0; i >= 0; i++) {
    const randomLevel = Math.floor(Math.random() * (maxLevel) + 1);
    const randomTypeIndex = Math.floor(Math.random() * (allowedTypes.length));
    yield new (allowedTypes[randomTypeIndex])(randomLevel)
  }
}
export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const randomPerc = characterGenerator(allowedTypes, maxLevel)
  const arrayTeam = []
  for (let i = 0; i < characterCount; i++) {
    arrayTeam.push(randomPerc.next().value)
  }
  return new Team(arrayTeam)
}