// Immutability vs mutability

let bob = "Bob";
let bobby = bob;

bob = "Robert";

console.log(bobby);

let user = { name: "Chicken", isAdmin: true };
let anotherUser = user;
let yetAnotherUser = { ...user };

user.name = "Pollo";

console.log(anotherUser);
console.log(yetAnotherUser);

// { name: "Chicken", isAdmin: true }
// { name: "Pollo", isAdmin: true }

user === anotherUser; // true

const studentGrades = { results: [90, 80, 95], student: "Bobby" };
const anotherStudent = { ...studentGrades }; // shallow copy
anotherStudent.results = [...studentGrades.results];

studentGrades.student = "Jill";
studentGrades.results.push(100);

console.log(anotherStudent);
