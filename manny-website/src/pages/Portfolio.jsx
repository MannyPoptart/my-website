import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Portfolio.css'

let curPlayer = "X";

const winSituations = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // Horizontal
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // Vertical
    [1, 5, 9], [3, 5, 7] // Diagonal
];

const cells = document.querySelectorAll(".cell");
const resetBtn = document.querySelector("#resetBoard");
const message = document.querySelector("#playerTurn");
message.innerHTML = `Player ${curPlayer}'s turn`;

cells.forEach(cell => {
    cell.addEventListener("click", handleClick);
});

resetBtn.addEventListener("click", resetGame);

function handleClick(e) {
    const cell = e.target;
    if (cell.textContent === "") {
        cell.textContent = curPlayer;
        if (checkWin()) {
            message.innerHTML = `Player ${curPlayer} won!`;
            cells.forEach(cell => {
                cell.removeEventListener("click", handleClick);
            });
        } else {
            curPlayer = curPlayer === "X" ? "O" : "X";
            message.innerHTML = `Player ${curPlayer}'s turn`;
        }
    }
}

function checkWin() {
    let win = false;
    winSituations.forEach(situation => {
        if (cells[situation[0] - 1].textContent === curPlayer &&
            cells[situation[1] - 1].textContent === curPlayer &&
            cells[situation[2] - 1].textContent === curPlayer) {
            win = true;
        } else {
            win = false;
            message.innerHTML = 'Draw!';
        }
    });
    return win;
}

function resetGame() {
    curPlayer = "X";
    message.innerHTML = `Player ${curPlayer}'s turn`;
    cells.forEach(cell => {
        cell.textContent = "";
        cell.addEventListener("click", handleClick);
    });
}



function Portfolio() {
  return (
    <div className='Portfolio'>

      <header id="portHeader">
        <h1>Portfolio</h1>
      </header>

      <Navbar />

      <section id='portProjects'>

        <h2>Tic-Tac-Toe</h2>
        <div id='board'>

          <div id="board">
            <div class="cell" id="cell1"></div>
            <div class="cell" id="cell2"></div>
            <div class="cell" id="cell3"></div>
            <div class="cell" id="cell4"></div>
            <div class="cell" id="cell5"></div>
            <div class="cell" id="cell6"></div>
            <div class="cell" id="cell7"></div>
            <div class="cell" id="cell8"></div>
            <div class="cell" id="cell9"></div>
          </div>
        </div>

        <div id="playerTurn">Player ?'s Turn</div>
          
        <button id="resetBoard">Reset Board</button>

        

      </section>



      <footer id='portFooter'>
        <p>Manny's Website &copy; 2024</p>
      </footer>
        
    </div>
  )
}

export default Portfolio