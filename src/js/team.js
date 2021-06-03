export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже есть в команде!');
    } this.members.add(character);
    return this.members;
  }

  addAll(...characters) {
    characters.forEach((character) => {
      if (this.members.has(character)) {
        throw new Error(`Персонаж ${character.name} уже есть в команде!`);
      } this.members.add(character);
    });
    return this.members;
  }

  toArray() {
    return [...this.members];
  }
}
