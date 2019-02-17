function Node(val) {
     this.value = val;
     this.left = null;
     this.right = null;
}

Node.prototype.search = function(val) {
     if (this.value == val) {
          return this;
     } else if (this.value > val && this.left != null) {
          return this.left.search(val);
     } else if (this.value < val && this.right != null) {
          return this.right.search(val);
     }
     return null;
};

Node.prototype.visit = function() {
     if (this.left != null) {
          this.left.visit();
     }
     console.log(this.value);
     if (this.right != null) {
          this.right.visit();
     }
};

Node.prototype.addNode = function(nodeToAdd) {
     //  console.log(`nodeToAdd:${nodeToAdd.value} vs this:${this.value}`);
     if (nodeToAdd.value < this.value) {
          //   console.log(`n:${nodeToAdd.value} < this:${this.value}`);
          if (this.left === null) {
               //    console.log(`Adding ${nodeToAdd.value} to the left`);
               this.left = nodeToAdd;
          } else {
               this.left.addNode(nodeToAdd);
          }
     } else if (nodeToAdd.value > this.value) {
          //   console.log(`nodeToAdd:${nodeToAdd.value} > this:${this.value}`);
          if (this.right === null) {
               //    console.log(`Adding ${nodeToAdd.value} to the right`);
               this.right = nodeToAdd;
          } else {
               this.right.addNode(nodeToAdd);
          }
     }
};

module.exports = {
     Node
};
