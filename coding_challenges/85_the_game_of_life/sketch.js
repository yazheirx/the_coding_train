function make2DArray(cols, rows) {
	let arr = new Array(cols)
	for (let i = 0; i < arr.length; i++) {
	  arr[i] = new Array(rows);
	}
	return arr;
  }
  
  let grid;
  let cols;
  let rows;
  let resolution = 5; //going lower than 5 seems to overload the browser
  
  function setup() {
	createCanvas(800, 800);
	cols = width / resolution;
	rows = height / resolution;
  
	grid = make2DArray(cols, rows);
	grid[0][0] = 0;
	for (let i = 0; i < cols; i++) {
	  for (let j = 0; j < rows; j++) {
		grid[i][j] = floor(random(2));
	  }
	}
	//  console.table(grid);
  }
  
  function draw() {
	//frameRate(1);
	background(0);
	for (let i = 0; i < cols; i++) {
	  for (let j = 0; j < rows; j++) {
		let x = i * resolution;
		let y = j * resolution;
		if (grid[i][j] == 1) {
		  stroke(0);
		  fill(0, 255, 0);
		  //rect(x, y, resolution, resolution);
		  ellipse(x + resolution / 2, y + resolution / 2, resolution, resolution);
		}
	  }
	  let next = make2DArray(cols, rows);
	  for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
		  let neighbors = countNeighbors(grid, i, j);
		  let state = grid[i][j];
		  if (state == 0 && neighbors == 3) {
			next[i][j] = 1;
		  } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
			next[i][j] = 0;
		  } else {
			next[i][j] = grid[i][j];
		  }
		}
	  }
	  grid = next;
	  //console.log(countNeighbors(grid, 1,1));
	}
  }
  
  function countNeighbors(grid, x, y) {
	let sum = 0;
	for (let i = -1; i < 2; i++) {
	  for (let j = -1; j < 2; j++) {
		let col = (x + i + cols) % cols;
		let row = (y + j + rows) % rows;
		sum += grid[col][row];
	  }
	}
	sum -= grid[x][y];
	return sum;
  }
