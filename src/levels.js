const levels = [
  {
    id: 1,
    name: "1. The Conversion",
    description: "Welcome to Noog. Place a white stone to sandwich the dark enemy stone between two white stones. This is flanking; it converts the enemy to your side!",
    moves: 3,
    board: [
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, { color: 'player', value: 1 }, { color: 'enemy', value: 1 }, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null]
    ],
    deck: [1, 2, 1]
  },
  {
    id: 2,
    name: "2. Liberty Trap",
    description: "Stones connect and share liberties (empty adjacent spaces). Trap the dark enemy in the corner by placing white stones on all of its adjacent spaces. (0 liberties = captured!)",
    moves: 2,
    board: [
      [{ color: 'enemy', value: 1 }, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null]
    ],
    deck: [1, 1, 1]
  },
  {
    id: 3,
    name: "3. Power Siege",
    description: "An enemy can only be captured if all adjacent player stones are of equal or higher strength. Merge your white 1s by placing them adjacent to each other to form a 2, then surround the Level 2 enemy!",
    moves: 4,
    board: [
      [null, null, null, null, null, null],
      [null, { color: 'enemy', value: 2 }, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null]
    ],
    deck: [1, 1, 1, 1]
  },
  {
    id: 4,
    name: "4. Sudoku Barriers",
    description: "Remember: You cannot place a white stone of value V in a row or column that already contains a white V. Use merging or smart placement to get past this lock!",
    moves: 4,
    board: [
      [null, null, null, null, null, null],
      [null, { color: 'player', value: 1 }, { color: 'enemy', value: 2 }, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null]
    ],
    deck: [1, 2, 1, 2]
  },
  {
    id: 5,
    name: "5. Double Enclosure",
    description: "Two enemy outposts block the grid. You need to flank or surround both. Plan your placements so that your numbers don't conflict in rows/columns.",
    moves: 6,
    board: [
      [null, null, null, null, null, null],
      [null, { color: 'enemy', value: 1 }, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, { color: 'enemy', value: 2 }, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null]
    ],
    deck: [1, 1, 2, 1, 2, 1]
  },
  {
    id: 6,
    name: "6. The Wall",
    description: "A defensive wall of dark level 1 and 2 stones blocking the grid. Flank them to convert the wall, or surround them to clear space.",
    moves: 7,
    board: [
      [null, null, null, null, null, null],
      [null, { color: 'enemy', value: 1 }, { color: 'enemy', value: 2 }, { color: 'enemy', value: 1 }, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null]
    ],
    deck: [1, 2, 1, 2, 1, 1, 2]
  },
  {
    id: 7,
    name: "7. The High Citadel",
    description: "A Level 3 fortress is defended by Level 1 and 2 guards. You will need to build high-level stones (3 or higher) by merging to successfully capture it.",
    moves: 9,
    board: [
      [null, null, null, null, null, null],
      [null, { color: 'enemy', value: 1 }, { color: 'enemy', value: 3 }, { color: 'enemy', value: 1 }, null, null],
      [null, null, { color: 'enemy', value: 2 }, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null]
    ],
    deck: [1, 1, 2, 1, 2, 3, 1, 1, 2]
  },
  {
    id: 8,
    name: "8. Grand Gridlock",
    description: "The final puzzle challenge. You have a very limited set of moves and a crowded board. Clear a line (values 1 to 6 in a row/col) to free up space and claim victory!",
    moves: 8,
    board: [
      [null, null, null, null, null, null],
      [{ color: 'player', value: 1 }, { color: 'player', value: 2 }, { color: 'player', value: 3 }, { color: 'player', value: 4 }, { color: 'enemy', value: 1 }, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null]
    ],
    deck: [5, 6, 1, 2, 1, 2, 3, 4]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = levels;
} else {
  window.levels = levels;
}
