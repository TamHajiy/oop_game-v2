/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/* 
**  Set new instance of the Game()
*/
let newGame = null;

/* 
**  Set event listener to start a game
*/
const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', (e)=>{
    newGame = new Game();
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
    const overlay = document.getElementById('overlay');
    letterButton.forEach(btn => {
        if(overlay.style.visibility === 'hidden'){
            if (btn.innerHTML === e.key && !btn.disabled){   
                 newGame.handleInteraction(btn);
            }
        } // else do nothing
    });
});


