let boxex = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let main = document.querySelector(".main");
let checkResult = document.querySelector("#check");

let turnO = true; //playerX playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


const resetGame = () => {
    turnO = true;
    enabledBox();
    msgContainer.classList.add("hide");
    for(let box of boxex) {
        box.innerText = "";
    }
};

boxex.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    } );

});

const disabledBox = () => {
    for(let box of boxex) {
        box.disabled = true;
    }
}

const enabledBox = () => {
    for(let box of boxex) {
        box.disabled = false;
    }
}

const showWinner = (winner) => {
    msg.innerText = `congratulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBox();
    main.classList.add("hide-main");
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxex[pattern[0]].innerText;
        let pos2Val = boxex[pattern[1]].innerText;
        let pos3val = boxex[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3val != "") {
            if((pos1Val === pos2Val) && (pos2Val === pos3val)) {
                
                showWinner(pos1Val);
            }
        }
    }
}


resetBtn.addEventListener("click", resetGame);

const newGameBtn = () => {
    turnO = true;
    enabledBox();
    msgContainer.classList.add("hide");
    for(let box of boxex) {
        box.innerText = "";
    }
    main.classList.remove("hide-main");
};

newGame.addEventListener("click", newGameBtn);

const checkBtn = () => {
    main.classList.remove("hide-main");
};

checkResult.addEventListener("click", checkBtn);