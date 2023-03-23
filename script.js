var playerScore=0;
var ComputerScore = 0;

function getComputerChoice()
{
    var result='';
    let a = Math.floor(Math.random() * 3);
    if (a==0)
    result= "rock";
    else if (a==1)
    result= "paper";
    else 
    result= "scissors";

    return result;

}
//playerwin and computer win needs to be added
function playerWin(){
    window.alert("THE PLAYER WINS!!!");
    playerScore=0;
    ComputerScore = 0;
}

function computerWin(){
    window.alert("You lost, the computer won");
    playerScore=0;
    ComputerScore = 0;
}

function checkForWinner(){
    if(playerScore==5){
        playerWin();
    }
    if(ComputerScore==5){
        computerWin();
    }
}
function playRound(playerSelection)
{
    computerSelection = getComputerChoice();
    var result ='';
    switch(playerSelection)
    {
        case "rock": 
        {
            switch(computerSelection)
            {
                case "rock": result= "It's a Tie!"; break;
                case "paper": result= "You lose! Paper beats Rock";ComputerScore+=1;break;
                case "scissors": result= "You win! Rock beats Scissors";playerScore+=1;break;
            }
        }
        break;

        case "paper":
        {
            switch(computerSelection)
            {
                case "paper": result= "It's a Tie!"; break;
                case "scissors": result= "You lose! Scissors beats Paper";ComputerScore+=1;break;
                case "rock": result= "You win! Paper beats Rock";playerScore+=1;break;       
            }
        }
        break;
        case "scissors":
        {
            switch(computerSelection)
            {
            case "scissors": result= "It's a Tie!"; break;
            case "rock": result= "You lose! Rock beats Scissors"; ComputerScore+=1;break;
            case "paper": result= "You win! Scissors beats Paper";playerScore+=1; break;       
            }
        }
    }
    var div = document.getElementById("result");
    div.innerHTML = result;

    checkForWinner();
}
