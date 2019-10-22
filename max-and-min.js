'use strict';
function max(numbers) {
  let num = 1;
  let maxNum = numbers[0];
  while(num<numbers.length) {
    if(numbers[num]>maxNum){
      maxNum = numbers[num];
    }
  }
  return maxNum;
}
console.log(max[1,2,3,4,5]);

function min(numbers) {
  let num = 1;
  let minNum = numbers[0];
  while(num>numbers.length) {
    if(numbers[num]<minNum){
      minNum = numbers[num];
    }
  }
  return minNum;
}
console.log(min[1,2,3,4,5]);



function average(nums) {
  let sum = 0; nums.forEach(element => {
    sum += element; 
  });

  return sum / nums.length; 
} 
console.log(average([1,1,1,1,1,1]));


// HIGH LEVEL FUNCTIONS

function repeat(fn, num) {
  for (let x = 0; x < num; x++) {
    fn();
  }
}

function hello() {
  console.log('Hello World');
}

function goodbye() {
  console.log('Goodbye World');
}

repeat(hello, 5);
repeat(goodbye, 5);



// Functions as arguments (filter)
function filter(arr, fn) {
  let result = [];

  for (let i = 0, len = arr.length; i < len; i++) {
    if (fn(arr[i]) === true) result.push(arr[i]);
  }
  return result;
}

const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
const filteredNames = filter(myNames, name => name[0] === 'R');
console.log(filteredNames);


// Hazard Alert

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return location => {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);

  };
}

const rocks = hazardWarningCreator('rocks on the road');
const flying = hazardWarningCreator('flying monsters');
rocks('Denmark');
rocks('Everywhere');
flying('Your room');



const turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

turtleMovements.filter(item => (item[0] < 0 || item[1] < 0 ? false : true));

let newMoves = turtleMovements
  .filter(item => (item[0] < 0 || item[1] < 0 ? false : true))
  .map(item => item[0] + item[1]);

newMoves.forEach((el, i) => {
  console.log(`Movement #${i}: ${el} ${el > 1 || el == 0 ? "steps" : "step"}`);
});