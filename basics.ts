//Primitives
//Not Number, it is object
let age: number = 12;
let userName: string = "my string";
let isInt: boolean = true;

//Arrays
let hobbies: string[] = ["n", "p", "m"];

//Object
let person: { name: string; age: number };

//Type Inference - :string not necessary inferred from assign value
let course = "The guide";

//Union Type
let unionType: string | number = "The guide";

//Type Aliales
type Man = { name: string; age: number };
let man: Man;

//Functions and types
function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

//Generics: type safe yet flexible
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const nArray = [1, 2, 3];
const updatedNArray = insertAtBeginning(nArray, -1);

//Property 'split' does not exist on type 'number';
//updatedNArray[0].split("");

const sArray = ["1", "2"];
const updatedSArray = insertAtBeginning(sArray, "ee");
updatedSArray[0].split("");
