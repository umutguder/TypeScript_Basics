# TypeScript: superset of JavaScript

Adds more features to the JavaScript syntax.
Unlike React, TypeScript is not a library for JavaScript,

TypeScript doesn't use JavaScript features
-to build new features on top of them,
-to build functionalities around them.

TypeScript extends the core JavaScript syntax.

# It adds static typing to JavaScript (JavaScript is dynamically typed)

npm init -y

# TypeScript code does not run in the browser though.

Need to compile TypeScript to JavaScript. During that compilation process,
all our type annotations will be removed because JavaScript doesn't know those annotations.

# To invoke this compiler:

we need to run this command here npx tsc.

npx tsc with-typescript.ts
npx tsc basics.ts
creates a with-typescript.js and basics.js files with converted version

# TypeScript types:

- Primitives (number,string,boolean)
- Arrays
- Objects
- Functions

# Type Inference

# Union Type

let unionType: string | number = "The guide";

# Type Aliases: to limit repetition

type Man = { name: string; age: number };
let man: Man;

# Generics: type safe yet flexible

function insertAtBeginning<T>(array: T[], value: T) {
const newArray = [value, ...array];
return newArray;
}
