/*
  Filename: ComplexCode.js

  Description: This code demonstrates a complex and elaborate implementation of a search algorithm
  using a binary search tree data structure. The search algorithm searches for a target value in
  a sorted array.

  Note: This is a simplified version of the actual complex code. The purpose is to showcase the
  structure and complexity of a sophisticated codebase.

  Author: AI Developer
*/

// BST Node definition
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree definition
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the BST
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Utility function to insert a node recursively
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Search for a value in the BST
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Utility function to search for a node recursively
  searchNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }
}

// Testing the Binary Search Tree implementation
const bst = new BinarySearchTree();

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Insert elements from the sorted array into the BST
sortedArray.forEach((number) => {
  bst.insert(number);
});

const targetValue = 12;
const isValuePresent = bst.search(targetValue);

console.log(`Is ${targetValue} present in the BST? ${isValuePresent ? 'Yes' : 'No'}`);