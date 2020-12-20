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

  const arr = [5,7,1,8,4];
  const sum = arr.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  });

  console.log(sum);

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


