function a(){
  b();
  let c;
  console.log(c);
}

function b(){
  let d = "dd";
  console.log(d);
  console.log('inside b')
}

a();

let d;

console.log('next block');



function c(){
  console.log('inside function c');
  let myVar;
  console.log(myVar);
}

function e(){
  console.log('inside function e');
  let  myVar = 2;
  c();
  console.log(myVar);
}


let myVar = 8;
console.log(myVar);
e();







//you can access global variables but your function cant have the same name. but it will normallt acces global variables if defined outside the fucniton.

console.log('Third example')


function g(){
  console.log(myVar1); //will never acces the value of var1 inside h even though its in the stack itll access the global version because global is its outer environemnt. g() sits lexically on top of global()
}

function h(){
  let myVar1 = 3;
  g();
}


let myVar1 = 1;
h();


console.log("var sitting lexically inside another function")

function i(){
  function j(){
    console.log(var2); // if it doesn't find it in i() itll then check in global since global is the outer environemnt for i(); scope chain
    console.log('inside function j')
  }
  let var2 = 2; //if commented out it will look in glaobal. helps with debugging. 
  j();
}

let var2 = 3;
i()
// j() will produce error because j is lexically inside another function and gets garbage collected when done. uncaught reference.