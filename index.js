console.log("Hello World!");
let sumTotal = 0;
function sum(array){
  for(i = 0; i<array.length; i++){
    sumTotal = sumTotal + array[i];
  }
}
sum([1,2,3,4,5,]);
console.log(sumTotal);

function reverseArray(array){

  let newArray = [];
  for(i=array.length-1; i>=0; i--){
    newArray.push(array[i]);

  }

  return newArray;
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

