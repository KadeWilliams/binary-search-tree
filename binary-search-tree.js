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

  insert(value, root = this.root) {
    if (root == null) {
      return (root = new Node(value));
    }

    if (root.data < value) {
      root.rightPart = this.insert(value, root.rightPart);
    } else {
      root.leftPart = this.insert(value, root.leftPart);
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

  delete(value, root = this.root) {
    if (root == null) {
      return root;
    }

    if (root.data > value) {
      root.leftPart = this.delete(value, root.leftPart);
    } else if (root.data < value) {
      root.rightPart = this.delete(value, root.rightPart);
    } else {
      if (root.leftPart == null) {
        return root.rightPart;
      } else if (root.rightPart == null) {
        return root.leftPart;
      }
      root.data = minValue(root);
      root.rightPart = this.delete(root.rightPart, root.data);
    }
    return root;
  }

  levelOrder(accumulator) {
    
  } 

  height(root) {
    if (root == null) {
      return 0;
    } else {

      let left = this.height(root.leftPart);
      let right = this.height(root.rightPart);

      if (left > right) {
        return right + 1;
      } else {
        return left + 1;
      }
    }
  }
}

function minValue(root) {
  let min = root.data;
  while (root != null) {
    min = root.data;
    root = root.leftPart;
  }
  return min;
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

function accumulator(element) {
  alert(element);
}

export { Tree };
