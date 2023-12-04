"use strict";

// Initialize navigation
var activeCell = 0;
highlightActiveCell();

function highlightActiveCell() {
  // Remove the class from all cells
  cells.forEach(function (cell) {
    return cell.classList.remove("active-cell");
  }); // Add the class to the active cell

  cells[activeCell].classList.add("active-cell");
} // Attach click event listeners to cells


function cellClicked(index) {
  // Check if the cell is empty and the game is not ended
  if (cellValues[index] === "" && !gameEnded) {
    // Update the cell value
    cells[index].innerText = turn;
    cells[index].style.background = "gray"; // Store the cell value

    cellValues[index] = turn; // Check for a winner

    var winner = checkWinner();

    if (winner) {
      gameEnded = true;
      document.querySelector("#win_draw").innerText = "".concat(winner, " wins!");
    } else if (cellValues.every(function (value) {
      return value !== "";
    })) {
      gameEnded = true;
      document.querySelector("#win_draw").innerText = "Draw!";
    } else {
      // No winner, change turn
      turn = turn === "X" ? "O" : "X"; // Change title

      turnLetter = document.querySelector("#turn");
      turnLetter.innerText = turn;
    } // Highlight the clicked cell


    activeCell = index;
    highlightActiveCell();
  }
} // Attach click event listeners to cells


cells.forEach(function (cell, index) {
  cell.addEventListener("click", function () {
    cellClicked(index);
  });
}); // Keyboard navigation

document.addEventListener("keydown", function (e) {
  if (gameEnded) return; // Do not allow navigation if the game has ended

  switch (e.key) {
    case "ArrowUp":
      if (activeCell >= 3) {
        activeCell -= 3;
      }

      break;

    case "ArrowDown":
      if (activeCell < 6) {
        activeCell += 3;
      }

      break;

    case "ArrowLeft":
      if (activeCell % 3 !== 0) {
        activeCell--;
      }

      break;

    case "ArrowRight":
      if (activeCell % 3 !== 2) {
        activeCell++;
      }

      break;

    case "Enter":
      // Simulate a click on the active cell
      cells[activeCell].click();
      break;
  }

  highlightActiveCell();
}); // Provide instructions

var instructions = document.createElement("p");
instructions.innerText = "Use Arrow keys to navigate, Enter to select a cell.";
document.body.appendChild(instructions);