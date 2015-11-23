"use strict";

//var boxPosition = document.getElementsByClass( "box" ).addEventListener( "click", gameBoard);
/*var playerWins = gameBoard[0, 1, 2] || gameBoard[3, 4, 5] || gameBoard[6, 7, 8] || gameBoard[0, 3, 6] || gameBoard[1, 4, 7] || gameBoard[2, 5, 8] ||
gameBoard[0, 4, 8] || gameBoard[2, 4, 6]*/

//Class code
var boxes = document.querySelectorAll(".box")
var turnCount = 0
var winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6] [1,4,7], [2,5,8], [0,4,8], ]

for(var i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener("click", takeTurn)
}

function takeTurn() {
	if (!this.innerHTML) {
		if (turnCount % 2 === 0) {
			this.innerHTML = "X"
		} else {
			this.innerHTML = "O"
		}
		checkWinner(this.innerHTML)
		turnCount++
	}
}

function resetBoard() {
	for(var i = 0; i < boxes.length; i++) {
		boxes[i].innerHTML = ""
	}
}

function checkWinner(player) {
	for(var i = 0; i < winConditions.length; i++) {
		if(boxes[winConditions[i][0]].innerHTML === player && boxes[winConditions[i][1].innerHTML === player && boxes[winConditions[i][0]].innerHTML === player) {
			alert(player + " wins!")
		} 
	}
}




var gameBoard = []
var players = ["playerOne", "playerTwo"]
var playerOne = "X"
var playerTwo = "O"
var i = 0

function playerTurn() {
	for (i = 0; i < players.length; i++)
		players = players[i]
}

function gamePlay() {
	if (players[i] = playerOne) {
		document.getElementById( "box1").addEventListener("click", function() {
			if (gameBoard[0] === undefined) {
				gameBoard[0] = "X";
				this.innerHTML = "X";
				if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") {
					alert("X wins");
				} else if (gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X") {
					alert("X wins 2")
				} else if (gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X") {
					alert("X wins 3")
				} else if (gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X") {
					alert("X wins 4")
				} else if (gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X") {
					alert("X wins 5")
				} else if (gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X") {
					alert("X wins 6")
				} else if (gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X") {
					alert("X wins 7")
				} else if (gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard[6] === "X") {
					alert("X wins 8")
				}
			} 
		});
		} else if (document.getElementById( "box2").addEventListener("click", function() {
			if (gameBoard[1] === undefined) {
				gameBoard[1] = "X";
				this.innerHTML = "X";
				if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") {
					alert("X wins");
				} else if (gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X") {
					alert("X wins 2")
				} else if (gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X") {
					alert("X wins 3")
				} else if (gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X") {
					alert("X wins 4")
				} else if (gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X") {
					alert("X wins 5")
				} else if (gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X") {
					alert("X wins 6")
				} else if (gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X") {
					alert("X wins 7")
				} else if (gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard[6] === "X") {
					alert("X wins 8")
				}
			} 
		});)
		} else if (document.getElementById( "box3").addEventListener("click", function() {
			if (gameBoard[2] === undefined) {
				gameBoard[2] = "X";
				this.innerHTML = "X";
				if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") {
					alert("X wins");
				} else if (gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X") {
					alert("X wins 2")
				} else if (gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X") {
					alert("X wins 3")
				} else if (gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X") {
					alert("X wins 4")
				} else if (gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X") {
					alert("X wins 5")
				} else if (gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X") {
					alert("X wins 6")
				} else if (gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X") {
					alert("X wins 7")
				} else if (gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard[6] === "X") {
					alert("X wins 8")
				}
			} 
		});)
		} else if (document.getElementById( "box4").addEventListener("click", function() {
			if (gameBoard[3] === undefined) {
				gameBoard[3] = "X";
				this.innerHTML = "X";
				if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") {
					alert("X wins");
				} else if (gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X") {
					alert("X wins 2")
				} else if (gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X") {
					alert("X wins 3")
				} else if (gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X") {
					alert("X wins 4")
				} else if (gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X") {
					alert("X wins 5")
				} else if (gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X") {
					alert("X wins 6")
				} else if (gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X") {
					alert("X wins 7")
				} else if (gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard[6] === "X") {
					alert("X wins 8")
				}
			} 
		});
		document.getElementById( "box5").addEventListener("click", function() {
			if (gameBoard[4] === undefined) {
				gameBoard[4] = "X";
				this.innerHTML = "X";
				if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") {
					alert("X wins");
				} else if (gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X") {
					alert("X wins 2")
				} else if (gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X") {
					alert("X wins 3")
				} else if (gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X") {
					alert("X wins 4")
				} else if (gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X") {
					alert("X wins 5")
				} else if (gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X") {
					alert("X wins 6")
				} else if (gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X") {
					alert("X wins 7")
				} else if (gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard[6] === "X") {
					alert("X wins 8")
				}
			} 
		});
		document.getElementById( "box6").addEventListener("click", function() {
			if (gameBoard[5] === undefined) {
				gameBoard[5] = "X";
				this.innerHTML = "X";
				if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") {
					alert("X wins");
				} else if (gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X") {
					alert("X wins 2")
				} else if (gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X") {
					alert("X wins 3")
				} else if (gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X") {
					alert("X wins 4")
				} else if (gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X") {
					alert("X wins 5")
				} else if (gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X") {
					alert("X wins 6")
				} else if (gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X") {
					alert("X wins 7")
				} else if (gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard[6] === "X") {
					alert("X wins 8")
				}
			} 
		});
		document.getElementById( "box7").addEventListener("click", function() {
			if (gameBoard[6] === undefined) {
				gameBoard[6] = "X";
				this.innerHTML = "X";
				if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") {
					alert("X wins");
				} else if (gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X") {
					alert("X wins 2")
				} else if (gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X") {
					alert("X wins 3")
				} else if (gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X") {
					alert("X wins 4")
				} else if (gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X") {
					alert("X wins 5")
				} else if (gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X") {
					alert("X wins 6")
				} else if (gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X") {
					alert("X wins 7")
				} else if (gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard[6] === "X") {
					alert("X wins 8")
				}
			} 
		});
		document.getElementById( "box8").addEventListener("click", function() {
			if (gameBoard[7] === undefined) {
				gameBoard[7] = "X";
				this.innerHTML = "X";
				if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") {
					alert("X wins");
				} else if (gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X") {
					alert("X wins 2")
				} else if (gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X") {
					alert("X wins 3")
				} else if (gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X") {
					alert("X wins 4")
				} else if (gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X") {
					alert("X wins 5")
				} else if (gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X") {
					alert("X wins 6")
				} else if (gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X") {
					alert("X wins 7")
				} else if (gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard[6] === "X") {
					alert("X wins 8")
				}
			} 
		});
		document.getElementById( "box9").addEventListener("click", function() {
			if (gameBoard[8] === undefined) {
				gameBoard[8] = "X";
				this.innerHTML = "X";
				if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") {
					alert("X wins");
				} else if (gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X") {
					alert("X wins 2")
				} else if (gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X") {
					alert("X wins 3")
				} else if (gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X") {
					alert("X wins 4")
				} else if (gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X") {
					alert("X wins 5")
				} else if (gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X") {
					alert("X wins 6")
				} else if (gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X") {
					alert("X wins 7")
				} else if (gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard[6] === "X") {
					alert("X wins 8")
				} else {
					return players[i];
				}
			} 
		});

	} else if (players[i] = playerTwo) {
		document.getElementById( "box1").addEventListener("click", function() {
			if (gameBoard[0] === undefined) {
				gameBoard[0] = "O";
				this.innerHTML = "O";
				if (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O") {
					alert("O wins");
				} else if (gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O") {
					alert("O wins 2")
				} else if (gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O") {
					alert("O wins 3")
				} else if (gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O") {
					alert("O wins 4")
				} else if (gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O") {
					alert("O wins 5")
				} else if (gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O") {
					alert("O wins 6")
				} else if (gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O") {
					alert("O wins 7")
				} else if (gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard[6] === "O") {
					alert("O wins 8")
				}
			} 
		});
		document.getElementById( "box2").addEventListener("click", function() {
			if (gameBoard[1] === undefined) {
				gameBoard[1] = "O";
				this.innerHTML = "O";
				if (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O") {
					alert("O wins");
				} else if (gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O") {
					alert("O wins 2")
				} else if (gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O") {
					alert("O wins 3")
				} else if (gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O") {
					alert("O wins 4")
				} else if (gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O") {
					alert("O wins 5")
				} else if (gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O") {
					alert("O wins 6")
				} else if (gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O") {
					alert("O wins 7")
				} else if (gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard[6] === "O") {
					alert("O wins 8")
				}
			} 
		});
		document.getElementById( "box3").addEventListener("click", function() {
			if (gameBoard[2] === undefined) {
				gameBoard[2] = "O";
				this.innerHTML = "O";
				if (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O") {
					alert("O wins");
				} else if (gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O") {
					alert("O wins 2")
				} else if (gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O") {
					alert("O wins 3")
				} else if (gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O") {
					alert("O wins 4")
				} else if (gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O") {
					alert("O wins 5")
				} else if (gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O") {
					alert("O wins 6")
				} else if (gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O") {
					alert("O wins 7")
				} else if (gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard[6] === "O") {
					alert("O wins 8")
				}
			} 
		});
		document.getElementById( "box4").addEventListener("click", function() {
			if (gameBoard[3] === undefined) {
				gameBoard[3] = "O";
				this.innerHTML = "O";
				if (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O") {
					alert("O wins");
				} else if (gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O") {
					alert("O wins 2")
				} else if (gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O") {
					alert("O wins 3")
				} else if (gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O") {
					alert("O wins 4")
				} else if (gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O") {
					alert("O wins 5")
				} else if (gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O") {
					alert("O wins 6")
				} else if (gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O") {
					alert("O wins 7")
				} else if (gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard[6] === "O") {
					alert("O wins 8")
				}
			} 
		});
		document.getElementById( "box5").addEventListener("click", function() {
			if (gameBoard[4] === undefined) {
				gameBoard[4] = "O";
				this.innerHTML = "O";
				if (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O") {
					alert("O wins");
				} else if (gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O") {
					alert("O wins 2")
				} else if (gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O") {
					alert("O wins 3")
				} else if (gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O") {
					alert("O wins 4")
				} else if (gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O") {
					alert("O wins 5")
				} else if (gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O") {
					alert("O wins 6")
				} else if (gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O") {
					alert("O wins 7")
				} else if (gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard[6] === "O") {
					alert("O wins 8")
				}
			} 
		});
		document.getElementById( "box6").addEventListener("click", function() {
			if (gameBoard[5] === undefined) {
				gameBoard[5] = "O";
				this.innerHTML = "O";
				if (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O") {
					alert("O wins");
				} else if (gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O") {
					alert("O wins 2")
				} else if (gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O") {
					alert("O wins 3")
				} else if (gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O") {
					alert("O wins 4")
				} else if (gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O") {
					alert("O wins 5")
				} else if (gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O") {
					alert("O wins 6")
				} else if (gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O") {
					alert("O wins 7")
				} else if (gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard[6] === "O") {
					alert("O wins 8")
				}
			} 
		});
		document.getElementById( "box7").addEventListener("click", function() {
			if (gameBoard[6] === undefined) {
				gameBoard[6] = "O";
				this.innerHTML = "O";
				if (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O") {
					alert("O wins");
				} else if (gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O") {
					alert("O wins 2")
				} else if (gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O") {
					alert("O wins 3")
				} else if (gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O") {
					alert("O wins 4")
				} else if (gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O") {
					alert("O wins 5")
				} else if (gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O") {
					alert("O wins 6")
				} else if (gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O") {
					alert("O wins 7")
				} else if (gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard[6] === "O") {
					alert("O wins 8")
				}
			} 
		});
		document.getElementById( "box8").addEventListener("click", function() {
			if (gameBoard[7] === undefined) {
				gameBoard[7] = "O";
				this.innerHTML = "O";
				if (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O") {
					alert("O wins");
				} else if (gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O") {
					alert("O wins 2")
				} else if (gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O") {
					alert("O wins 3")
				} else if (gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O") {
					alert("O wins 4")
				} else if (gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O") {
					alert("O wins 5")
				} else if (gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O") {
					alert("O wins 6")
				} else if (gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O") {
					alert("O wins 7")
				} else if (gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard[6] === "O") {
					alert("O wins 8")
				}
			} 
		});
		document.getElementById( "box9").addEventListener("click", function() {
			if (gameBoard[8] === undefined) {
				gameBoard[8] = "O";
				this.innerHTML = "O";
				if (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O") {
					alert("O wins");
				} else if (gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O") {
					alert("O wins 2")
				} else if (gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O") {
					alert("O wins 3")
				} else if (gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O") {
					alert("O wins 4")
				} else if (gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O") {
					alert("O wins 5")
				} else if (gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O") {
					alert("O wins 6")
				} else if (gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O") {
					alert("O wins 7")
				} else if (gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard[6] === "O") {
					alert("O wins 8")
				} else {
					return players[i];
				}
			}
		});
	}
}

/*function playerChoice() {
	if (playerOne)
}

function boxChoiceX() {
	if (boxPosition === "#box1") {
		return "X" on "#box1"
	} else if (boxPosition === "#box2" && "#box2" === null) {
		return "X" on "#box2"
	} else if (boxPosition === "#box3") {
		return "X" on "#box3"
	} else if (boxPosition === "#box4") {
		return "X" on "#box4"
	} else if (boxPosition === "#box5") {
		return "X" on "#box5"
	} else if (boxPosition === "#box6") {
		return "X" on "#box6"
	} else if (boxPosition === "#box7") {
		return "X" on "#box7"
	} else if (boxPosition === "#box8") {
		return "X" on "#box8"
	} else if (boxPosition === "#box9") {
		return "X" on "#box9"
	}
}

function boxChoiceO() {
	if (boxPosition === "#box1") {
		console.log("O")
	} else if (boxPosition === "#box2") {
		return "O" on "#box2"
	} else if (boxPosition === "#box3") {
		return "O" on "#box3"
	} else if (boxPosition === "#box4") {
		return "O" on "#box4"
	} else if (boxPosition === "#box5") {
		return "O" on "#box5"
	} else if (boxPosition === "#box6") {
		return "O" on "#box6"
	} else if (boxPosition === "#box7") {
		return "O" on "#box7"
	} else if (boxPosition === "#box8") {
		return "O" on "#box8"
	} else if (boxPosition === "#box9") {
		return "O" on "#box9"
	}
}

function gamePlay() {
	for (i = 0; )
	if (boxChoiceX === true) {
		return boxChoiceO
	} else if (boxChoiceO === true) {
		return boxChoiceX
	} else {
		if (player chooses a spot and doesn't win) {
			return next player's turn
		} else if (playerWins === true) {
			document.getElementsByClass("win").innerHTML = "Congrats! You Won!";
		} else if (player takes last box and doesnt win) {
			return Game Tie then GameOver
		}
	}
}

//I need to make the gameBoard array recognize the div that you click in, ie #box1 = gameBoard[0]
//I need to have the computer check to see if a box is occupied before it can be selected.
//I need to have the selected box show an X or O when a user clicks on it if it's empty. DONE
//I need the computer to recognize when a player wins */

