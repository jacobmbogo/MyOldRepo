console.log("Hello World!");
let sumTotal = 0;
function all(array) {
  for (let i = 0; i < array.length; i++) {
    sumTotal = sumTotal + array[i];
  }
}
all([1, 2, 3, 4, 5]);
console.log(sumTotal);

function reverseArray(array) {
  let niceArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    niceArray.push(array[i]);
  }

  return niceArray;
}
console.log(reverseArray([2, 3, 4, 5, 6]));

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return { value, rest: list };
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
console.log(arrayToList([10, 30, 40]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

let myCar = {
  speed: 29,
  genre: "volvo",
  sizes: ["large", "small", "just good"],
};

console.log(myCar["speed"]);

console.log(typeof myCar);

function factorial(number) {
  let product = 1;
  for (let i = number; i >= 1; i--) {
    product *= i;
  }

  return product;
}
console.log(factorial(4));

function showScope() {
  scope = "local";
  return scope;
}
let scope = "global";
console.log(scope);
console.log(showScope());
console.log(scope);

function Checking(amount) {
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}

function deposit(amount) {
  this.balance += amount;
}
function withdraw(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  }
  if (amount > this.balance) {
    console.log("Insufficient funds");
  }
}
function toString() {
  return "Balance: " + this.balance;
}

var account = new Checking(500);
account.deposit(1000);
console.log(account.toString());
account.withdraw(750);
console.log(account.toString());
account.withdraw(800);
console.log(account.toString());

console.log(account);
console.log(account.balance);

let numbers = new Array(2, 3, 4, 5, 6);
console.log(numbers);

let nums = [];
for (let i = 0; i < 6; i++) {
  nums[i] = i + 1;
}
console.log(nums);

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

let labels = [];
repeat(5, (i) => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);

function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(12));

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, "returned", result);
    return result;
  };
}

noisy(Math.min)(3, 2, 1);

function unless(test, then) {
  if (!test) then();
}
repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

["A", "B"].forEach((l) => console.log(l));

const square = function (x) {
  return x * x;
};
console.log(square(5));

const foo = square;
console.log(foo(6));

function formalGreeting() {
  console.log("How are you?");
}

function casualGreeting() {
  console.log("What's up?");
}

function greet(type, greetFormal, greetCasual) {
  if (type == "formal") {
    greetFormal();
  } else if (type == "casual") {
    greetCasual();
  }
}
greet("casual", formalGreeting, casualGreeting);

const arr1 = [1, 2, 3];
const arr2 = [];

for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
console.log(arr2);

const firstData = [1, 3, 3];
const secondData = firstData.map((item) => item * 2);
console.log(secondData);

const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = birthYear.map((year) => 2018 - year);
console.log(ages);

const persons = [
  { name: "Peter", age: 16 },
  { name: "Mark", age: 18 },
  { name: "John", age: 27 },
  { name: "Jane", age: 14 },
  { name: "Tony", age: 24 },
];

const fullAge = [];
for (let i = 0; i < persons.length; i++) {
  if (persons[i].age >= 18) {
    fullAge.push(persons[i]);
  }
}
console.log(fullAge);

const lessAge = persons.filter((person) => person.age < 18);
console.log(lessAge);

const strArray = ["JavaScript", "Python", "PHP", "Java", "C"];

function mapForEach(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
  }
  return newArray;
}

const lenArray = mapForEach(strArray, (item) => item.length);
console.log(lenArray);

console.log("Kenya");

let names = ["David", "Mike", "Cynthia", "Clayton", "Bryan", "Raymond"];
names.sort();
console.log(names);

function compare(num1, num2) {
  return num1 - num2;
}

function digit(num) {
  console.log(num, num * num);
}

let digits = [3, 1, 2, 100, 4, 200];
digits.sort(compare);
console.log(digits);

digits.forEach(digit);
let grades = [44, 56, 33, 74];
let newGrades = grades.map((grade) => grade + 5);
console.log(newGrades);

let words = ["for", "your", "information"];
let acronym = words.map((word) => word[0]);
console.log(acronym.join(""));

let list = [];
for (let i = 0; i < 20; i++) {
  list[i] = i + 1;
}

let evens = list.filter((component) => component % 2 == 0);
console.log("Even Numbers: " + evens);

const arr = [5, 7, 1, 8, 4];
const sum = arr.reduce(function (total, currentValue) {
  return total + currentValue;
});

console.log(sum);

let people = [1, 4, 5, 6, 6];
let peopleInTotal = people.reduce(
  (currentNumber, totalNumber) => currentNumber + totalNumber
);

console.log(peopleInTotal);
var itDiv = [
  "Mike",
  "Clayton",
  "Terrill",
  "Raymond",
  "Cynthia",
  "Danny",
  "Jennifer",
];
var dmpDept = itDiv.splice(3, 5);
console.log(dmpDept);
console.log(itDiv);

let numberList = [1, 3, 5];
let evenNumbers = numberList.some((even) => even % 2 == 0);
console.log(evenNumbers);

let horseShoe = "🐴👟";
console.log(horseShoe.length);
console.log(horseShoe[0]);
console.log(horseShoe.charCodeAt(0));
console.log(horseShoe.codePointAt(0));

let roseDragon = "🌻🐲";
for (let char of roseDragon) {
  console.log(char);
}
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));

let arrayOne = [
  [1, 2, 3, 4],
  ["jack", "steve", "mary"],
  [true, false],
];
console.log(arrayOne.reduce((a, b) => a.concat(b)));

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}
loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

let animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jimmy", species: "fish" },
];

console.log(
  animals
    .filter((animal) => animal.species == "fish")
    .map((animal) => (animal.type = "sea mammal"))
);

function every(array, validation) {
  for (let item of array) {
    return validation(item);
  }
}
function every2(array, validation) {
  return !array.some((item) => !validation(item));
}
console.log(every2([8, 4, 6], (n) => n % 2 == 0));
console.log(every2([1, 3, 5], (n) => n > 10));
console.log(every([], (n) => n < 10));

let activities = [
  ["reading", 1],
  ["playing", 4],
  ["slaking", 9],
  ["patriotism", 7],
];

console.table(activities);
console.log(activities[1][0]);
console.log(activities[3][1]);
activities.push(["cooking", 1]);

console.table(activities);
activities.pop();
console.table(activities);

Array.matrix = function (numrows, numcols, initial) {
  let arr = [];
  for (let i = 0; i < numrows; i++) {
    let columns = [];
    for (let j = 0; j < numcols; j++) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
};

let numbs = Array.matrix(5, 5, 0);
console.log(numbs[1][1]);

let namels = Array.matrix(3, 3, "");
namels[1][2] = "Joe";
console.log(namels[1][2]);
console.table(namels);
console.table(numbs);

function weekTemps() {
  this.dataStore = [];
  this.add = add;
  this.average = average;
}

function add(temp) {
  this.dataStore.push(temp);
}

function average() {
  let total = 0;
  for (let i = 0; i < this.dataStore.length; i++) {
    total += this.dataStore[i];
  }
  return total / this.dataStore.length;
}

let thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);

console.log(thisWeek.average().toFixed(2));

let marks = [];

function append(grade) {
  return marks.push(grade);
}

function mean() {
  return marks.reduce((a, b) => a + b) / marks.length;
}

append(21);
append(23);
append(45);
console.log(marks);

console.log(mean().toFixed(2));

function newGrade() {
  this.alama = [];
  this.ongeza = ongeza;
  this.meanAverage = meanAverage;
}

function ongeza(marksi) {
  this.alama.push(marksi);
}

function meanAverage() {
  return this.alama.reduce((a, b) => a + b) / this.alama.length;
}

let finalList = new newGrade();
finalList.ongeza(21);
finalList.ongeza(23);
finalList.ongeza(45);

console.log(finalList.meanAverage().toFixed(2));
console.log(finalList.alama);

let setOfWords = [];
function addWord(word) {
  return setOfWords.push(word);
}

function forward() {
  return setOfWords.reduce((a, b) => a + b);
}

function backword() {
  return setOfWords.reverse();
}

addWord("cunning");
addWord("misbehave");
console.log(setOfWords);
console.log(backword());

function individualLetters() {
  this.letter = [];
  this.addit = addit;
  this.singleWord = singleWord;
}

function addit(letr) {
  this.letter.push(letr);
}

function singleWord() {
  for (let i = 0; i < this.letter.length; i++) {
    return this.letter.reduce((a, b) => a + b);
  }
}

let newLetter = new individualLetters();

newLetter.addit("a");
newLetter.addit("b");
newLetter.addit("h");
newLetter.addit("o");
newLetter.addit("r");

console.log(newLetter.singleWord());

let rabbit = {};
rabbit.cure = 31;
rabbit.speak = function (line) {
  console.log(`The rabbit says "${line}"`);
};

rabbit.speak("I'm alive.");
console.log(rabbit);
console.log(rabbit.cure);
console.log(rabbit);

function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}`);
}
let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("Oh my ears and whiskers," + "how late it's getting!");
hungryRabbit.speak("I could use a carrot right now.");
speak.call(hungryRabbit, "Burp!");

function normalize() {
  console.log(this.coords.map((n) => n / this.length));
}
normalize.call({ coords: [0, 2, 3], length: 5 });

//Prototypes - A prototype is another object that is used as a fallback source of properties
//When an object gets a request for a propery that it does not have, its prototype will be searched for the property, then the prototype's prototype, and so on.
let empty = {};
console.log(empty.toString);
console.log(empty.toString());

//Introducing Oject.prototype which returns the prototype of an object.

console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

//functions derive from Function.prototype and Arrays derive from Array.prototype
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

//You can use Object.create to create an object with a specific prototype.
//The "proto" rabbit acts as a container for the properties that are shared by all rabbits.

/*
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says "${line}"`);
  }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");

//*Let's create another instance of a rabbit, like humbleRabbit;
let humbleRabbit = Object.create(protoRabbit);
humbleRabbit.type = "humble";
humbleRabbit.speak("MHHH");

//*Classes - a class defines the shape of a type of object - fia what methods and properties it has. Such an object is called an "instance" of the class.

//*Prototypes are useful for defining properties for which all instances of a class share the same value, such as methods.

//*Properties that differ per instance,such as our rabbits' type property, need to be stored directly in the objects themselves.

//*So to create an instance of a given class, you have to make an object that derives from the proper prototype, but you also have to make sure it, itself, has the properties that instances of this class are supposed to have.

//*This is what a 'constructor' function does.

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}


//*If you put the keyword 'new' infront of a function call, the function is treated as a constructor. This means that an object with the right prototype is automatically created, bound to "this" in the function, and returned at the end of the function.

function Rabbit(type){
  this.type = type;
}

Rabbit.prototype.speak = function(line){
  console.log(`The ${this.type} rabbit says "${line}"`);
};

let weirdRabbit = new Rabbit("weird");


//*Constructors (all functions, in fact) automatically get a propetry named prototype, which by default holds a plain, empty object that derives from Object.prototype. 

//*By convention, the names of constructors are capitalized so that they can easily be distinguished from other functions.

//*It’s important to understand the distinction between the way a prototype is associated with a constructor (through its prototype property) and the way objects have a prototype (which can be found with Object.getPrototypeOf).

//*The actual prototype of a constructor is Function.prototype since constructorsare functions. Its prototype property holds the prototype used for instances created through it.

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);

//*Class Notation
class Rabbit {
  constructor(type){
    this.type = type;
  }
  speak(line){
    console.log(`The ${this.type} rabbit says "${line}"`)
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

The "class keyword starts a class declaration, which allows us to define a constructor and a set of methods all in a single place"
*/

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says "${line}"`);
  }
}

let muteRabbit = new Rabbit("mute");
muteRabbit.speak("de");

let object = new (class {
  getWord() {
    return "hello";
  }
})();
console.log(object.getWord());

let findCar = new (class {
  findcar() {
    return "Ethiopia";
  }
})();

console.log(findCar.findcar());

Rabbit.prototype.teeth = "small";
console.log(muteRabbit.teeth);

muteRabbit.teeth = "long, sharp and bloody";
console.log(muteRabbit.teeth);

console.log(Array.prototype.toString == Object.prototype.toString);
console.log([1, 2].toString());

console.log(Object.prototype.toString.call([1, 2]));

let userNumbers = [3, 5, 5];
console.log(userNumbers.map((n) => n + 5));

let agesOf = {
  Boris: 39,
  Lianga: 22,
  Julia: 62,
};

console.log(`Julia is ${agesOf["Julia"]}`);
console.log("Is Jack's age known?", "Jack" in ages);
console.log("Is toString's age known?", "toString" in ages);
console.log("toString" in Object.create(null));

//*Maps: a data structure that associates values(the keys) with other values.
let agesNow = new Map();
agesNow.set("Tony", 39);
agesNow.set("Ogot", 22);
agesNow.set("Muma", 69);

console.log(`Muma is ${agesNow.get("Muma")}`);
console.log("Is Jack's  age known?", agesNow.has("Jack"));
console.log(agesNow.has("toString"));

console.log(
  Object.keys({
    Boris: 39,
    Lianga: 22,
    Julia: 62,
  })
);

console.log({ x: 1 }.hasOwnProperty("x"));
console.log({ x: 1 }.hasOwnProperty("toString"));

let fastCar = new Map();
fastCar.set("speed", 88);

console.log(`what is the speed of the car?`, fastCar.get("speed"));

//*Polymorphism:
Rabbit.prototype.toString = function () {
  return `a ${this.type} rabbit`;
};
console.log(String(muteRabbit));

//*Symbols: are valued created whith the symbol function. Unlike strings, newly created symbols are unique - you cannot create the same symbol twice.

let sym = Symbol("name");
console.log(sym == Symbol("name"));
Rabbit.prototype[sym] = 55;
console.log(muteRabbit[sym]);

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function () {
  return `${this.length} cm of blue yarn`;
};
console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]());

let stringObject = {
  [toStringSymbol]() {
    return "a jute rope";
  },
};
console.log(stringObject[toStringSymbol]());

//*The Iterator interface
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());

class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }
  next() {
    if (this.y == this.matrix.height) return { done: true };
    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y),
    };
    this.x++;

    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return { value, done: false };
  }
}

Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};
let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let { x, y, value } of matrix) {
  console.log(x, y, value);
}

console.log("jacob mbogo");

function isEven(number) {
  number = Math.abs(number);
  if (number == 0) {
    return true;
  } else if (number == 1) {
    return false;
  } else {
    return isEven(number - 2);
  }
}

console.log(isEven(-1));

function countBs(string) {
  string = string.split("");
  let bs = [];
  for (let char of string) {
    if (char == "B") {
      bs.push(char);
    }
  }
  return bs.length;
}

console.log(countBs("BaBluenBAcodiB"));

function countChar(string, k) {
  string = string.split("");
  let os = [];
  for (let char of string) {
    if (char == k) {
      os.push(char);
    }
  }
  return os.length;
}

console.log(countChar("BakudiokalinaBKK", "K"));

function reverseArrayInPlace(arr) {
  return arr.reverse();
}
console.log(reverseArrayInPlace([1, 2, 7]));

function arrayToLIst(array) {
  return {
    value: array[0],
    rest: { value: array[1], rest: { value: array[2], rest: null } },
  };
}

console.log(arrayToLIst([1, 2, 3]));

function array(array) {
  return array.reduce((a, b) => a.concat(b));
}
console.log(
  array([
    [1, 4, 5],
    [6, 5, "t"],
  ])
);

//^Project: robot

const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

//* The network of roads in this village forms a graph. Of which a graph is a collection of points(places in the village) with lines between them( roads)

//* The array of strings can be very difficult to work with. Let's convert the list of roads to a data structure that for each place tells us what can be reached from there.

function buldGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buldGraph(roads);
console.log(roadGraph);

//* The Task

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }
  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

let first = new VillageState("Post Office", [
  { place: "Post Office", address: "Alice's House" },
]);
let next = first.move("Alice's House");

console.log(next.place, next.parcels, first.place);

let unchangable = Object.freeze({ value: 5 }); //* Don't mess with this object
console.log(unchangable.value);

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function (parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};
//* Starting up a virtual world.
runRobot(VillageState.random(), randomRobot);

//* The Mail Truck's Route
const mailRoute = [
  //*starting from the post office
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

//* Pathfinding

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some((w) => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

let bminus = [3, 6, 7, 4];
bminus.unshift(3);
console.log(bminus);

console.log(true * "monkey");

let counter;

function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}

canYouSpotTheProblem();

function Person(name) {
  "use strict";
  this.name = name;
}
let ferdinand = new Person("Ferdinand");
console.log(name);

function numberToString(n, base = 10) {
  let result = "",
    sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n = Math.floor((n /= base));
  } while (n > 0);
  return sign + result;
}
console.log(numberToString(13, 10));

/*
function promptNumber( question ){
  let result = Number(prompt(question));
  if (Number.isNaN(result)) return null;
  else return result;
}
console.log(promptNumber("How many trees do you see?"));


function promptDirection(question){
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";

  throw new Error("Invalid direction: " + result);
}
function look(){
  if (promptDirection("Which way?") == "L"){
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", look());
} catch (error){
  console.log("Something went wrong: " + error);
}
*/

const accounts = {
  a: 100,
  b: 0,
  c: 20,
};

function getAccount() {
  let accountName = prompt("Enter an account name");
  if (!accounts.hasOwnProperty(accountName)) {
    throw new Error(`No sunc accouont: ${accountName}`);
  }
  return accountName;
}
/*
function transfer(from, amount){
  if (accounts[from] < amount) return;
  accounts[from] -= amount;
  accounts[getAccount()] += amount;
}


function transfer(from, amount){
  if(accounts[from] < amount) return;
  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1){
      accounts[from] += amount;
    }
  }
}

class InputError extends Error{}
function promptDirection(question){
  let result = prompt(question);
    if(result.toLowerCase() == "left") return "L";
    if(result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
 }
 
for(;;){
  try{
    let dir = promptDirection("where?");
    console.log("You chose", dir);
    break;
  } catch (e){
    if (e instanceof InputError){
      console.log("Not a valid direction. Try again.");
    } else {
      throw e;
    }
  }
}

*/

//* Assertions

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]+/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
console.clear();
console.log(result);

function reverseString(str) {
  let newStr = str.split("").reverse().join("");
  return newStr;
}

console.log(reverseString("hello"));

function factorialize(num) {
  if (num < 1) {
    return 1;
  } else {
    num = num * factorialize(num - 1);
  }
  return num;
}
console.log(factorialize(0));

function findLongestWordLength(str) {
  let string = str.split(" ");
  let array = [];
  for (let element of string) {
    array.push(element.length);
  }
  return Math.max(...array);
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

function largestOfFour(arr) {
  let largest = [];
  for (let i = 0; i < arr.length; i++) {
    let max = arr[i].reduce((a, b) => Math.max(a, b));
    largest.push(max);
  }
  return largest;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

function confirmEnding(str, target) {
  let index = str.lastIndexOf(target);
  if (index == str.length - 1) {
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");

console.log(confirmEnding("Bastian", "ian"));

let namaste = "jacob mbogo ogot";
console.log(namaste.length - 1);
console.log(namaste.indexOf("ob"));

function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  } else {
    let array = [];
    for (let i = 0; i < num; i++) {
      array.push(str);
    }
    return array.reduce((a, b) => a + b);
  }
}

console.log(repeatStringNumTimes("*", 8));

function truncateString(str, num) {
  if (str.length > num) {
    return str[0] + "...";
  } else return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

function findElement(arr, func) {
  let num = 0;
  for (let element of arr) {
    if (func(element)) {
      num = num + element;
      return num;
    }
  }
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}

console.log(booWho(NaN));

function titleCase(str) {
  str = str.toLowerCase();
  let string = str.split(" ");
  string = string.map((a) => a[0].toUpperCase() + a.slice(1));
  return string.join(" ");
}
console.log(titleCase("I'm a little tea pot"));

function frankenSplice(arr1, arr2, n) {
  const arr3 = [...arr2];
  arr3.splice(n, 0, ...arr1);
  console.log(arr2);
  return arr3;
}
// *returns [4, 1, 2, 3, 5];
console.log(frankenSplice([1, 2, 3], [4, 5], 1));

let newbie = [4, 1, 2, 3, 5];
console.log(newbie.slice(1, 4));

function bouncer(arr) {
  let truthy = [];
  for (let element of arr) {
    let check = Boolean(element);
    if (check === true) {
      truthy.push(element);
    }
  }
  return truthy;
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));

function getIndexToIns(arr, num) {
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  let newArray = [];
  for (let element of arr) {
    if (num > element) {
      newArray.push(element);
    }
  }
  newArray.push(num);
  return newArray.indexOf(num);
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 30));

function mutation(arr) {
  for (let element of arr[1].toLowerCase()) {
    if (!arr[0].toLowerCase().includes(element)) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "neo"]));

let matchtest = /jacob/gi.exec(" 0 1 jacob");

console.log(matchtest);

console.log(/bad(ly)?/.exec("bad"));
console.log(/bad[ly]?/.exec("bad"));

//*The Date Class
console.log(new Date());
console.log(new Date().getTime());
console.log(new Date(1613408920625), Date.now());
console.log(Date.now());
console.log(new Date().getFullYear());

const getDate = (string) => {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
};
console.log(getDate("1-30-2003"));

let stringe = "1-30-2003";
console.log(/(\d{1,2})-(\d{1,2})-(\d{4})/.exec(stringe));

console.log(/\bcat\b/.test("cat!!"));

let animalCount = /\b\d+\s+(pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));

console.log(/ca(r|t)/.test("car"));
console.log(/pr?op/.test("pop"));
console.log(/ferr(\w+)/.test("ferret"));
console.log(/\w+ious$/.test("falasious"));
console.log(/\s\.,(:|;)/.test(" .,:"));
console.log(/\w{6,}/.test("triangular"));
console.log("elephant".match(/[e]/g));

//*Chapter 10: Modules.
const weekDay = (() => {
  const names = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  return {
    name(number) {
      return names[number];
    },
    number(name) {
      return names.indexOf(name);
    },
  };
})();

console.log(weekDay.name(weekDay.number("Sunday")));

const x = 1;
const evalAndReturnX = (code) => {
  eval(code);
  return x;
};
console.log(evalAndReturnX("var x = 2"));
console.log(x);

//*Modules with Classes, Object and closures.

import { default as Name, display, display as otherName } from "./module.js";

// console.log(display("Orange"));

let myName = new Name("Tony", "Cruz");
console.log(myName.combineNames());

// console.log(display("noon"));

// console.log(functions.display("Ogot"));
// let myName = new functions.Name("Tim", "Jonah");
// console.log(myName.combineNames());
// console.log(functions);

console.log(otherName("main"));
//*Asynchronus programming
// setTimeout(() => console.log("Tick"));

// let fifteen = Promise.resolve(15);
// fifteen.then((answer) => console.log(`We got ${answer}`));

// function indexOf(words, target){
//   let regex = new RegExp("\b"+target+"\b", "gi");
//   let wordstring = words.join(" ");
//   console.log(wordstring);
// };

// console.log(indexOf(['JaCk', 'Jack', 'jack', 'jackk', 'COdewars', 'codeWars', 'abcdefgh', 'codewars'],'codewars'));
let abby = ["jane", "pita", "cuba"];
let regex = /cuba/gi;
console.log(regex.exec(abby));

// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       // console.log(request, request.readyState);
//       if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if( request.readyState === 4){
//         reject("error getting results");
//       }
//     })

//     request.open("GET", resource);
//     request.send();

//  })
// };

// getTodos("todos/luigi.json").then(data => {
//   console.log("promise resolved:" ,data);
//   return getTodos("todos/mario.json");
// }).then(data => {
//   console.log("promise 2 resolved:",data);
//   return getTodos("todos/ogot.json");
// }).then(data => {
//   console.log("promise 3 resolved:", data);
// }).catch(err => {
//   console.log("promise rejected:", err);
// });

//*The Fetch Api
// fetch("todos/luigi.json").then((response) => {
//   console.log("resolved", response);
//   return response.json();
// }).then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log("rejected", err);
// });

// fetch("todos/ogot.json")
// .then(response => {
//   if(!response.ok){
//     return null;
//   }
//   let type = response.headers.get("content-type");
//   if (type !== "application/json"){
//     throw new TypeError( `Expected JSON, got ${type}`);
//     return response.json();
//   }
// })
// .then(data => {
//     console.log(data);
// })
// .catch(e => {
//   console.log("failed to retrieve data:", e);
// })

// const urls = ["todos/ogot.json", "todos/mario.json"];
// let promises = urls.map((url) =>
//   fetch(url).then((response) => response.json())
// );
// Promise.allSettled(promises)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error("not resolved:", err);
//   });

// const getTodos = async () => {
//   const response = await fetch("todos/luigi.json");

//   if (response.status !== 200) {
//     throw new Error("Cannot fetch the data");
//   }
//   const data = await response.json();
//   return data;
// };

// getTodos()
//   .then((data) => console.log("resolved:", data))
//   .catch((err) => console.log("not resolved:", err.message));

// const clear = async () => {
//   let done = await console.clear();
//   return done;
// };

// clear();

// console.log(1);

// const keithMito = () => {
//   console.log("Kazi mtaanin Agent");
// };
// keithMito();

function descendingOrder(n) {
  //...
  let array = Array.from(String(n), Number);
  let sorted = array.sort((a, b) => b - a);
  let one = sorted.join("");
  return one;
}

console.log(descendingOrder(3235));
console.clear();

function chuckPushUps(string) {
  //Massive, massive pecs!
  let test = /(\d+)/gi;
  let count = string.match(test);
  return count.length;
}
console.log(chuckPushUps("13 2"));

let test = /(\d+)/gi;
console.log('"jaime" 10 "is" 12 1'.match(test));
console.log(Boolean([]));

let someArray = [1, 2, 3, 5];
let myoray = Array.from(someArray);
myoray = myoray.push(1);
console.log(someArray);

var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    Plot:
      "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot:
      "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot:
      "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

function getRating(watchList) {
  // Only change code below this line
  let chrisNolan = watchList
    .filter((watchlist) => watchlist["Director"] == "Christopher Nolan")
    .map((watchlist) => watchlist["imdbRating"]);

  let newArray = chrisNolan.map((x) => Number(x));
  let average = newArray.reduce((a, b) => a + b);
  return average / newArray.length;

  // Only change code above this line
}
console.log(getRating(watchList));
console.log([4, 3.5].filter((x) => x % 2 == 0 || x % 2 == 1));
const arrange = ["a", "b", "o", "r"].sort((a, b) =>
  a === b ? 0 : a < b ? 1 : -1
);
console.log(arrange);

let globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  return arr.concat([]).sort((a, b) => a - b);
  // Only change code above this line
}
console.log(nonMutatingSort(globalArray));

function urlSlug(title) {
  return title.toLowerCase().split(" ").join("-");
}

console.log(urlSlug("Winter Is Coming"));

function sumAll(arr) {
  let newArray = arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = newArray[0]; i <= newArray[1]; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumAll([4, 1]));

let sumation = 0;
for (let i = 0; i <= 4; i++) {
  sumation = sumation + i;
}
console.log(sumation);

function destroyer(arr, ...rest) {
  return arr.filter((x) => !rest.includes(x));
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function whatIsInAName(collection, source) {
  let keys = Object.keys(source);
  return collection.filter((x) =>
    keys.every((y) => x.hasOwnProperty(y) && x[y] === source[y])
  );
}

console.log(
  whatIsInAName(
    [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 },
    ],
    { apple: 1, bat: 2 }
  )
);

function spinalCase(str) {
  let newString = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  let regex = /[_\s+]/g;
  return newString.replace(regex, "-").toLowerCase();
}

console.log(spinalCase("ThisIsSpinalTap"));

function translatePigLatin(str) {
  let firstTest = /^[aeiou]/;
  if (firstTest.test(str)) {
    return str.concat("way");
  } else {
    let regex = /^[^aeiou]+/;
    let newString = str.replace(regex, "");
    return newString.concat(str.match(regex)[0]).concat("ay");
  }
}

console.log(translatePigLatin("schwartz"));

//* Project: A Programming Language

// function parseExpression(program) {
//   program = skipSpace(program);
//   let match, expr;
//   if ((match = /^"([^"]*)"/.exec(program))) {
//     expr = { type: "value", value: match[1] };
//   } else if ((match = /^\d+\b/.exec(program))) {
//     expr = { type: "value", value: Number(match[0]) };
//   } else if ((match = /^[^\s(),#"]+/.exec(program))) {
//     expr = { type: "word", name: match[0] };
//   } else {
//     throw new SyntaxError("Unexpected syntax: " + program);
//   }
//   return parseApply(expr, program.slice(match[0].length));
// }

// function skipSpace(string) {
//   let first = string.search(/\S/);
//   if (first == -1) return "";
//   return string.slice(first);
// }

// function parseApply(expr, program) {
//   program = skipSpace(program);
//   if (program[0] != "(") {
//     return { expr: expr, rest: program };
//   }
//   program = skipSpace(program.slice(1));
//   expr = { type: "apply", operator: expr, args: [] };
//   while (program[0] != ")") {
//     let arg = parseExpression(program);
//     expr.args.push(arg.expr);
//     program = skipSpace(arg.rest);
//     if (program[0] == ",") {
//       program = skipSpace(program.slice(1));
//     } else if (program[0] != ")") {
//       throw new SyntaxError("Expected ',' or ')' ");
//     }
//     return parseApply(expr, program.slice(1));
//   }
// }

// function parse(program) {
//   let { expr, rest } = parseExpression(program);
//   if (skipSpace(rest).length > 0) {
//     throw new SyntaxError("Unexpected text after program");
//   }
//   return expr;
// }
