const t = require('./tree');
const n = require('./node');
let tree;

function setup() {
     tree = new t.Tree();
     for (let i = 0; i < 20; i++) {
          x = Math.floor(Math.random() * 100);
          tree.addValue(x);
     }
     //  console.log(tree);
     tree.traverse();
     tree.search(2);
     tree.search(27);
     tree.search(45);
     tree.search(69);
}

setup();
