console.log("Hello World!");
let sumTotal = 0;
function sum(array){
  for(i = 0; i<array.length; i++){
    sumTotal = sumTotal + array[i];
  }
}
sum(array);
console.log(sumTotal);
