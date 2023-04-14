const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootOfTree = null;
  }

  root() {
    return this.rootOfTree;
  }

  add(data) {
    this.rootOfTree = addWithin(this.rootOfTree, data);
    
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      
      if (node.data === data) {
        return node;
      }
      
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      
      return node;
    }
  }

  has(data) {
    return searchWithin(this.rootOfTree, data);
    
    function searchWithin(node, data) {
      if (!node) {
        return false;
      }
      
      if (node.data === data) {
        return true;
      }
      
      if (node.data > data) {
        return searchWithin(node.left, data);
      } else {
        return searchWithin(node.right, data);
      }
    }
  }

  find(data) {
    return findWithin(this.rootOfTree, data);

    function findWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        return findWithin(node.left, data);
      } else {
        return findWithin(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootOfTree = removeWithin(this.rootOfTree, data);

    function removeWithin(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeWithin(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeWithin(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          return node.right;
        }

        if (!node.right) {
          return node.left;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;

        node.left = removeWithin(node.left, maxFromLeft.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootOfTree) {
      return null;
    }

    let node = this.rootOfTree;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootOfTree) {
      return null;
    }

    let node = this.rootOfTree;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
