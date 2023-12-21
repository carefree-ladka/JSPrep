function test() {
  var a = (b = 0);
  a++;
  return a;
}

test();

console.log(typeof a); //undefined
console.log(typeof b); //number

//---------------------------------------------

function test1() {
  setTimeout(() => console.log(x));
  let x = 5;
}

// test1(); //5

//----------------------------------------------
const arr = [1, 2, 3];
delete arr[0];
delete arr[1];
delete arr[2];

console.log(arr); //[ <3 empty items> ]
console.log(arr.length); //3

//----------------------------------------------

const arr1 = [];

arr1.x = 10;

console.log(arr1); //x: 10
console.log(arr1[0]); //undefined

//----------------------------------------------

function test3() {
  if (constructor) console.log("hello");
  else console.log("Byee");
}

test3(); //hello

//--------------------------------------------

const fn = () => {
  if (function test() {}) {
    console.log("Okay?");
    console.log(typeof test); //function
  } else console.log("Not okay");
};

fn(); //Okay?

//---------------------------------------------

const fn1 = () => {
  const sentence = "This, India; Great";
  return sentence.split(/[,;]/);
};

console.log(fn1()); //[ 'This', ' India', ' Great' ]

//--------------------------------------------

var x = 10;
const fn3 = () => {
  x = 5;
  console.log(x); //5
};

fn3();
console.log(x); //5


//--------------------------------------------

