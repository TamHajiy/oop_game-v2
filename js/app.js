/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', (e)=>{
    let newGame = new Game();
    newGame.startGame();

    let letterButton = document.querySelectorAll('.key');
    letterButton.forEach(btn => {
        btn.addEventListener('click', (e)=>{
        newGame.handleInteraction(e.target)
        });

    })

    document.addEventListener('keyup', (e)=>{
        console.log(e);
        letterButton.forEach(btn => {
            if (btn.innerHTML === e.key && !btn.disabled){
                newGame.handleInteraction(btn);
            }
        });
    })
    
})


