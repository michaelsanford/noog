// Simple node test runner to verify NoogGame rules
const NoogGame = require('../src/game');

// Mock window.levels for NoogGame
global.window = {};
const levels = require('../src/levels');
global.window.levels = levels;

function assert(condition, message) {
  if (!condition) {
    throw new Error("Assertion Failed: " + message);
  }
}

function runTests() {
  console.log("=== Running Noog Game Engine Tests ===");

  testSudokuConstraints();
  testOthelloFlanking();
  testMergeCascades();
  testGoCaptures();
  testLineClears();

  console.log("=== All Tests Passed Successfully! ===");
}

function testSudokuConstraints() {
  console.log("Testing Sudoku Constraints...");
  const game = new NoogGame('puzzle', 0);
  
  // Set up specific state
  game.board = Array(6).fill(null).map(() => Array(6).fill(null));
  game.board[0][0] = { color: 'player', value: 2 };
  
  // Verify row conflict
  assert(!game.isValidMove(0, 3, 2), "Should block placement of duplicate value 2 in row 0");
  assert(game.isValidMove(0, 3, 3), "Should allow placement of non-duplicate value 3 in row 0");
  
  // Verify col conflict
  assert(!game.isValidMove(4, 0, 2), "Should block placement of duplicate value 2 in column 0");
  assert(game.isValidMove(4, 0, 4), "Should allow placement of non-duplicate value 4 in column 0");

  // Verify can place on top of an enemy stone
  game.board[1][1] = { color: 'enemy', value: 1 };
  assert(!game.isValidMove(1, 1, 3), "Should not allow placing on an occupied cell");

  console.log("  Sudoku constraints pass.");
}

function testOthelloFlanking() {
  console.log("Testing Othello Flanking...");
  const game = new NoogGame('puzzle', 0);
  game.board = Array(6).fill(null).map(() => Array(6).fill(null));
  
  // Set up sandwich: Player(2) -> Enemy(5) -> Enemy(3) -> [Empty]
  game.board[2][1] = { color: 'player', value: 2 };
  game.board[2][2] = { color: 'enemy', value: 5 };
  game.board[2][3] = { color: 'enemy', value: 3 };
  
  game.hand = [1, 1, 1];
  
  // Place a 1 at (2, 4). This should sandwich row 2 from col 1 to 4.
  const result = game.placeStone(2, 4);
  assert(result.success, "Placement should succeed");
  
  // Verify flanking converted the enemies
  assert(game.board[2][2].color === 'player', "Enemy at (2,2) should flip to player");
  assert(game.board[2][2].value === 5, "Flipped stone should keep original value (5)");
  assert(game.board[2][3].color === 'player', "Enemy at (2,3) should flip to player");
  assert(game.board[2][3].value === 3, "Flipped stone should keep original value (3)");

  console.log("  Othello flanking pass.");
}

function testMergeCascades() {
  console.log("Testing Merge Cascades...");
  const game = new NoogGame('puzzle', 0);
  game.board = Array(6).fill(null).map(() => Array(6).fill(null));
  
  // Set up merge chain
  // Neighbor of (2,2) is (2,3) which has a Player(1).
  // Neighbor of (2,3) is (2,4) which has a Player(2).
  game.board[2][3] = { color: 'player', value: 1 };
  game.board[2][4] = { color: 'player', value: 2 };
  
  game.hand = [1, 1, 1];
  
  // Place 1 at (2,2)
  // 1 at (2,2) merges with 1 at (2,3) -> becomes 2 at (2,3)
  // 2 at (2,3) merges with 2 at (2,4) -> becomes 3 at (2,4)
  const result = game.placeStone(2, 2);
  assert(result.success, "Placement should succeed");
  
  assert(game.board[2][2] === null, "Initial placement cell should end up empty");
  assert(game.board[2][3] === null, "Intermediate merge cell should end up empty");
  assert(game.board[2][4].color === 'player' && game.board[2][4].value === 3, "Final cascade cell should hold a Player(3)");

  // Test merging two 6s clears them
  game.board = Array(6).fill(null).map(() => Array(6).fill(null));
  game.board[0][1] = { color: 'player', value: 6 };
  game.hand = [6, 1, 1];
  const result6 = game.placeStone(0, 0);
  assert(result6.success, "Placement of 6 should succeed");
  assert(game.board[0][0] === null, "Merged 6 at (0,0) should be cleared");
  assert(game.board[0][1] === null, "Merged 6 at (0,1) should be cleared");

  console.log("  Merge cascades pass.");
}

function testGoCaptures() {
  console.log("Testing Go Captures...");
  const game = new NoogGame('puzzle', 0);
  
  // Case A: Capture successful (strength match)
  // Place an Enemy(2) at (0,0).
  // Surround it with Player(2) at (0,1) and Player(2) at (1,0).
  game.board = Array(6).fill(null).map(() => Array(6).fill(null));
  game.board[0][0] = { color: 'enemy', value: 2 };
  game.board[0][1] = { color: 'player', value: 2 };
  
  game.hand = [2, 1, 1];
  // Place Player(2) at (1,0) to seal the last liberty (corner only has 2 liberties)
  const resA = game.placeStone(1, 0);
  assert(resA.success, "Move A should succeed: " + JSON.stringify(resA));
  
  // Verify enemy is captured (cleared)
  assert(game.board[0][0] === null, "Enemy should be captured and cleared");

  // Case B: Capture failed (strength too low)
  // Place an Enemy(3) at (0,0).
  // Surround it with Player(2) at (0,1) and Player(2) at (1,0).
  // Player(2) is weaker than Enemy(3), so capture should FAIL and enemy remains.
  game.board = Array(6).fill(null).map(() => Array(6).fill(null));
  game.board[0][0] = { color: 'enemy', value: 3 };
  game.board[0][1] = { color: 'player', value: 2 };
  
  game.hand = [2, 1, 1];
  const resB = game.placeStone(1, 0);
  assert(resB.success, "Move B should succeed: " + JSON.stringify(resB));
  assert(game.board[0][0] !== null, "Enemy should NOT be captured because surrounding player stones are only level 2 (weaker than 3)");

  // Case C: Player Hazard Capture
  // Surround Player(1) at (0,0) by setting up Enemy(1) at (0,1) and (1,0).
  // If player at (0,0) has 0 liberties, it should be cleared from the board as a hazard.
  game.board = Array(6).fill(null).map(() => Array(6).fill(null));
  game.board[0][0] = { color: 'player', value: 1 };
  game.board[0][1] = { color: 'enemy', value: 1 };
  game.board[1][0] = { color: 'enemy', value: 1 };
  
  game.hand = [2, 1, 1];
  // Place a stone at (5,5) to trigger turn resolution and capture checks
  const resC = game.placeStone(5, 5);
  assert(resC.success, "Trigger placement should succeed");
  assert(game.board[0][0] === null, "Player stone at (0,0) should be captured as a hazard due to 0 liberties");

  console.log("  Go captures pass.");
}

function testLineClears() {
  console.log("Testing Sudoku Line Clears...");
  const game = new NoogGame('puzzle', 0);
  game.board = Array(6).fill(null).map(() => Array(6).fill(null));
  
  // Fill row 0 with Player stones: [1, 2, 3, 4, 5, Empty]
  game.board[0][0] = { color: 'player', value: 1 };
  game.board[0][1] = { color: 'player', value: 2 };
  game.board[0][2] = { color: 'player', value: 3 };
  game.board[0][3] = { color: 'player', value: 4 };
  game.board[0][4] = { color: 'player', value: 5 };
  
  game.hand = [6, 1, 1];
  // Place 6 at (0,5). This should complete row 0 with unique 1-6.
  const result = game.placeStone(0, 5);
  assert(result.success, "Placement of 6 should succeed");
  
  // Verify row 0 is cleared
  for (let c = 0; c < 6; c++) {
    assert(game.board[0][c] === null, `Cell (0,${c}) should be cleared`);
  }

  console.log("  Sudoku line clears pass.");
}

runTests();
