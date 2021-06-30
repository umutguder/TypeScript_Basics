var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
//Primitives
//Not Number, it is object
var age = 12;
var userName = "my string";
var isInt = true;
//Arrays
var hobbies = ["n", "p", "m"];
//Object
var person;
//Type Inference - :string not necessary inferred from assign value
var course = "The guide";
//Union Type
var unionType = "The guide";
var man;
//Functions and types
function add(a, b) {
    return a + b;
}
function print(value) {
    console.log(value);
}
//Generics: type safe yet flexible
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array);
    return newArray;
}
var nArray = [1, 2, 3];
var updatedNArray = insertAtBeginning(nArray, -1);
//Property 'split' does not exist on type 'number';
//updatedNArray[0].split("");
var sArray = ["1", "2"];
var updatedSArray = insertAtBeginning(sArray, "ee");
updatedSArray[0].split("");
