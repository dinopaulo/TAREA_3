const dominoPieces = ['0-0', '0-1', '1-1', '0-2', '1-2', '2-2'];
const dominoContainer = document.getElementById('domino-pieces');

dominoPieces.forEach(piece => {
  const pieceDiv = document.createElement('div');
  pieceDiv.className = 'domino-piece';
  pieceDiv.textContent = piece;
  dominoContainer.appendChild(pieceDiv);
});
