const n = require('./node');

function Tree() {
     this.root = null;
}

Tree.prototype.traverse = function() {
     this.root.visit();
};

Tree.prototype.search = function(val) {
     let found = this.root.search(val);
     // return found;
     if (found != null) {
          console.log(`${found.value} - found`);
     } else {
          console.log(`${val} - not found`);
     }
};

Tree.prototype.addValue = function(val) {
     let targetNode = new n.Node(val);
     if (this.root === null) {
          this.root = targetNode;
     } else {
          this.root.addNode(targetNode);
     }
};

module.exports = {
     Tree
};
