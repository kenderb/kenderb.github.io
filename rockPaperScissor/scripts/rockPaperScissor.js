var computerPlay = () => {
    var value = {0: "rock", 1: "scissor", 2: "paper"};
    return value[Math.floor(Math.random() * 3)];
};

var singleRPS = (playerSelection, computerSelection) => {
    var computerS = computerSelection.toLowerCase();
    var playerS = playerSelection.toLowerCase();
    if ((playerS == "rock" && computerS == "paper") ||
        (playerS == "scissor" && computerS == "rock") ||
        (playerS == "paper" && computerS == "scissor")) {
        return "lose";
    } else if (playerS == computerS) {
        return "draw";
    } else {
        return "win";
    }
};

var machResult = "";
var roundsNum = 0

const imagesMach = document.querySelectorAll(".result");
imagesMach.forEach(value => value.style.transform = "scale(0,0)")

const machineResults = document.querySelector(".machineHand");
machineResults.style.transform = "scale(0,0)";

const Btn = document.querySelectorAll(".btn");
var results = document.querySelectorAll('.foter');

var win = 0;
var lose = 0;
var draw = 0;

Btn.forEach(value => value.addEventListener('click', () => {
    if(roundsNum == 5) {
        if(win > lose) alert("You Win!");
        if(win === lose) alert("Is a Draw!"); 
        if(win < lose) alert("You lose!");
        results.forEach (value => value.textContent = 0);
        location.reload();
    }
    imagesMach.forEach(value => value.style.transform = "scale(1)");
    machineResults.style.transform = "scale(1)";
    var computerValue = computerPlay();
    machResult = singleRPS(value.alt, computerValue);
    
    if (machResult == "win") {
        win++;
    } else if (machResult == "lose") {
        lose++;
    } else {
        draw++;
    }
    results[0].textContent = win;
    results[2].textContent = lose;
    results[1].textContent = draw;

    imagesMach[0].src = `./assets/images/user/${value.alt}User.png`;
    imagesMach[1].src = `./assets/images/machine/${computerValue}Machine.png`;
    machineResults.src = `./assets/images/machine/${computerValue}Machine.png`;
    roundsNum++;
    console.log(`Win: ${win}, Draw: ${draw}, Lose: ${lose} `);
    
}));




