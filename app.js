var arr = [10];
console.log(arr);

var vegsArr = ["onion","Potato","Tomato"];
vegsArr.unshift("Spinach");
console.log(vegsArr);


var arr = [10,"Talha", , 40,true,null];
console.log(arr);

arr[7]= 100

console.log(arr);


var vegsArr = [];
vegsArr.unshift("onion","Potato","Tomato","Spinach");
console.log(vegsArr);



var vegsArr = ["Potato","Tomato"];
vegsArr.unshift("onion","Spinach");
console.log(vegsArr);


var vegsArr = ["onion","Potato","Tomato"];
vegsArr.splice(0,2);
console.log(vegsArr);


// var fruits = ["apple","mango","grapes","banana","orange"];
// fruits.splice(1,2);
// document.write(fruits);


// var fruits = ["apple","mango","grapes","banana","orange"];
// fruits.splice(2,1);
// document.write(fruits);

// var fruits = ["apple","mango","grapes","banana","orange"];
// fruits.splice(-2,1);
// document.write(fruits);

// var fruits = ["apple","mango","grapes","banana","orange"];
// fruits.splice(-2,2,"Talha","ali");
// document.write(fruits);

var fruits = ["apple","mango","grapes","banana","orange"];
var copy = fruits.slice(0,4);
console.log(copy);

var fruits = ["apple","mango","grapes","banana","orange"];
fruits.pop();
console.log(fruits);


var fruits = ["apple","mango","grapes","banana","orange"];
fruits.shift();
console.log(fruits);



var fruits = ["apple","mango","grapes","banana","orange"];
fruits.push("Pineapple","Guava");
console.log(fruits);



var fruits = ["apple","mango","grapes","banana","orange"];
fruits.unshift("Pineapple","Guava");
console.log(fruits);


var fruits = ["apple","mango","grapes","banana","orange"];
var copy = fruits.slice(-4);
console.log(copy);


var fruits = ["apple","mango","grapes","banana","orange"];
var copy = fruits.slice(2,-1);
console.log(copy);


// for (var i = 0; i <= 10; i++) {
//     document.write("It's one of the cleanest cities" + "<br>");
//      }


// for (var i = 1; i < 10; ++i) {
//     document.write("It's one of the cleanest cities" + "<br>");
//          }


for (var i = 10; i >= 1; i--) {
    console.log(i);
                 }

var input = +prompt("Enter any no");
var range = +prompt("Enter range");
for ( var i = 1; i <= range ; i++){
    document.write(`${input} x ${i} = ${input*i} <br>`);
}