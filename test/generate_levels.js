const fs = require('fs');
const path = require('path');

// Helper to generate empty 6x6 board
function createEmptyBoard() {
  return Array(6).fill(null).map(() => Array(6).fill(null));
}

// Names of Zen-themed levels to make them feel organic and peaceful
const zenNouns = [
  "Garden", "Stone", "Stream", "Pebble", "Bridge", "Path", "Gate", "Cloud",
  "Shadow", "Lotus", "Bamboo", "Mountain", "Waterfall", "River", "Ripple",
  "Valley", "Breeze", "Autumn", "Spring", "Winter", "Summer", "Morning",
  "Temple", "Shrine", "Forest", "Willow", "Lantern", "Summit", "Canyon",
  "Moss", "Fern", "Sprout", "Pine", "Maple", "Sakura", "Bonsai", "Sand",
  "Rake", "Pond", "Cranes", "Heron", "Moon", "Sun", "Dawn", "Dusk"
];

const zenAdjectives = [
  "Silent", "Quiet", "Gentle", "Flowing", "Still", "Calm", "Soft", "Restful",
  "Serene", "Peaceful", "Tranquil", "Hidden", "Ancient", "Winding", "Deep",
  "Mist", "Golden", "Silver", "Jade", "Earthy", "Wild", "Solitary", "Reflected",
  "Floating", "Drifting", "Whispering", "Endless", "Shaded", "Sunlit", "Dewy"
];

function generateLevelName(id) {
  if (id === 1) return "1. The Conversion";
  if (id === 2) return "2. Liberty Trap";
  if (id === 3) return "3. Power Siege";
  if (id === 4) return "4. Sudoku Barriers";
  if (id === 5) return "5. Double Enclosure";
  if (id === 6) return "6. The Wall";
  if (id === 7) return "7. The High Citadel";
  if (id === 8) return "8. Grand Gridlock";
  
  const adj = zenAdjectives[(id * 7) % zenAdjectives.length];
  const noun = zenNouns[(id * 13) % zenNouns.length];
  return `${id}. The ${adj} ${noun}`;
}

// Create levels array
const levels = [];

// Copy the first 8 custom levels
levels.push(
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
);

// Generate levels 9 to 55 programmatically
for (let id = 9; id <= 55; id++) {
  const name = generateLevelName(id);
  const board = createEmptyBoard();
  const deck = [];
  
  // Decide layout pattern and difficulty based on level ID
  let diff = 'easy';
  if (id > 35) diff = 'hard';
  else if (id > 20) diff = 'medium';
  
  let moves = 5;
  let description = "";

  if (diff === 'easy') {
    // 2-3 enemies, levels 1-2. Decks have plenty of 1s and 2s.
    moves = 5 + (id % 3);
    const coords = [
      { r: (id % 3) + 1, c: (id % 2) + 1 },
      { r: (id % 2) + 3, c: (id % 3) + 2 }
    ];
    coords.forEach((coord, i) => {
      board[coord.r][coord.c] = { color: 'enemy', value: (i % 2 === 0) ? 1 : 2 };
    });
    // Build deck
    for (let k = 0; k < moves; k++) {
      deck.push((k % 3 === 0) ? 2 : 1);
    }
    description = `Isolate the terracotta stones. Merge your white river stones to match the strength of the Level ${id % 2 === 0 ? 2 : 1} defenses.`;
  } 
  else if (diff === 'medium') {
    // 3-4 enemies, levels 1-3.
    moves = 6 + (id % 4);
    // Patterns: diagonal or square structures
    if (id % 2 === 0) {
      // Diagonal line of 3 enemies
      for (let k = 0; k < 3; k++) {
        board[k + 1][k + 1] = { color: 'enemy', value: (k === 1) ? 3 : 2 };
      }
    } else {
      // 4 corners of a 3x3 square
      board[1][1] = { color: 'enemy', value: 2 };
      board[1][3] = { color: 'enemy', value: 1 };
      board[3][1] = { color: 'enemy', value: 3 };
      board[3][3] = { color: 'enemy', value: 2 };
    }
    // Build deck with a mix of 1s, 2s, and 3s
    for (let k = 0; k < moves; k++) {
      const val = (k % 4 === 0) ? 3 : (k % 2 === 0) ? 2 : 1;
      deck.push(val);
    }
    description = `A delicate configuration of stones. Use the adjacent merge rules to clear path barriers and surround the central obstacles.`;
  } 
  else {
    // Hard / Expert
    moves = 8 + (id % 5);
    // Large patterns: crosses, rings, walls
    if (id % 3 === 0) {
      // A Ring in the center
      board[2][2] = { color: 'enemy', value: 2 };
      board[2][3] = { color: 'enemy', value: 3 };
      board[3][2] = { color: 'enemy', value: 3 };
      board[3][3] = { color: 'enemy', value: 4 };
    } else if (id % 3 === 1) {
      // Horizontal Wall
      for (let c = 1; c <= 4; c++) {
        board[3][c] = { color: 'enemy', value: (c === 2 || c === 3) ? 3 : 2 };
      }
    } else {
      // Checkerboard
      board[1][2] = { color: 'enemy', value: 3 };
      board[2][1] = { color: 'enemy', value: 2 };
      board[2][3] = { color: 'enemy', value: 4 };
      board[3][2] = { color: 'enemy', value: 3 };
    }
    // High level decks
    for (let k = 0; k < moves; k++) {
      const val = (k % 5 === 0) ? 4 : (k % 3 === 0) ? 3 : (k % 2 === 0) ? 2 : 1;
      deck.push(val);
    }
    description = `An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.`;
  }

  levels.push({
    id,
    name,
    description,
    moves,
    board,
    deck
  });
}

// Format levels to JS file format
const fileContent = `const levels = ${JSON.stringify(levels, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = levels;
} else {
  window.levels = levels;
}
`;

fs.writeFileSync(path.join(__dirname, '../src/levels.js'), fileContent, 'utf-8');
console.log("Successfully generated 55 levels in src/levels.js!");
