# Noog: The Sudo-Flank Puzzle

Noog is an original, single-player logic board game that fuses mechanics from **Go**, **Othello (Reversi)**, and **Sudoku**. 

Designed with a clean, relaxing **Zen Board Game** aesthetic, Noog features smooth radial gradients representing polished white and black river stones on a warm wood-grain board. The experience is accompanied by gentle procedural sound synthesis (wind chimes, water droplets, and singing bowls) generated directly in-browser using the Web Audio API.

Noog is built as a fully responsive **Progressive Web App (PWA)**, making it installable on mobile devices with offline capabilities.

---

## Gameplay & Rules

Noog is played on a **6x6 grid** with two colors of pebbles: **White stones** (player) and **Dark stones** (enemies). Each stone has a strength value from **1 to 6**.

### 1. Placement (Sudoku Constraint)
You place white stones from your queue onto empty cells.
- **Constraint**: You cannot make a move that leaves the board with duplicate values of player stones in the same row or column. (Temporary duplicates are allowed during your turn if they merge or clear away by the end of the move).

### 2. Conversion (Othello Flanking)
Placing a white stone that sandwiches a line of dark stones between itself and another white stone (in any of the 8 directions) **flanks** them.
- Flanked dark stones **flip** to white player stones, retaining their current numerical values.

### 3. Merging (2048/Merge Style)
Adjacent white stones of the same value `V` automatically **merge** into a single stone of value `V + 1`.
- Merges can cascade recursively if the new value touches another matching stone.
- Merging two level **6** stones clears both from the board, freeing up vital space.

### 4. Capture (Go Liberties)
Connected stones of the same color form a group and share **liberties** (adjacent empty spaces).
- **Capturing Enemies**: A dark group is captured and cleared from the board if its liberties drop to **0**, *provided* that every adjacent white stone has a value $\ge$ the dark stone it touches.
- **Player Hazard**: If a group of your white stones is reduced to **0** liberties (fully surrounded by dark stones or board borders), it is cleared as a penalty.

### 5. Line Clears
If a row or column contains exactly 6 white stones of values **1, 2, 3, 4, 5, and 6** (no duplicates, fully filled), the entire line is cleared, awarding bonus points and opening up the board.

---

## Game Modes

*   **Puzzle Mode**: Work through 8 pre-designed levels (from basic tutorials to the advanced "High Citadel" fortress) to capture all dark stones within a limited number of moves.
*   **Zen Mode**: Play an infinite survival match. Dark stones periodically spawn on the board; survive and score points by merging, capturing, and clearing rows before the grid locks up.

---

## Local Development

Since Noog is a static web application built with vanilla HTML, CSS, and JavaScript, it requires no compiling or complex build steps.

1. Clone this repository.
2. Spin up any local web server in the repository root:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx live-server
   ```
3. Open `http://localhost:8000` in your web browser.
4. To run the automated engine test suite:
   ```bash
   node test/game_engine_tests.js
   ```

---

## Deploying to GitHub Pages & CI/CD Automation

This repository includes a **GitHub Actions Workflow** (`.github/workflows/deploy.yml`) that automates deployments and resolves cache invalidation:

1. **Auto-Deployment**: Every push to the `main` branch automatically triggers the deployment of the static assets to GitHub Pages.
2. **Auto-Versioned Service Worker Cache**: During the deployment run, the workflow injects the unique GitHub Actions build run number (`github.run_number`) into `sw.js` (replacing `CACHE_NAME`). This ensures client device browsers detect the change and pull fresh assets immediately, bypassing stale local cache states.

### Setup Instructions on GitHub:
1. Push this repository to GitHub.
2. Navigate to your repository's **Settings** tab.
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment** -> **Source**, select **GitHub Actions** from the dropdown list.
5. Once selected, your pushes will build and host the game automatically at `https://<your-username>.github.io/<your-repo-name>/`.


---

## Technology Stack

- **Core**: Vanilla HTML5, CSS3, and JavaScript (ES6).
- **Audio**: Web Audio API (procedural synthesizers, zero external assets).
- **PWA**: Web App Manifest (`manifest.json`) and Service Worker (`sw.js`) for offline loading and orientation locking.
- **Security**: Embedded strict Content Security Policy (CSP).

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
