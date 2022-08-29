/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/
const rps = (p1, p2) => {
    const gameRules = {
        "rock" : {
            "rock" :  "Draw!",
            "scissors" : "Player 1 won!",  
            "paper" : "Player 2 won!",
         }, 
        "scissors" : {
            "rock" :  "Player 2 won!",
            "scissors" : "Draw!",  
            "paper" : "Player 1 won!",
        }, 
        "paper" : {
            "rock" :  "Player 1 won!",
            "scissors" : "Player 2 won!", 
            "paper" : "Draw!",
        }
    }
    return gameRules[p1][p2]//?
};