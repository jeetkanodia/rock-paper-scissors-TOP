function getComputerChoice()
{
    let a = Math.floor(Math.random() * 3);
    if (a==0)
    return "rock";
    else if (a==1)
    return "paper";
    else 
    return "scissors";
}

function playRound(playerSelection , computerSelection)
{
    switch(playerSelection)
    {
        case "rock": 
        {
            switch(computerSelection)
            {
                case "rock": return "It's a Tie!"; break;
                case "paper": return "You lose! Paper beats Rock";break;
                case "scissors": return "You win! Rock beats Scissors";break;
            }
        }
        break;

        case "paper":
        {
            switch(computerSelection)
            {
                case "paper": return "It's a Tie!"; break;
                case "scissors": return "You lose! Scissors beats Paper";break;
                case "rock": return "You win! Paper beats Rock";break;       
            }
        }
        break;
        case "scissors":
        {
            switch(computerSelection)
            {
            case "scissors": return "It's a Tie!"; break;
            case "rock": return "You lose! Rock beats Scissors";break;
            case "paper": return "You win! Scissors beats Paper";break;       
            }
        }
    }
}

function game()
{
    player = "paper" ;
    computer = getComputerChoice().toLowerCase();
    console.log(playRound(player, computer))
}
game();