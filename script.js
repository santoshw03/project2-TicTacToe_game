let boxes = document.querySelectorAll('.btn');
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn")
let winningMsg = document.querySelector(".winning-msg")
let winMsg = document.querySelector("#msg")
let turnX = true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
const resetGame = () =>{
    turnX = true;
    enableButtons();
    winningMsg.classList.add("hide");

}

boxes.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log("box is clicked");
        if (turnX) {
            btn.innerText = "X";
            turnX = false;
        }else{
            btn.innerText = "O";
            turnX = true;
        };
        btn.disabled = true;
        
        checkWinner();

    });
});
const disbleButtons = () =>{
    for(let btn of boxes){
        btn.disabled = true;
    }
}
const enableButtons = () =>{
    for(let btn of boxes){
        btn.disabled = false;
        btn.innerText = "";
    }
}
const showWinner = (winner) =>{
    winMsg.innerText = `The WINNER is: ${winner} `;
    winningMsg.classList.remove('hide');
    disbleButtons();

}
const checkWinner = () =>{
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if (pos1Val !="" && pos2Val !="" && pos3Val !="") {
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner")
                showWinner(pos1Val);
            }
            
        }
    }
}
newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);
