var hands = ["rock"  , "paper"  , "scissor"  , "lizard"   , "spock"  ];
var rules = [ [2,3]  ,  [0, 4]  ,   [1,3]    ,   [4,1]    ,  [2, 0]  ];
var score = 0;
var handsOptions = document.getElementById("handsOptions");
var handsSelected = document.getElementById("handsSelected");
var textResult = document.getElementById("textResult");
var playAgain = document.getElementById("playAgain");
var numberScore = document.getElementById("numberScore");

numberScore.innerHTML = score;

function handOnPress(hand){
	var handUserSelected = hand;
	var handComputerSelectedRandom = Math.floor(Math.random() * 3);
	verifyWinner(hands.indexOf(handUserSelected), handComputerSelectedRandom);
}

function verifyWinner(handUser, handComputer){
	var winner;
	var handWinner;

	if (rules[handUser].indexOf(handComputer) !== -1) {
		winner = "YOU WIN";
		handWinner = "hand1";
		score = score + 1;
		alterScore(score);
	}
	else if(handUser === handComputer){
		winner = "YOU TIED";
	}
	else{
		winner = "YOU LOSE";
		handWinner = "hand2";
		if (score !== 0) {
			score = score - 1;
			alterScore(score);
		}
	}

	cloneElement("hand1", hands[handUser]+"BG", winner, handWinner);
	cloneElement("hand2", hands[handComputer]+"BG", winner, handWinner);

	handsOptions.style.display = "none";
	handsSelected.style.display = "flex";
}

function alterScore(score){
	setTimeout(() => {
		numberScore.innerHTML = score;
	}, 1000);
}

function cloneElement(hand, classe, winner, handWinner){
	var handEl = document.getElementById(hand);
	handEl.classList.remove("winner");
	var cloneHand = document.querySelector("section#handsOptions ."+classe).cloneNode(true);
	cloneHand.onclick = null;

	hand === handWinner && setTimeout( () => { handEl.classList.add("winner") }, 1000);

	if (hand === "hand2") {
		handEl.classList.add("pre-show");
		setTimeout(() => {
			handEl.classList.remove("pre-show");
			handEl.appendChild(cloneHand);
			textResult.innerHTML = winner;
			playAgain.style.display = "block";
		}, 1000);
	}
	else{
		handEl.appendChild(cloneHand);
	}
}

function resetGame(){
	handsOptions.style.display = "block";
	handsSelected.style.display = "none";
	playAgain.style.display = "none";

	document.getElementById("hand1").innerHTML = "";
	document.getElementById("hand2").innerHTML = "";
	textResult.innerHTML = "";
}