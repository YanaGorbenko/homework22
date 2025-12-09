// #1
const userObj = { firstName: 'Yana', lastName: 'Horbenko', age: 21 };
console.log('Task 1');
console.log(userObj);

// #2
const userObj1 = {
  firstName: 'Yana',
  lastName: 'Horbenko',
  age: 21,
  fullName() {
    return userObj1.firstName + ' ' + userObj1.lastName;
  },
};
console.log('Task 2');
console.log(userObj1.fullName());

// #3
function defUpperStr(text) {
  return (text || 'DEFAULT TEXT').toUpperCase();
}
console.log('Task 3');
console.log(defUpperStr('My text')); // MY TEXT
console.log(defUpperStr()); // DEFAULT TEXT

// #4
function evenFn(n) {
  let array = [];
  for (let i = 0; i <= n; i += 1) {
    if (i % 2 == 0 && i != 0) {
      array.push(i);
    }
  }
  return array;
}
console.log('Task 4');
console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

// #5
function weekFn(n) {
  switch (n) {
    case 1:
      return 'Понеділок';
    case 2:
      return 'Вівторок';
    case 3:
      return 'Середа';
    case 4:
      return 'Четвер';
    case 5:
      return "П'ятниця";
    case 6:
      return 'Субота';
    case 7:
      return 'Неділя';
    default:
      return null;
  }
}
console.log('Task 5');
console.log(weekFn(1)); // 'Понеділок'
console.log(weekFn(3)); // 'Середа'
console.log(weekFn(7)); // 'Неділя'
console.log(weekFn(9)); // null
console.log(weekFn(1.5)); // null
console.log(weekFn('2')); // null

// #6
function ageClassification(n) {
  let age =
    n <= 0
      ? null
      : n <= 24
      ? 'Дитинство'
      : n <= 44
      ? 'Молодість'
      : n <= 65
      ? 'Зрілість'
      : n <= 75
      ? 'Старість'
      : n <= 90
      ? 'Довголіття'
      : n <= 122
      ? 'Рекорд'
      : null;
  return age;
}
console.log('Task 6');
console.log('    -1 :', ageClassification(-1), ageClassification(-1) === null); // -1 : null
console.log('     0 :', ageClassification(0), ageClassification(0) === null); // 0 : null
console.log(
  '     1 :',
  ageClassification(1),
  ageClassification(1) === 'Дитинство'
); // 1 : Дитинство
console.log(
  '    24 :',
  ageClassification(24),
  ageClassification(24) === 'Дитинство'
); // 24 : Дитинство
console.log(
  ' 24.01 :',
  ageClassification(24.01),
  ageClassification(24.01) === 'Молодість'
); // 24.01 : Молодість
console.log(
  '    44 :',
  ageClassification(44),
  ageClassification(44) === 'Молодість'
); // 44 : Молодість
console.log(
  ' 44.01 :',
  ageClassification(44.01),
  ageClassification(44.01) === 'Зрілість'
); // 44.01 : Зрілість
console.log(
  '    65 :',
  ageClassification(65),
  ageClassification(65) === 'Зрілість'
); // 65 : Зрілість
console.log(
  '  65.1 :',
  ageClassification(65.1),
  ageClassification(65.1) === 'Старість'
); // 65.1 : Старість
console.log(
  '    75 :',
  ageClassification(75),
  ageClassification(75) === 'Старість'
); // 75 : Старість
console.log(
  ' 75.01 :',
  ageClassification(75.01),
  ageClassification(75.01) === 'Довголіття'
); // 75.01 : Довголіття
console.log(
  '    90 :',
  ageClassification(90),
  ageClassification(90) === 'Довголіття'
); // 90 : Довголіття
console.log(
  ' 90.01 :',
  ageClassification(90.01),
  ageClassification(90.01) === 'Рекорд'
); // 90.01 : Рекорд
console.log(
  '   122 :',
  ageClassification(122),
  ageClassification(122) === 'Рекорд'
); // 122 : Рекорд
console.log(
  '122.01 :',
  ageClassification(122.01),
  ageClassification(122.01) === null
); // 122.01 : null
console.log(
  '   150 :',
  ageClassification(150),
  ageClassification(150) === null
); // 150 : null

// #7
function oddFn(n) {
  let i = 0;
  let array = [];
  while (i <= n) {
    if (i % 2 != 0 && i != 0) {
      array.push(i);
    }
    i += 1;
  }
  return array;
}
console.log('Task 7');
console.log(oddFn(10)); // [1, 3, 5, 7, 9]
console.log(oddFn(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
console.log(oddFn(20)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

// #8
function mainFunc(a, b, callback) {
  if (typeof callback !== 'function') {
    return false;
  } else {
    return callback(a, b);
  }
}
function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cbPow(num, pow) {
  return Math.pow(num, pow);
}
function cbAdd(a, b) {
  return a + b;
}
console.log('Task 8');
console.log(mainFunc(2, 5, cbRandom)); // цілі числа в діапазоні 2..5
console.log(mainFunc(2, 5, cbPow)); // 32
console.log(mainFunc(2, 5, cbAdd)); // 7
console.log(mainFunc(2, 5, 'not a func')); // false
