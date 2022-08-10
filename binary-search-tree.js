// import "./style.css";

class Node {
  constructor(data) {
    this.data = data;
    this.leftPart = null;
    this.rightPart = null;
  }
}

class Tree {
  constructor(array) {
    this.array = [...removeDuplicates(mergeSort(array))];
    this.root = this.buildTree(this.array, 0, this.array.length - 1);
  }

  buildTree(array, start, end) {
    if (start > end) return null;
    let mid = parseInt((start + end) / 2);

    let root = new Node(array[mid]);

    root.leftPart = this.buildTree(array, start, mid - 1);
    root.rightPart = this.buildTree(array, mid + 1, end);

    return root;
  }

  insert(root, value) {
    if (root == null) {
      return (root = new Node(value));
    }

    if (root.data < value) {
      root.rightPart = this.insert(root.rightPart, value);
    } else {
      root.leftPart = this.insert(root.leftPart, value);
    }

    return root;
  }

  traverse(root) {
    if (root.leftPart !== null) {
      this.traverse(root.leftPart);
    }
    console.log(root.data);
    if (root.rightPart !== null) {
      this.traverse(root.rightPart);
    }
  }

  find(value, root = this.root) {
    if (root == null) return false;

    if (root.data == value) return root;

    if (root.data > value) {
      return this.find(value, root.leftPart);
    } else if (root.data < value) {
      return this.find(value, root.rightPart);
    }

    return root;
  }

  delete(value) {}
}

function mergeSort(array) {
  if (array.length == 1) return array;

  const newArray = [];

  const leftPart = mergeSort(array.slice(0, array.length / 2));
  const rightPart = mergeSort(array.slice(array.length / 2));

  while (leftPart.length && rightPart.length) {
    if (leftPart[0] < rightPart[0]) {
      newArray.push(leftPart.shift());
    } else {
      newArray.push(rightPart.shift());
    }
  }

  return [...newArray, ...leftPart, ...rightPart];
}

function removeDuplicates(array) {
  return [...new Set(array)];
}

const newTree = new Tree([
  2, 5, 6, 235, 5, 236, 23, 62, 52, 345, 21, 35, 45, 346,
]);

// console.log(newTree.insert(newTree.root, 1));

// newTree.traverse(newTree.root);

// newTree.find(newTree.root, 5);
newTree.find(5);

// console.log(newTree.root);

module.exports = Tree;
