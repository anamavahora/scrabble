const board = document.getElementById('board');
const rack = document.getElementById('rack');
const score1El = document.getElementById('score1');
const score2El = document.getElementById('score2');
const currentPlayerEl = document.getElementById('currentPlayer');
const submitBtn = document.getElementById('submitWord');

const TILE_VALUES = {
  A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1,
  J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1,
  S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10
};

const letters = Object.keys(TILE_VALUES);
let currentPlayer = 1;
let scores = { 1: 0, 2: 0 };

function createBoard() {
  for (let i = 0; i < 15 * 15; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('dragover', e => e.preventDefault());
    cell.addEventListener('drop', handleDrop);
    board.appendChild(cell);
  }
}

function generateTiles() {
  rack.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const letter = letters[Math.floor(Math.random() * letters.length)];
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.textContent = letter;
    tile.draggable = true;
    tile.dataset.letter = letter;
    tile.addEventListener('dragstart', handleDragStart);
    tile.addEventListener('dragend', handleDragEnd);
    rack.appendChild(tile);
  }
}

function handleDragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.dataset.letter);
  e.target.classList.add('dragging');
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
}

function handleDrop(e) {
  const letter = e.dataTransfer.getData('text/plain');
  if (e.target.textContent === '') {
    e.target.textContent = letter;
    e.target.dataset.letter = letter;
    e.target.classList.a
