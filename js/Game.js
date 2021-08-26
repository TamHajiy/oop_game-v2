/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = document.getElementById('overlay');

class Game {
    constructor(missed, phrases, activePhrase){
        this.missed = 0;
        this.phrases = ['rising sun', 'family', 'weekend', 'cottage cheese', 'hot dog'];
        this.activePhrase = null;
    }

    startGame(){
        // hide the start screen overlay
        this.missed = 0;
        overlay.style.visibility ='hidden';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase(){
        let randomIndex = Math.floor(Math.random() * this.phrases.length);
        return new Phrase(this.phrases[randomIndex]);
    }

    handleInteraction(btn){
        btn.disabled = true;
        let btn_letter = btn.textContent;
        if(!this.activePhrase.checkLetter(btn_letter)) {
            btn.className = 'wrong'
            this.removeLife();
        } else {
            btn.className = 'chosen';
            this.activePhrase.showMatchedLetter(btn_letter);
            if(this.checkForWin()===true) {
                this.gameOver(true);
            }
        }
    }

    removeLife(){
        const images = document.getElementsByTagName('img');
        console.log(images.length, this.missed)
        let liveHeartIndex = images.length - this.missed   // number of hearts left as live
        images[liveHeartIndex - 1].setAttribute('src', 'images/lostHeart.png'); 
        this.missed += 1;
        if (this.missed === images.length) {
            this.gameOver(false);
            this.missed = 0;
        }        
    }
    // checkForWin(): this method checks to see if the player has revealed all 
    // of the letters in the active phrase.
    checkForWin(){
        const hidden = document.querySelectorAll('ul li.hide');
        console.log(hidden);
        if(hidden.length === 0){
            return true
        }else{
            return false;
        }
    }

    gameOver(win){
        const gameOvermessage = document.getElementById('game-over-message')
        if (win){
            gameOvermessage.innerHTML = "OMG, You Win!"
            overlay.className = 'win'
            overlay.style.visibility='visible'
        } else {
            gameOvermessage.innerHTML = "Omg, You Lose"
            overlay.className = 'lose'
            overlay.style.visibility = 'visible'
        }
        this.resetGame();
    }

   resetGame(btn){
       //remove all li elements
       const phraseDiv = document.getElementById('phrase');
       phraseDiv.firstElementChild.innerHTML = " ";

       //enable keys and update class to key 
       const allButtons = document.querySelectorAll('.chosen .wrong');
       console.log(allButtons)
       allButtons.forEach(btn => {
           btn.disabled = false;
           btn.className = 'key';
       });

       //reset heart images
       const initialImg = document.querySelectorAll('img');
       initialImg.forEach(img =>{
        img.setAttribute('src' , 'images/liveHeart.png')
       });
       
   };
}