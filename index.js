document.getElementById("refresh").onclick = function diceRolled() {
	const randomNumber1 = Math.floor(Math.random() * 6 + 1);
	const randomNumber2 = Math.floor(Math.random() * 6 + 1);

	document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
	document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

	if (randomNumber1 === randomNumber2) {
		document.querySelector("a").innerText = "Draw!";
	}
	else if (randomNumber1 > randomNumber2) {
		document.querySelector("a").innerText = "🚩 Player 1 Wins!";
	}
	else {
		document.querySelector("a").innerText = "Player 2 Wins! 🚩";
	}
};

// document.querySelector("a").addEventListener("click", diceRolled);
