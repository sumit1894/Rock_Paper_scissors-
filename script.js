let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");



const gencomchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const drawGame = (userchoice,compchoice) => {
    msg.innerText = `Draw!${userchoice} equals ${compchoice}`;
    msg.style.backgroundColor = "black";
}


const shoWinner = (userwin,userchoice,compchoice) => {
    if (userwin) {
        msg.innerText = `You Win!${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userscore.innerText = userScore;
    }
    else {
        msg.innerText = `computer Win!${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compscore.innerText = compScore;
    }
}

const playgame = (userchoice) => {
    const compchoice = gencomchoice();

    if (userchoice === compchoice) {
        drawGame(compchoice, userchoice);
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            //scissors, paper
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            //rock,scissors
            userwin = compchoice === "scissors" ? true : false
        }
        else {
            //rock,paper
            userwin = compchoice === "rock" ? true : false;
        }
        shoWinner(userwin, compchoice, userchoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })

})
