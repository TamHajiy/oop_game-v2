/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/* 
**  Set new instance of the Game()
*/
let newGame = new Game();

/* 
**  Set event listener to start a game
*/
const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', (e)=>{
    newGame.startGame();
})

/* 
**  Call handleInteraction() method on Game object
*/
let letterButton = document.querySelectorAll('.key');
letterButton.forEach(btn => {
    btn.addEventListener('click', (e)=>{
    newGame.handleInteraction(e.target)
    });

})

/* 
**  Set physical computer keyboard
*/
document.addEventListener('keyup', (e)=>{
    letterButton.forEach(btn => {
        if (btn.innerHTML === e.key && !btn.disabled){
            newGame.handleInteraction(btn);
        }
    });
})


