console.log("Hello World!");
let sumTotal = 0;
function all(array){
  for(i = 0; i<array.length; i++){
    sumTotal = sumTotal + array[i];
  }
}
all([1,2,3,4,5,]);
console.log(sumTotal);

function reverseArray(array){

  let niceArray = [];
  for(i=array.length-1; i>=0; i--){
    niceArray.push(array[i]);

  }

  return niceArray;
}
console.log(reverseArray([2,3,4,5,6]));


function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
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
  return {value, rest: list};
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
            sizes: ["large","small","just good"]
};

console.log(myCar["speed"]);

console.log(typeof(myCar));

function factorial(number){

  let product = 1;
  for(let i = number; i >= 1; i--){

    product*=i;

  }

  return product;
}
console.log(factorial(4));

function showScope(){

  scope = "local";
  return scope;

}
scope = "global";
console.log(scope);
console.log(showScope());
console.log(scope);


function Checking(amount){
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}

function deposit(amount){
  this.balance += amount;
}
function withdraw(amount){
  if(amount<=this.balance){
    this.balance-=amount;
  }
  if(amount > this.balance){
    console.log("Insufficient funds");
  }
}
function toString(){
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

let numbers = new Array(2,3,4,5,6);
console.log(numbers);

let nums = [];
for(i = 0; i < 6; i++){
  nums[i]= i + 1;
}
console.log(nums);

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
  action(i);
  }
  }

let labels = [];
repeat (5, i => {labels.push(`Unit ${i + 1}`);});
console.log(labels);

function greaterThan (n){
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(12));

function noisy(f){
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, "returned", result);
    return result;
  };
};

noisy(Math.min)(3,2,1);

function unless(test, then) {
  if (!test) then();
  }
  repeat(3, n => {
  unless(n % 2 == 1, () => {
  console.log(n, "is even");
  });
  });

  ["A", "B"].forEach(l => console.log(l));

  const square = function (x){
    return x * x;
  }
  console.log(square(5));

  const foo = square;
  console.log(foo(6));

  function formalGreeting(){
    console.log("How are you?");
  }

  function casualGreeting(){
    console.log("What's up?");
  }

  function greet(type, greetFormal, greetCasual){

    if (type == "formal"){
      greetFormal();
    }else if(type == "casual"){
      greetCasual();
    }

  }
  greet("casual", formalGreeting, casualGreeting);

  const arr1 = [1,2,3];
  const arr2 = [];

  for (i = 0; i < arr1.length; i++){
    arr2.push(arr1[i]*2);
  }
  console.log(arr2);

  const firstData = [1,3,3];
  const secondData = firstData.map(item => item * 2
  );
  console.log(secondData);


  const birthYear = [1975, 1997, 2002, 1995, 1985];
  const ages = birthYear.map(year => 2018 - year);
  console.log(ages);

  const persons = [
    {name: "Peter", age: 16},
    {name: "Mark", age: 18},
    {name: "John", age: 27},
    {name: "Jane", age: 14},
    {name: "Tony", age: 24}
  ];

  const fullAge = []
  for (let i = 0; i < persons.length; i++){
    if (persons[i].age >= 18){
      fullAge.push(persons[i]);
    }
  }
  console.log(fullAge);

  const lessAge = persons.filter(person => person.age < 18);
  console.log(lessAge);

 

  const strArray = ["JavaScript","Python","PHP","Java","C"];

  function mapForEach(arr,fn){
    const newArray = [];
    for(let i = 0; i<arr.length; i++){
      newArray.push(fn(arr[i]));
    }
    return newArray;
  }
  
  const lenArray = mapForEach(strArray,item => item.length);
  console.log(lenArray);

  console.log("Kenya");


  let names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
  names.sort();
  console.log(names);

  function compare(num1,num2){
    return num1 - num2;
  }

  function digit(num){
    console.log(num,num*num);
  }

  let digits = [3,1,2,100,4,200];
  digits.sort(compare);
  console.log(digits);
  
  digits.forEach(digit);
  let grades = [44,56,33,74];
  let newGrades = grades.map(grade=>grade + 5);
  console.log(newGrades);

  let words = ["for","your","information"];
  let acronym = words.map(word => word[0]);
  console.log(acronym.join(""));

 
  let list = []
  for (i = 0; i < 20; i++){
      list[i] = i+1;
  }

  let evens = list.filter(component => component % 2 == 0);
  console.log("Even Numbers: " + evens)

  
  const arr = [5,7,1,8,4];
  const sum = arr.reduce(function(total, currentValue){
    return total + currentValue;
  });

  console.log(sum);


  let people = [1,4,5,6,6];
  peopleInTotal = people.reduce((currentNumber,totalNumber) => currentNumber + totalNumber);

  console.log(peopleInTotal);
  var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
  var dmpDept = itDiv.splice(3,5);
  console.log(dmpDept);
  console.log(itDiv);

  let numberList = [1,3,5];
  evenNumbers = numberList.some(even => even % 2 == 0);
  console.log(evenNumbers);

  let horseShoe = "🐴👟";
  console.log(horseShoe.length);
  console.log(horseShoe[0]);
  console.log(horseShoe.charCodeAt(0));
  console.log(horseShoe.codePointAt(0));

let roseDragon = "🌻🐲";
for (let char of roseDragon){
  console.log(char);
}
function countBy(items, groupName){
  let counts = [];
  for(let item of items){
    let name = groupName(item);
    let known = counts.findIndex(c => c == name);
    if (known == -1){
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(countBy([1,2,3,4,5], n => n > 2));



let arrayOne = [[1,2,3,4],["jack","steve","mary"],[true,false]];
console.log(arrayOne.reduce((a,b) => a.concat((b))));

function loop(start, test, update,body){
 for (let value = start; test(value); value = update(value)){
   body(value);
 }
}
loop(3, n => n > 0, n => n - 1,console.log);

let animals = [
  {name:"Fluffykins", species:"rabbit"},
  {name:"Caro",       species:"dog"},
  {name:"Hamilton",   species:"fish"},
  {name:"Ursula",     species:"cat"},
  {name:"Jimmy",      species:"fish"}
]

console.log(animals.filter(animal => animal.species == "fish").map(animal=>animal.type = "sea mammal"));

function every(array, validation){
  for(let item of array){
    return validation(item);
  }
}
function every2(array, validation){
  return !array.some(item => !validation(item));
}
console.log(every2([8,4,6], n => n % 2 == 0));
console.log(every2([1,3,5], n => n > 10));
console.log(every([], n => n < 10));

let activities = [
  ["reading",1],
  ["playing",4],
  ["slaking",9],
  ["patriotism",7]
];

console.table(activities);
console.log(activities[1][0]);
console.log(activities[3][1]);
activities.push(["cooking",1]);

console.table(activities);
activities.pop();
console.table(activities);

Array.matrix = function(numrows, numcols, initial){
  let arr = [];
  for(let i = 0; i < numrows; i++){
    let columns = [];
    for(let j = 0; j < numcols; j++){
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}

let numbs = Array.matrix(5,5,0);
console.log(numbs[1][1]);

let namels = Array.matrix(3,3,"");
namels[1][2] = "Joe";
console.log(namels[1][2]);
console.table(namels);
console.table(numbs);


function weekTemps(){
  this.dataStore = [];
  this.add = add;
  this.average = average;
}

function add(temp){
  this.dataStore.push(temp);
}

function average(){
  let total = 0;
  for (let i = 0; i < this.dataStore.length; i++){
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

function append(grade){
  return marks.push(grade);
}

function mean(){
  return (marks.reduce((a,b) => a + b))/marks.length;
}

append(21);
append(23);
append(45);
console.log(marks);

console.log(mean().toFixed(2));

function newGrade(){
  this.alama = [];
  this.ongeza = ongeza;
  this.meanAverage = meanAverage;
}

function ongeza(marksi){
  this.alama.push(marksi);
}

function meanAverage(){
  return (this.alama.reduce((a,b) => a + b))/this.alama.length;
}

let finalList = new newGrade();
finalList.ongeza(21);
finalList.ongeza(23);
finalList.ongeza(45);

console.log(finalList.meanAverage().toFixed(2));
console.log(finalList.alama);


let setOfWords = [];
function addWord(word){
  return setOfWords.push(word);
}

function forward(){
  return setOfWords.reduce((a,b) => a + b);
}

function backword(){
  return setOfWords.reverse();
}

addWord("cunning");
addWord("misbehave");
console.log(setOfWords);
console.log(backword());


function individualLetters(){
  this.letter = [];
  this.addit = addit;
  this.singleWord = singleWord;
}

function addit(letr){
  this.letter.push(letr);
}

function singleWord(){
  for(let i = 0; i < this.letter.length; i++){
    return this.letter.reduce((a,b) => a + b);
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
rabbit.speak = function(line){
  console.log(`The rabbit says "${line}"`);
};

rabbit.speak("I'm alive.");
console.log(rabbit);
console.log(rabbit.cure);
console.log(rabbit);

function speak(line){
  console.log(`The ${this.type} rabbit says '${line}`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers," + "how late it's getting!");
hungryRabbit.speak("I could use a carrot right now.");
speak.call(hungryRabbit, "Burp!");

function normalize(){
  console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0,2,3], length: 5});

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
  constructor (type){
    this.type = type;
  }
  speak(line) {
  console.log(`The ${this.type} rabbit says "${line}"`)
  }
}

let muteRabbit = new Rabbit("mute");
muteRabbit.speak("de");

let object = new class { getWord() { return "hello";} };
console.log(object.getWord());



let findCar = new class{ findcar(){
return "Ethiopia";
}
};

console.log(findCar.findcar());


Rabbit.prototype.teeth = "small";
console.log(muteRabbit.teeth);

muteRabbit.teeth = "long, sharp and bloody";
console.log(muteRabbit.teeth);

console.log(Array.prototype.toString == Object.prototype.toString);
console.log([1, 2].toString());

console.log((Object.prototype.toString.call([1,2])));


let userNumbers = [3,5,5];
console.log(userNumbers.map(n => n + 5));

let agesOf = {
  Boris: 39,
  Lianga: 22,
  Julia: 62
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


console.log(Object.keys({
  Boris: 39,
  Lianga: 22,
  Julia: 62
}));

console.log({x: 1}.hasOwnProperty("x"));
console.log({x: 1}.hasOwnProperty("toString"));


let fastCar = new Map();
fastCar.set("speed", 88);

console.log(`what is the speed of the car?`, fastCar.get("speed"));

//*Polymorphism:
Rabbit.prototype.toString = function(){
  return `a ${this.type} rabbit`;
};
console.log(String(muteRabbit));

//*Symbols: are valued created whith the symbol function. Unlike strings, newly created symbols are unique - you cannot create the same symbol twice.

let sym = Symbol("name")
console.log(sym == Symbol("name"));
Rabbit.prototype[sym] = 55;
console.log(muteRabbit[sym]);

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function(){
  return `${this.length} cm of blue yarn`;
};
console.log([1, 2].toString());
console.log([1,2][toStringSymbol]());

let stringObject = {
  [toStringSymbol]() { return "a jute rope"; }
  };
console.log(stringObject[toStringSymbol]());


//*The Iterator interface
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());


class Matrix {
  constructor (width, height, element = (x, y) => undefined){
    this.width = width;
    this.height = height;
    this.content = [];
    
    for(let y = 0; y < height; y++){
      for(let x = 0; x < width; x++){
        this.content[y * width + x] = element(x, y);
      }
    }
  }

get(x,y){
  return this.content[y * this.width + x];
}
set(x,y, value){
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
    if (this.y == this.matrix.height) return {done: true};
    let value = { x: this.x,
                  y: this.y,
                  value: this.matrix.get(this.x, this.y)};
    this.x++;
  
  if (this.x == this.matrix.width) {
    this.x = 0;
    this.y++;
  }
  return {value, done: false};
}
}


Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
  }
let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
console.log(x, y, value);
}

console.log('jacob mbogo');

function isEven(number){
 number = Math.abs(number);
 if(number == 0) {
   return true;
 }else if(number == 1){
   return false;
 } else {
   return isEven(number - 2);
 }
}

console.log(isEven(-1));

function countBs(string){
  string = string.split('');
  let bs = [];
  for (let char of string){
    if (char == "B"){
      bs.push(char);
    }
  }
  return bs.length;
}

console.log(countBs("BaBluenBAcodiB"));

function countChar(string, k){
  string = string.split('');
  let os = [];
  for (let char of string){
    if(char == k){
      os.push(char);
    }
  }
  return os.length;
}

console.log(countChar("BakudiokalinaBKK", "K"));

function reverseArray(array){
  let newArr = [];
  for (i = array.length - 1; i >= 0; i--){
    newArr.push(array[i]);
  }
  return newArr;
}

console.log(reverseArray([1, 3, 5, 6]));

function reverseArrayInPlace(arr){
  return arr.reverse();
}
console.log(reverseArrayInPlace([1, 2, 7]));

function arrayToLIst(array){
  
    return {value: array[0], rest: {value: array[1], rest: {value: array[2], rest: null}}};
  
}

console.log(arrayToLIst([1,2,3]));

function array(array){
  return array.reduce((a,b) => a.concat(b));
}
console.log(array([[1,4,5],[6,5,"t"]]));


//^Project: robot

const roads = [
  "Alice's House-Bob's House", "Alice's House-Cabin",
  "Alice's House-Post Office", "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop", "Marketplace-Farm",
  "Marketplace-Post Office", "Marketplace-Shop",
  "Marketplace-Town Hall", "Shop-Town Hall"
];

//* The network of roads in this village forms a graph. Of which a graph is a collection of points(places in the village) with lines between them( roads)

//* The array of strings can be very difficult to work with. Let's convert the list of roads to a data structure that for each place tells us what can be reached from there.

function buldGraph(edges){
  let graph = Object.create(null);
  function addEdge(from, to){
    if(graph[from] == null){
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from,to] of edges.map(r => r.split("-"))){
  addEdge(from, to);
  addEdge(to, from);
  }
  return graph;
}

const roadGraph = buldGraph(roads);
console.log(roadGraph);


//* The Task

class VillageState {
  constructor(place, parcels){
    this.place = place;
    this.parcels = parcels;
  }
  move(destination){
    if (!roadGraph[this.place].includes(destination)){
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if(p.place != this.place) return p;
        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

let first = new VillageState(
  "Post Office",
  [{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");

console.log(next.place, next.parcels, first.place);

let unchangable = Object.freeze({value: 5});//* Don't mess with this object
unchangable.value = 10;
console.log(unchangable.value);

function runRobot(state, robot, memory){
  for( let turn = 0;; turn ++){
    if (state.parcels.length == 0){
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array){
  let choice = Math.floor(Math.random()*array.length);
  return array[choice];
}

function randomRobot(state){
  return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5){
  let parcels = [];
  for (let i = 0; i < parcelCount; i++){
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do{
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};
//* Starting up a virtual world.
runRobot(VillageState.random(), randomRobot);


//* The Mail Truck's Route
const mailRoute = [//*starting from the post office
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];


function routeRobot(state, memory){
  if (memory.length == 0){
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1)};
}

//* Pathfinding

function findRoute(graph, from, to){
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++){
    let {at, route} = work[i];
    for ( let place of graph[at]){
      if (place == to) return route. concat(place);
      if (!work.some(w => w.at == place)){
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route){
  if(route.length == 0){
    let parcel = parcels[0];
    if (parcel.place){
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

let bminus = [3,6,7,4];
bminus.unshift(3);
console.log(bminus);

