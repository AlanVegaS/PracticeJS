const regex = /\b(Apple)+\b/g;
const fruit = 'Apple, banana, kiwi, orange,ssjsjsjsjsjs, Apple, apple'

for (const value of fruit.matchAll(regex)) {
    console.log(value);
}
/*
[
  'Apple',
  'Apple',
  index: 0,
  input: 'Apple, banana, kiwi, orange,ssjsjsjsjsjs, Apple, apple',
  groups: undefined
]
[
  'Apple',
  'Apple',
  index: 42,
  input: 'Apple, banana, kiwi, orange,ssjsjsjsjsjs, Apple, apple',
  groups: undefined
]*/
console.log();
console.log(fruit.match('Apple'));
/*
[
  'Apple',
  index: 0,
  input: 'Apple, banana, kiwi, orange,ssjsjsjsjsjs, Apple, apple',
  groups: undefined
]
*/