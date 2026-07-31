class NoogGame {
  constructor(mode = 'puzzle', levelIndex = 0) {
    this.mode = mode;
    this.levelIndex = levelIndex;
    this.boardSize = 6;
    this.board = Array(this.boardSize).fill(null).map(() => Array(this.boardSize).fill(null));
    this.score = 0;
    this.movesRemaining = 0;
    this.deck = [];
    this.deckIndex = 0;
    this.hand = []; // current active stone is hand[0]
    
    this.history = []; // stack of { board, score, movesRemaining, deckIndex, hand }
    this.redoStack = [];

    this.init();
  }

  init() {
    this.history = [];
    this.redoStack = [];
    
    if (this.mode === 'puzzle') {
      const level = window.levels ? window.levels[this.levelIndex] : null;
      if (level) {
        this.board = JSON.parse(JSON.stringify(level.board));
        this.deck = [...level.deck];
        this.movesRemaining = level.moves;
        this.deckIndex = 0;
        this.score = 0;
        this.fillHand();
      }
    } else {
      this.board = Array(this.boardSize).fill(null).map(() => Array(this.boardSize).fill(null));
      this.score = 0;
      this.movesRemaining = Infinity;
      this.deck = [];
      this.deckIndex = 0;
      
      this.hand = [this.getRandomStone(), this.getRandomStone(), this.getRandomStone()];
      this.spawnInitialEnemies();
    }
  }

  fillHand() {
    this.hand = [];
    for (let i = 0; i < 3; i++) {
      if (this.deckIndex + i < this.deck.length) {
        this.hand.push(this.deck[this.deckIndex + i]);
      } else {
        this.hand.push(null);
      }
    }
  }

  getRandomStone() {
    const r = Math.random();
    if (r < 0.5) return 1;
    if (r < 0.85) return 2;
    return 3;
  }

  spawnInitialEnemies() {
    for (let i = 0; i < 4; i++) {
      this.spawnRandomEnemy();
    }
  }

  spawnRandomEnemy() {
    const emptyCells = [];
    for (let r = 0; r < this.boardSize; r++) {
      for (let c = 0; c < this.boardSize; c++) {
        if (this.board[r][c] === null) {
          emptyCells.push({ r, c });
        }
      }
    }
    if (emptyCells.length > 0) {
      const idx = Math.floor(Math.random() * emptyCells.length);
      const cell = emptyCells[idx];
      const r = Math.random();
      let val = 1;
      if (r > 0.85) val = 3;
      else if (r > 0.5) val = 2;
      
      this.board[cell.r][cell.c] = { color: 'enemy', value: val };
    }
  }

  saveState() {
    const state = {
      board: JSON.parse(JSON.stringify(this.board)),
      score: this.score,
      movesRemaining: this.movesRemaining,
      deckIndex: this.deckIndex,
      hand: [...this.hand]
    };
    this.history.push(state);
    this.redoStack = [];
  }

  undo() {
    if (this.history.length === 0) return false;
    const current = {
      board: JSON.parse(JSON.stringify(this.board)),
      score: this.score,
      movesRemaining: this.movesRemaining,
      deckIndex: this.deckIndex,
      hand: [...this.hand]
    };
    this.redoStack.push(current);

    const prev = this.history.pop();
    this.board = prev.board;
    this.score = prev.score;
    this.movesRemaining = prev.movesRemaining;
    this.deckIndex = prev.deckIndex;
    this.hand = prev.hand;
    return true;
  }

  redo() {
    if (this.redoStack.length === 0) return false;
    const current = {
      board: JSON.parse(JSON.stringify(this.board)),
      score: this.score,
      movesRemaining: this.movesRemaining,
      deckIndex: this.deckIndex,
      hand: [...this.hand]
    };
    this.history.push(current);

    const next = this.redoStack.pop();
    this.board = next.board;
    this.score = next.score;
    this.movesRemaining = next.movesRemaining;
    this.deckIndex = next.deckIndex;
    this.hand = next.hand;
    return true;
  }

  // Check board for duplicate player values in same row/col
  checkDuplicates(board) {
    for (let r = 0; r < this.boardSize; r++) {
      const rowVals = new Set();
      for (let c = 0; c < this.boardSize; c++) {
        const stone = board[r][c];
        if (stone && stone.color === 'player') {
          if (rowVals.has(stone.value)) return true;
          rowVals.add(stone.value);
        }
      }
    }
    for (let c = 0; c < this.boardSize; c++) {
      const colVals = new Set();
      for (let r = 0; r < this.boardSize; r++) {
        const stone = board[r][c];
        if (stone && stone.color === 'player') {
          if (colVals.has(stone.value)) return true;
          colVals.add(stone.value);
        }
      }
    }
    return false;
  }

  // Simulated validation to allow temporary duplicates that resolve after merges/captures
  isValidMove(r, c, val) {
    if (r < 0 || r >= this.boardSize || c < 0 || c >= this.boardSize) return false;
    if (this.board[r][c] !== null) return false;
    
    // Simulate move on a copy
    const tempBoard = JSON.parse(JSON.stringify(this.board));
    tempBoard[r][c] = { color: 'player', value: val };
    
    this.resolveFlanking(r, c, tempBoard);
    this.resolveMerges(tempBoard);
    this.resolveCaptures(tempBoard);
    
    // Check if the final state has duplicates
    return !this.checkDuplicates(tempBoard);
  }

  placeStone(r, c) {
    if (this.hand.length === 0 || this.hand[0] === null) return { success: false, reason: "No stones in hand" };
    const val = this.hand[0];

    if (!this.isValidMove(r, c, val)) {
      return { success: false, reason: "Invalid move (Violates Sudoku constraint or cell is occupied)" };
    }

    this.saveState();

    this.board[r][c] = { color: 'player', value: val };
    
    const events = [];
    events.push({ type: 'place', r, c, value: val });

    const flippedStones = this.resolveFlanking(r, c, this.board);
    if (flippedStones.length > 0) {
      events.push({ type: 'flip', stones: flippedStones });
    }

    const mergeEvents = this.resolveMerges(this.board);
    if (mergeEvents.length > 0) {
      events.push(...mergeEvents);
    }

    const captureEvents = this.resolveCaptures(this.board);
    if (captureEvents.length > 0) {
      events.push(...captureEvents);
    }

    const clearEvents = this.resolveLineClears(this.board);
    if (clearEvents.length > 0) {
      events.push(...clearEvents);
    }

    if (this.mode === 'puzzle') {
      this.movesRemaining--;
      this.deckIndex++;
      this.fillHand();
    } else {
      this.hand.shift();
      this.hand.push(this.getRandomStone());

      if (this.deckIndex % 3 === 0 && this.deckIndex > 0) {
        this.spawnRandomEnemy();
        events.push({ type: 'spawn-enemy' });
      }
      this.deckIndex++;
    }

    return {
      success: true,
      events,
      win: this.checkWin(),
      gameOver: this.checkGameOver()
    };
  }

  resolveFlanking(r, c, board) {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1],  [1, 0],  [1, 1]
    ];
    const flipped = [];

    directions.forEach(([dr, dc]) => {
      let curR = r + dr;
      let curC = c + dc;
      const potentialFlips = [];

      while (
        curR >= 0 && curR < this.boardSize &&
        curC >= 0 && curC < this.boardSize
      ) {
        const stone = board[curR][curC];
        if (stone && stone.color === 'enemy') {
          potentialFlips.push({ r: curR, c: curC, value: stone.value });
        } else if (stone && stone.color === 'player') {
          potentialFlips.forEach(cell => {
            board[cell.r][cell.c].color = 'player';
            flipped.push(cell);
          });
          break;
        } else {
          break;
        }
        curR += dr;
        curC += dc;
      }
    });

    return flipped;
  }

  resolveMerges(board) {
    let didMerge = true;
    const mergeEvents = [];
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    while (didMerge) {
      didMerge = false;
      
      let candidate = null;
      for (let r = 0; r < this.boardSize; r++) {
        for (let c = 0; c < this.boardSize; c++) {
          const stone = board[r][c];
          if (stone && stone.color === 'player') {
            const V = stone.value;
            for (const [dr, dc] of dirs) {
              const nr = r + dr;
              const nc = c + dc;
              if (nr >= 0 && nr < this.boardSize && nc >= 0 && nc < this.boardSize) {
                const neighbor = board[nr][nc];
                if (neighbor && neighbor.color === 'player' && neighbor.value === V) {
                  candidate = { r1: r, c1: c, r2: nr, c2: nc, value: V };
                  break;
                }
              }
            }
          }
          if (candidate) break;
        }
        if (candidate) break;
      }

      if (candidate) {
        const { r1, c1, r2, c2, value } = candidate;
        const nextValue = value + 1;

        if (nextValue > 6) {
          board[r1][c1] = null;
          board[r2][c2] = null;
          mergeEvents.push({
            type: 'merge-clear',
            from: { r: r1, c: c1 },
            to: { r: r2, c: c2 },
            value: value
          });
          if (board === this.board) this.score += 200;
        } else {
          board[r2][c2] = { color: 'player', value: nextValue };
          board[r1][c1] = null;
          mergeEvents.push({
            type: 'merge',
            from: { r: r1, c: c1 },
            to: { r: r2, c: c2 },
            fromValue: value,
            toValue: nextValue
          });
          if (board === this.board) this.score += value * 10;
        }
        didMerge = true;
      }
    }
    return mergeEvents;
  }

  resolveCaptures(board) {
    const visited = Array(this.boardSize).fill(null).map(() => Array(this.boardSize).fill(false));
    const enemyGroups = [];

    for (let r = 0; r < this.boardSize; r++) {
      for (let c = 0; c < this.boardSize; c++) {
        if (board[r][c] && !visited[r][c]) {
          const group = this.findGroup(r, c, visited, board);
          if (group.color === 'enemy') {
            enemyGroups.push(group);
          }
        }
      }
    }

    const captureEvents = [];

    enemyGroups.forEach(group => {
      if (group.liberties.length === 0) {
        let canCapture = true;

        group.cells.forEach(({ r, c }) => {
          const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
          const enemyVal = board[r][c].value;
          
          dirs.forEach(([dr, dc]) => {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < this.boardSize && nc >= 0 && nc < this.boardSize) {
              const neighbor = board[nr][nc];
              if (neighbor && neighbor.color === 'player') {
                if (neighbor.value < enemyVal) {
                  canCapture = false;
                }
              }
            }
          });
        });

        if (canCapture) {
          group.cells.forEach(({ r, c }) => {
            board[r][c] = null;
          });
          captureEvents.push({
            type: 'capture-enemy',
            cells: group.cells,
            scoreGained: group.cells.length * 100
          });
          if (board === this.board) this.score += group.cells.length * 100;
        }
      }
    });

    const postVisited = Array(this.boardSize).fill(null).map(() => Array(this.boardSize).fill(false));
    const playerGroupsPost = [];
    for (let r = 0; r < this.boardSize; r++) {
      for (let c = 0; c < this.boardSize; c++) {
        if (board[r][c] && board[r][c].color === 'player' && !postVisited[r][c]) {
          playerGroupsPost.push(this.findGroup(r, c, postVisited, board));
        }
      }
    }

    playerGroupsPost.forEach(group => {
      if (group.liberties.length === 0) {
        group.cells.forEach(({ r, c }) => {
          board[r][c] = null;
        });
        captureEvents.push({
          type: 'capture-player-hazard',
          cells: group.cells
        });
      }
    });

    return captureEvents;
  }

  findGroup(startR, startC, visited, board) {
    const color = board[startR][startC].color;
    const cells = [];
    const libertiesSet = new Set();
    
    const queue = [{ r: startR, c: startC }];
    visited[startR][startC] = true;

    while (queue.length > 0) {
      const curr = queue.shift();
      cells.push(curr);

      const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
      dirs.forEach(([dr, dc]) => {
        const nr = curr.r + dr;
        const nc = curr.c + dc;

        if (nr >= 0 && nr < this.boardSize && nc >= 0 && nc < this.boardSize) {
          const neighbor = board[nr][nc];
          if (neighbor === null) {
            libertiesSet.add(`${nr},${nc}`);
          } else if (neighbor.color === color && !visited[nr][nc]) {
            visited[nr][nc] = true;
            queue.push({ r: nr, c: nc });
          }
        }
      });
    }

    const liberties = Array.from(libertiesSet).map(s => {
      const [r, c] = s.split(',').map(Number);
      return { r, c };
    });

    return { color, cells, liberties };
  }

  resolveLineClears(board) {
    const clearEvents = [];
    const rowsToClear = [];
    const colsToClear = [];

    for (let r = 0; r < this.boardSize; r++) {
      let isComplete = true;
      const values = new Set();
      for (let c = 0; c < this.boardSize; c++) {
        const stone = board[r][c];
        if (stone && stone.color === 'player') {
          values.add(stone.value);
        } else {
          isComplete = false;
          break;
        }
      }
      if (isComplete && values.size === this.boardSize) {
        rowsToClear.push(r);
      }
    }

    for (let c = 0; c < this.boardSize; c++) {
      let isComplete = true;
      const values = new Set();
      for (let r = 0; r < this.boardSize; r++) {
        const stone = board[r][c];
        if (stone && stone.color === 'player') {
          values.add(stone.value);
        } else {
          isComplete = false;
          break;
        }
      }
      if (isComplete && values.size === this.boardSize) {
        colsToClear.push(c);
      }
    }

    const cellsToClear = [];
    rowsToClear.forEach(r => {
      for (let c = 0; c < this.boardSize; c++) {
        cellsToClear.push({ r, c });
      }
    });
    colsToClear.forEach(c => {
      for (let r = 0; r < this.boardSize; r++) {
        if (!cellsToClear.some(cell => cell.r === r && cell.c === c)) {
          cellsToClear.push({ r, c });
        }
      }
    });

    if (cellsToClear.length > 0) {
      cellsToClear.forEach(({ r, c }) => {
        board[r][c] = null;
      });

      clearEvents.push({
        type: 'line-clear',
        rows: rowsToClear,
        cols: colsToClear,
        cells: cellsToClear,
        scoreGained: (rowsToClear.length + colsToClear.length) * 500
      });
      if (board === this.board) this.score += (rowsToClear.length + colsToClear.length) * 500;
    }

    return clearEvents;
  }

  checkWin() {
    if (this.mode !== 'puzzle') return false;

    for (let r = 0; r < this.boardSize; r++) {
      for (let c = 0; c < this.boardSize; c++) {
        if (this.board[r][c] && this.board[r][c].color === 'enemy') {
          return false;
        }
      }
    }
    return true;
  }

  hasLegalMoves() {
    if (this.hand.length === 0 || this.hand[0] === null) return false;
    const val = this.hand[0];

    for (let r = 0; r < this.boardSize; r++) {
      for (let c = 0; c < this.boardSize; c++) {
        if (this.board[r][c] === null && this.isValidMove(r, c, val)) {
          return true;
        }
      }
    }
    return false;
  }

  checkGameOver() {
    if (this.checkWin()) return false;

    if (this.mode === 'puzzle' && this.movesRemaining <= 0) {
      return true;
    }

    if (!this.hasLegalMoves()) {
      return true;
    }

    return false;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = NoogGame;
} else {
  window.NoogGame = NoogGame;
}
