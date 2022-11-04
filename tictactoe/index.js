let gameBoard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  let lanes = {
    123: [],
    147: [],
    369: [],
    789: [],
    258: [],
    951: [],
    357: [],
    456: [],
  };
  let chosenIndices = [];
  return { board, chosenIndices, lanes };
})();

let player = (value) => {
  function play(index, event) {
    if (typeof index === "number") {
      if (!gameBoard.board[index]) {
        gameBoard.chosenIndices.push(index);

        add(this.value, index);

        display(event.target, this.value);

        gameFlow.check(index, this.value);
      }
    } else {
      let compIndex = Math.floor(Math.random() * 9);
      while (gameBoard.chosenIndices.includes(compIndex)) {
        compIndex = Math.floor(Math.random() * 9);
      }

      let target = document.querySelectorAll("[data-index]")[compIndex];
      if (!gameBoard.board[compIndex]) {
        gameBoard.chosenIndices.push(compIndex);

        add(this.value, compIndex);

        display(target, this.value);

        gameFlow.check(compIndex, this.value);
      }
    }
  }
  return { value, play };
};

let gameFlow = (function () {
  function check(index, value) {
    let newIndex = index + 1;
    console.log(newIndex);
    if (newIndex === 1) {
      if (gameBoard.lanes[123].length === 0) {
        gameBoard.lanes[123].push(value);
      } else {
        if (gameBoard.lanes[123].includes(value)) {
          gameBoard.lanes[123].push(value);
          this.checkWinner(value);
        }
      }

      if (gameBoard.lanes[147].length === 0) {
        gameBoard.lanes[147].push(value);
      } else {
        if (gameBoard.lanes[147].includes(value)) {
          gameBoard.lanes[147].push(value);
          this.checkWinner(value);
        }
      }

      if (gameBoard.lanes[951].length === 0) {
        gameBoard.lanes[951].push(value);
      } else {
        if (gameBoard.lanes[951].includes(value)) {
          gameBoard.lanes[951].push(value);
          this.checkWinner(value);
        }
      }
    }

    if (newIndex === 2) {
      if (gameBoard.lanes[123].length === 0) {
        gameBoard.lanes[123].push(value);
      } else {
        if (gameBoard.lanes[123].includes(value)) {
          gameBoard.lanes[123].push(value);
          this.checkWinner(value);
        }
      }

      if (gameBoard.lanes[258].length === 0) {
        gameBoard.lanes[258].push(value);
      } else {
        if (gameBoard.lanes[258].includes(value)) {
          gameBoard.lanes[258].push(value);
          this.checkWinner(value);
        }
      }
    }

    if (newIndex === 3) {
      if (gameBoard.lanes[123].length === 0) {
        gameBoard.lanes[123].push(value);
      } else {
        if (gameBoard.lanes[123].includes(value)) {
          gameBoard.lanes[123].push(value);
          this.checkWinner(value);
        }
      }

      if (gameBoard.lanes[369].length === 0) {
        gameBoard.lanes[369].push(value);
      } else {
        if (gameBoard.lanes[369].includes(value)) {
          gameBoard.lanes[369].push(value);
          this.checkWinner(value);
        }
      }

      if (gameBoard.lanes[357].length === 0) {
        gameBoard.lanes[357].push(value);
      } else {
        if (gameBoard.lanes[357].includes(value)) {
          gameBoard.lanes[357].push(value);
          this.checkWinner(value);
        }
      }
    }

    if (newIndex === 4) {
      if (gameBoard.lanes[456].length === 0) {
        gameBoard.lanes[456].push(value);
      } else {
        if (gameBoard.lanes[456].includes(value)) {
          gameBoard.lanes[456].push(value);
          this.checkWinner(value);
        }
      }

      if (gameBoard.lanes[147].length === 0) {
        gameBoard.lanes[147].push(value);
      } else {
        if (gameBoard.lanes[147].includes(value)) {
          gameBoard.lanes[147].push(value);
          this.checkWinner(value);
        }
      }
    }

    if (newIndex === 5) {
      if (gameBoard.lanes[258].length === 0) {
        gameBoard.lanes[258].push(value);
      } else {
        if (gameBoard.lanes[258].includes(value)) {
          gameBoard.lanes[258].push(value);
          this.checkWinner(value);
        }
      }

      if (gameBoard.lanes[357].length === 0) {
        gameBoard.lanes[357].push(value);
      } else {
        if (gameBoard.lanes[357].includes(value)) {
          gameBoard.lanes[357].push(value);
          this.checkWinner(value);
        }
      }

      if (gameBoard.lanes[951].length === 0) {
        gameBoard.lanes[951].push(value);
      } else {
        if (gameBoard.lanes[951].includes(value)) {
          gameBoard.lanes[951].push(value);
          this.checkWinner(value);
        }
      }

      if (gameBoard.lanes[456].length === 0) {
        gameBoard.lanes[456].push(value);
      } else {
        if (gameBoard.lanes[456].includes(value)) {
          gameBoard.lanes[456].push(value);
          this.checkWinner(value);
        }
      }
    }

    if (newIndex === 6) {
      if (gameBoard.lanes[369].length === 0) {
        gameBoard.lanes[369].push(value);
      } else {
        if (gameBoard.lanes[369].includes(value)) {
          gameBoard.lanes[369].push(value);
          this.checkWinner(value);
        }
      }

      if (gameBoard.lanes[456].length === 0) {
        gameBoard.lanes[456].push(value);
      } else {
        if (gameBoard.lanes[456].includes(value)) {
          gameBoard.lanes[456].push(value);
          this.checkWinner(value);
        }
      }
    }

    if (newIndex === 7) {
      if (gameBoard.lanes[789].length === 0) {
        gameBoard.lanes[789].push(value);
      } else {
        if (gameBoard.lanes[789].includes(value)) {
          gameBoard.lanes[789].push(value);
          this.checkWinner(value);
        }
      }

      if (gameBoard.lanes[147].length === 0) {
        gameBoard.lanes[147].push(value);
      } else {
        if (gameBoard.lanes[147].includes(value)) {
          gameBoard.lanes[147].push(value);
          this.checkWinner(value);
        }
      }

      if (gameBoard.lanes[357].length === 0) {
        gameBoard.lanes[357].push(value);
      } else {
        if (gameBoard.lanes[357].includes(value)) {
          gameBoard.lanes[357].push(value);
          this.checkWinner(value);
        }
      }
    }

    if (newIndex === 8) {
      if (gameBoard.lanes[789].length === 0) {
        gameBoard.lanes[789].push(value);
      } else {
        if (gameBoard.lanes[789].includes(value)) {
          gameBoard.lanes[789].push(value);
          this.checkWinner(value);
        }
      }

      if (gameBoard.lanes[258].length === 0) {
        gameBoard.lanes[258].push(value);
      } else {
        if (gameBoard.lanes[258].includes(value)) {
          gameBoard.lanes[258].push(value);
          this.checkWinner(value);
        }
      }
    }

    if (newIndex === 9) {
      if (gameBoard.lanes[369].length === 0) {
        gameBoard.lanes[369].push(value);
      } else {
        if (gameBoard.lanes[369].includes(value)) {
          gameBoard.lanes[369].push(value);
          this.checkWinner(value);
        }
      }

      if (gameBoard.lanes[789].length === 0) {
        gameBoard.lanes[789].push(value);
      } else {
        if (gameBoard.lanes[789].includes(value)) {
          gameBoard.lanes[789].push(value);
          this.checkWinner(value);
        }
      }

      if (gameBoard.lanes[951].length === 0) {
        gameBoard.lanes[951].push(value);
      } else {
        if (gameBoard.lanes[951].includes(value)) {
          gameBoard.lanes[951].push(value);
          this.checkWinner(value);
        }
      }
    }
  }

  function checkWinner(value) {
    for (let lane in gameBoard.lanes) {
      if (gameBoard.lanes[lane].length === 3) {
        alert(`Player.....${value}..... is the Winner`);

        gameBoard.board = ["", "", "", "", "", "", "", "", ""];
        gameBoard.chosenIndices = [];

        currentPlayer = "";
        computerPlayer = "";
      }
    }
  }

  return { check, checkWinner };
})();

let add = (selection, index) => {
  if (!gameBoard.board[index]) {
    gameBoard.board[index] = selection;
  }
};

let display = (element, value) => {
  element.textContent = value;
};

let restart = () => {
  gameBoard.board = ["", "", "", "", "", "", "", "", ""];
  gameBoard.chosenIndices = [];

  currentPlayer = "";
  computerPlayer = "";
  
 gameBoard.lanes = {
    123: [],
    147: [],
    369: [],
    789: [],
    258: [],
    951: [],
    357: [],
    456: [],
  };

  for (let divs of boxes) {
    divs.textContent = "";
  }
};

let currentPlayer = "";
let computerPlayer = "";

let boxes = document.querySelectorAll(".container>div");

for (let div of boxes) {
  div.addEventListener("click", (event) => {
    let index = +event.target.dataset.index;
    let onlyOne = gameBoard.chosenIndices.length === 8;
    let full = gameBoard.chosenIndices.length === 9;
    if (currentPlayer) {
      if (!onlyOne && !full) {
        currentPlayer.play(index, event);
        computerPlayer.play();
      } else if (onlyOne) {
        currentPlayer.play(index, event);
      }
    }
  });
}

let playerX = document.querySelector(".playerX");
let playerO = document.querySelector(".playerO");

playerX.addEventListener("click", (event) => {
  if (!currentPlayer) {
    currentPlayer = player(event.target.textContent);
    computerPlayer = player(playerO.textContent);
  }
});

playerO.addEventListener("click", (event) => {
  if (!currentPlayer) {
    currentPlayer = player(event.target.textContent);
    computerPlayer = player(playerX.textContent);
  }
});

let restartButton = document.querySelector(".restart");

restartButton.addEventListener("click", (event) => {
  restart();
});
