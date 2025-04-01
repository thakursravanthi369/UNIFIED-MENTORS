const board = document.getElementById("board");
const status = document.querySelector(".status");
const resetButton = document.getElementById("reset");
let currentPlayer = "X";
let gameBoard = Array(9).fill(null);

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            status.textContent = `Player ${gameBoard[a]} Wins!`;
            board.removeEventListener("click", handleClick);
            return true;
        }
    }
    if (!gameBoard.includes(null)) {
        status.textContent = "It's a Tie!";
        return true;
    }
    return false;
}

function handleClick(event) {
    const cell = event.target;
    const index = cell.getAttribute("data-index");

    if (!gameBoard[index]) {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add("taken");
        
        if (!checkWinner()) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            status.textContent = `Player ${currentPlayer}'s Turn`;
        }
    }
}

function resetGame() {
    gameBoard.fill(null);
    document.querySelectorAll(".cell").forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("taken");
    });
    currentPlayer = "X";
    status.textContent = "Player X's Turn";
    board.addEventListener("click", handleClick);
}

board.addEventListener("click", handleClick);
resetButton.addEventListener("click", resetGame);
