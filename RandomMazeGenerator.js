Here's a complex and elaborate JavaScript code that generates a random maze using the Prim's algorithm:

```javascript
// Filename: RandomMazeGenerator.js

// Define the Maze class
class Maze {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = Array(height).fill(null).map(() => Array(width).fill(true));
  }

  // Generate a random maze using Prim's algorithm
  generateMaze() {
    const walls = [];

    // Helper function to get neighbors of a particular cell
    const getNeighbors = (x, y) => {
      const neighbors = [];
      if (y > 1) neighbors.push([x, y - 2]);
      if (x > 1) neighbors.push([x - 2, y]);
      if (y < this.height - 2) neighbors.push([x, y + 2]);
      if (x < this.width - 2) neighbors.push([x + 2, y]);
      return neighbors;
    };

    // Helper function to check if a given cell is a valid wall (within bounds and untouched)
    const isValidWall = (x, y) => {
      return x > 0 && x < this.width && y > 0 && y < this.height && this.grid[y][x];
    };

    // Start with a random cell
    const startX = Math.floor(Math.random() * (this.width - 1) / 2) * 2 + 1;
    const startY = Math.floor(Math.random() * (this.height - 1) / 2) * 2 + 1;

    this.grid[startY][startX] = false;

    // Add neighboring walls to the list
    getNeighbors(startX, startY).forEach(([nx, ny]) => {
      if (isValidWall(nx, ny)) {
        walls.push([nx, ny]);
        this.grid[ny][nx] = false;
      }
    });

    while (walls.length > 0) {
      const randomIndex = Math.floor(Math.random() * walls.length);
      const [wallX, wallY] = walls[randomIndex];

      const validNeighbors = getNeighbors(wallX, wallY).filter(([nx, ny]) => isValidWall(nx, ny));

      if (validNeighbors.length <= 1) {
        walls.splice(randomIndex, 1);
        continue;
      }

      const [nx, ny] = validNeighbors[Math.floor(Math.random() * validNeighbors.length)];
      this.grid[wallY][wallX] = false;
      this.grid[ny][nx] = false;

      // Add neighboring walls of the new cell
      getNeighbors(nx, ny).forEach(([cx, cy]) => {
        if (isValidWall(cx, cy)) {
          walls.push([cx, cy]);
          this.grid[cy][cx] = false;
        }
      });
    }
  }

  // Render the maze to the console
  render() {
    let output = '';
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        output += this.grid[y][x] ? '██' : '  ';
      }
      output += '\n';
    }
    console.log(output);
  }
}

// Create a new maze of size 21x21
const maze = new Maze(21, 21);

// Generate and render the maze
maze.generateMaze();
maze.render();
```

This code generates a random maze using the Prim's algorithm and renders it to the console. The maze is represented as a grid of cells, where each cell can be either a wall (represented by '██') or a path (represented by empty space). The implementation includes helper functions, a class for the maze, and methods to generate and render the maze.