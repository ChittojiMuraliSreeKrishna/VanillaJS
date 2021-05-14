// variables in js var, let, const
// var is global variable

let age = 30;
age = 32;
console.log("Let :" + age);
// let can be changed.

const price = 25;
console.log("Const :" + price);
// const is an constant so we cant change.

// Data Types:- stings, numbers, boolean, null, undefined

const name = "krishna"; // string
const age1 = 25; // number
const isNormal = false; // boolean
const rating = 1.5; // number bcz there is no float or int in js
const x = null; // it gives wrong as objects
const y = undefined; // undefined
let z; // undefined

console.log(typeof y);

// Concatination with ES6 'Template strings'
console.log(`my name is ${name} and i am ${age1}`);
// Uppercase
console.log(name.toUpperCase());
// Lowercase
console.log(name.toLowerCase());
// Substring
console.log(name.substring(0, 4));
// Split
names = "murali, krishna, sona, led";
console.log(names.split(", "));

// Arrays only in js we can add anything in arrays
const numbers = new Array(1, 2, 3, 4, 5, "six", "seven", true);
// for assigning a new values with const in arrays
numbers[8] = 8;
// or
numbers.push("nine");
// add to the begining
numbers.unshift("zero");
console.log(numbers);
// to check its an array or not
console.log(Array.isArray(numbers));

// Object literals
const person = {
  firstName: "murali",
  lastName: "krishna",
  age: 25,
  hobbies: ["learning", "games", "music"],
  address: {
    street: "1st lane",
    city: "nellore",
    state: "andhra pradesh",
  },
};

console.log(person);
// getting values out of it
console.log(person.firstName);
// destructuring
const {
  firstName,
  lastName,
  address: { city },
} = person;
console.log(lastName);
console.log(city);

// arrays
const todos = [
  {
    id: 1,
    text: "charge laptop",
    isCompleted: true,
  },
  {
    id: 2,
    text: "charge mobile",
    isCompleted: false,
  },
  {
    id: 3,
    text: "eat breakfast",
    isCompleted: true,
  },
];

const todoJSON = JSON.stringify(todos);
console.log(todos);
console.log(todos[1].text);
console.log(todoJSON);

// for loops
for (let i = 0; i <= 10; i++) {
  console.log(`forloop number: ${i}`);
}
//While loops
let i = 0;
while (i < 10) {
  console.log(`whileloop numbers: ${i}`);
  i++;
}
for (let j = 0; j < todos.length; j++) {
  console.log(todos[j].text);
}
for (let todo of todos) {
  console.log(todo.id);
}
// forEach, map, filter
todos.forEach(function (todo) {
  console.log(todo.isCompleted);
});
// map
const todoText = todos.map(function (todo) {
  return todo.text;
});

console.log(todoText);
// filter
const todoCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === false;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoCompleted);

// Conditionsional
const k = 20;

if (k === 10) {
  console.log("x is 10");
} else if (x > 10 || x < 50) {
  console.log("x is greater than 10 or x is less than 50");
} else {
  console.log("x is not 10");
}

const l = 19;
const color = l > 10 ? "red" : "blue";
console.log(color);

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
}

const addNums = (num1 = 1, num2 = 1) => {
  return num1 + num2;
};

console.log(addNums(5, 5));

todos.forEach((todo) => console.log(todo));

// Constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}
Person.prototype.birthYear = function () {
  return this.dob.getFullYear();
};
Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
// Instantiate object
const person1 = new Person("sona", "gorty", "02-02-1997");
console.log(person1.fullName());

// Class
class Person1 {
  constructor(firstName, lastName, dob) {
    this.firstName;
    this.lastName;
    this.dob = new Date(dob);
  }
  birthYear() {
    return this.dob.getFullYear();
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const person2 = new Person1("sona", "gorty", "02-02-1997");
console.log(person2);

const form = document.querySelector("#my-form");
const userList = document.querySelector("#users");
const btn = document.querySelector(".btn");
const inpName = document.querySelector("#name");
const inpEmail = document.querySelector("#email");
const msg = document.querySelector(".msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inpName.value === "" || inpEmail.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "inputs cannot be empty";
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${inpName.value} : ${inpEmail.value}`)
    );
    userList.appendChild(li);

    // Clear Fields
    inpName.value = "";
    inpEmail.value = "";
  }
});
