import Team from './team';
import Character from './Character';

test('Проверка добавления персонажа', () => {
  const char1 = new Character('one', 'warrior');
  const team = new Team();
  const result = team.add(char1);
  expect(result).toEqual(new Set([{ name: 'one', type: 'warrior' }]));
});

test('Проверка на ошибку при повторном добавлении того же персонажа', () => {
  const char1 = new Character('one', 'warrior');
  const team = new Team();
  team.add(char1);
  expect(() => { team.add(char1); }).toThrowError('Такой персонаж уже есть в команде!');
});

test('Проверка на добавление нескольких персонажей', () => {
  const char1 = new Character('one', 'warrior');
  const char2 = new Character('two', 'mage');
  const char3 = new Character('three', 'cleric');
  const team = new Team();
  const result = team.addAll(char1, char2, char3);
  expect(result).toEqual(new Set([{ name: 'one', type: 'warrior' },
    { name: 'two', type: 'mage' },
    { name: 'three', type: 'cleric' }]));
});

test('Проверка, что при массовом добавлении одного и того же персонажа вернется ошибка', () => {
  const char1 = new Character('one', 'warrior');
  const char2 = new Character('two', 'mage');
  const char3 = new Character('three', 'cleric');
  const team = new Team();
  expect(() => { team.addAll(char1, char2, char3, char2); }).toThrowError('Персонаж two уже есть в команде!');
});

test(('Проверка возвращения массива'), () => {
  const char1 = new Character('one', 'warrior');
  const char2 = new Character('two', 'mage');
  const team = new Team();
  team.addAll(char1, char2);
  const result = team.toArray();
  expect(result).toEqual(expect.arrayContaining([{ name: 'one', type: 'warrior' },
    { name: 'two', type: 'mage' }]));
});
