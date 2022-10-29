const students = [
  {
    id: "11ce",
    first_name: "Dall",
    last_name: "Puckring",
  },
  {
    id: "2958",
    first_name: "Margarete",
    last_name: "Brandi",
  },
  {
    id: "565a",
    first_name: "Bendicty",
    last_name: "Woodage",
  },
  {
    id: "3a16",
    first_name: "Micki",
    last_name: "Mattes",
  },
  {
    id: "f396",
    first_name: "Flory",
    last_name: "Gladeche",
  },
  {
    id: "de5f",
    first_name: "Jamill",
    last_name: "Emilien",
  },
  {
    id: "54cb",
    first_name: "Brett",
    last_name: "Aizikowitz",
  },
  {
    id: "9135",
    first_name: "Lorry",
    last_name: "Smallman",
  },
  {
    id: "978f",
    first_name: "Gilly",
    last_name: "Flott",
  },
];

const student = students.find(stud => stud.id === '565a');
console.log(student);

// If that didn't match anything, what would we find?

const studentTwo = students.find(stud => stud.id === '565ab');
console.log(studentTwo); // undefined

// BAD idea
// function isStudent(student) {
//   return student.id === '565a';
// }
// const student = students.find(isStudent);
// console.log(student);

// HOC Good idea
// This is called a high-order function or a higher-order function. It is a function that will return another function.
function findById(id) {
  return function isStudent(student) {
    return student.id === id;
  }
};

// Now we can simply
const studentThree = students.find(findById('565a'));
console.log(studentThree);

// source 
// https://wesbos.com/javascript/09-gettin-loopy/51-looping-and-iterating-filter-find-and-higher-order-functions