/*console.log("Hello Razeen !");

var shoesPrice = 50;
console.log(shoesPrice);

let bikePrice = "5 lack";
console.log(bikePrice);

var myName = "MD.Razeen Kibria"; //keyword=( var ), maximum keyword was smaller letter used in js !
console.log(myName);
console.log(typeof myName);

var isGood = true; // variable name like:( isGood ) , But you don't used any quotation like: ' '," " .                //Variable also Case-sensitive ..
console.log(isGood);

let isGoodStudent = false;
console.log(isGoodStudent);
console.log(typeof isGoodStudent);

var id='I will promise I work hard as my limitation ';
console.log(id.toUpperCase());
console.log(id.toLowerCase());
console.log(id.indexOf("will"));
console.log(id.split('I'));

var jobPaisos = true;
var savingAmount = 5000;
if ((jobPaisos = true && savingAmount > 20000)) {
  console.log("Ali Tour e Jai Cholo");
} else {
  console.log("Tour Cancelled Ali & Razeen ");
}

var friendAge =[20,23,34,50];
console.log(friendAge);

var position =friendAge.length;
console.log(position);

friendAge.push(29);
console.log(friendAge);

friendAge.pop();
console.log(friendAge);

friendAge.shift();
console.log(friendAge);

var pos=friendAge.indexOf(23);
console.log(pos);


var friendName=['razeen','ratul','fahim','rakin','towkir'];
var list=friendName.unshift('anika');
console.log(friendName);

var part =friendName.slice(2,6);
console.log(part);



var num = 15; //declaration
while (num >= 0) {
  //condition statement
  console.log(num); //print the values
  num--; //increment or decrements the value
}

console.log("Next part :");

var fullName = ["MD", "Razeen", "Kibria", "Ramim"];
for (var i = 0; i < fullName.length; i++) {
  var allNames = fullName[i];
  console.log(allNames);
}



 //WithOut Parameters:
function sayLoveYou() {
  console.log("I Love coding ");
}
sayLoveYou();

 //Using Function Parameters :
function doubleIt(num) {
  var result = num * 2;
  return result;
}
var first = doubleIt(100);
var second = doubleIt(400);

var total = first + second;

console.log(total);

// practice-2:

function total(num1,num2){
 var result=num1+num2;
 return result;
}
var sum=total(22,30);
console.log(sum);


var student = { id: 193311003, phone: 18450, name: "MD.Razeen Kibria" };
var student1 = { id: 193311002, phone: 98768, name: "MD.Rasedul Hasan" };

student.phone = 98755;

student.name = "MD.Fahim";

console.log(student);


function inchToFeet(inch) {
  var feet = inch / 12;
  return feet;
}

var result = inchToFeet(158);
console.log(result);

var result1 = inchToFeet(250);
console.log(result1);



var fullName='razeen';
if(fullName.length>5)
{
  fullName='kibria';
}
console.log(fullName);


// -----------------program to check leap year----------------

function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

// take input
const year = prompt("Enter a year:");

checkLeapYear(year);


//---------------------Using For-loop Factorial Number-----------------------

function factorial(n) {
  fact = 1;
  for (var i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
var result = factorial(9);
console.log(result);



//-------------------Using While-loop Factorial Number-------------------------------

function factorial(n) {
  var i = 1;
  var fact = 1;
  while (i <= n) {
    fact = fact * i;
    i++;
  }
  return fact;
}
var result = factorial(7);
console.log(result);



//------------------Recursive factorial Using -----------------------

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
var result = factorial(0);
console.log(result);

//----------------Fibonacci using faction method--& Iterattive way used -----------------
function fibonacci(n) {
  var fibo = [0, 1];
  for (var i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

var result = fibonacci(12);
console.log(result);



//--------------Fibonacci using faction method--& Recursive way used ---------------

function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

var result = fibonacci(12);
console.log(result);



//----------------Prime Number Using Function method---------------------

function isPrime(n) {
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      return "Not a prime number";
    }
  }
  return "Prime Number";
}

var checkIsPrimeNumber = isPrime(3);
console.log(checkIsPrimeNumber);



//-------------Swap Practice---------------------------------------------------

//part-01:

var a = 9;
var b = 7;
console.log("before swap a = ", a, " b =", b);
var temp = a;
a = b;
b = temp;
console.log("After swap a = ", a, " b =", b);

//part-02:

var x = 10;
var y = 6;
console.log("before swap x = ", x, " y =", y);
x = x + y;
y = x - y; //10
x = x - y; //16-10=6
console.log("after swap x = ", x, " y =", y);

//part-03:

var p = 17;
var q = 19;

[p, q] = [q, p];

console.log("after swap p = ", p, " q =", q);

*/

//------------------Math-Function Used-----------------------------

var num = 2.45;
var result1 = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
console.log(result3);

//---------------Dice Game Coding-------------

for (var i = 1; i < 10; i++) {
  var dice = Math.random() * 6;
  var finalCall = Math.round(dice);
  console.log(finalCall);
}
