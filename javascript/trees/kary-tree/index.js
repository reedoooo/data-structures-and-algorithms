// "use strict"; // Enforce strict mode in JavaScript to prevent certain actions and display more exceptions

// class Node {
//   // Define a new class called Node
//   constructor(value) {
//     // Constructor method for Node class, takes a value as an argument
//     this.value = value; // Assign the passed value to the Node's value property
//     this.children = []; // Initialize an empty array to hold the Node's children
//   }
// }

// class kTree {
//   // Define a new class called kTree
//   constructor(rootValue) {
//     // Constructor method for kTree class, takes a rootValue as an argument
//     this.root = new Node(rootValue); // Create a new Node with the passed rootValue and assign it to the root property
//   }

//   // Define a depthTraversal method which takes a root node as an argument
//   depthTraversal = (root) => {
//     // If the value of the root node is divisible by both 3 and 5, replace the value with the string 'FizzBuzz'
//     if (root.value % 3 === 0 && root.value % 5 === 0) {
//       root.value = "FizzBuzz";
//     }
//     // If the value of the root node is not divisible by 3 or 5, replace the value with its string representation
//     else if (root.value % 3 !== 0 && root.value % 5 !== 0) {
//       root.value = `${root.value}`;
//     }
//     // If the value of the root node is divisible by 3 but not by 5, replace the value with the string 'Fizz'
//     else if (root.value % 3 === 0 && root.value % 5 !== 0) {
//       root.value = "Fizz";
//     }
//     // If the value of the root node is divisible by 5 but not by 3, replace the value with the string 'Buzz'
//     else if (root.value % 5 === 0 && root.value % 3 !== 0) {
//       root.value = "Buzz";
//     }

//     // If the root node has children, call the depthTraversal method recursively on each child
//     if (root.children) {
//       root.children.forEach((child) => {
//         this.depthTraversal(child);
//       });
//     }
//   };

//   // Define a fizzBuzzTree method that returns the result of calling depthTraversal on the root of the tree
//   fizzBuzzTree = () => {
//     return this.depthTraversal(this.root);
//   };
// }

// let myKT = new kTree(3); // Create a new kTree with the root value 3

// // Add three children to the root node
// myKT.root.children = [new Node(12), new Node(15), new Node(29)];

// // Add three children to the first child of the root node
// myKT.root.children[0].children = [new Node(50), new Node(34), new Node(82)];

// // Add three children to the first child of the first child of the root node
// myKT.root.children[0].children[0].children = [
//   new Node(13),
//   new Node(64),
//   new Node(39),
// ];

// // Add three children to the second child of the root node
// myKT.root.children[1].children = [new Node(42), new Node(93), new Node(71)];

// // Add three children to the third child of the root node
// myKT.root.children[2].children = [new Node(50), new Node(35), new Node(70)];

// // Call the fizzBuzzTree method on myKT
// myKT.fizzBuzzTree();

// // Print out myKT to the console in a way that displays all depths
// console.dir(myKT, { depth: null });

// // Export the Node and kTree classes so they can be used in other modules
// module.exports = { Node, kTree };
