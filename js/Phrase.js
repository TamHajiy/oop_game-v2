/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    /*
    **Show phrase on the screen
    */
    addPhraseToDisplay(){
        const ul = document.querySelector('#phrase ul');
        for(let i =0; i < this.phrase.length; i++){
            const li = document.createElement('li');
            const letter = this.phrase[i];
            li.textContent = letter;
            if(letter === ' '){
                li.className = 'space';
            } else {
                li.className = `hide letter ${letter}`;
            }
            ul.appendChild(li);
        }
    }
    /*
    ** Check the letter match
    */
   checkLetter(letter){
       if(this.phrase.includes(letter)){
           return true
       }else{
           return false
       }
   }
   /*
   ** Reveal matching letters
   */
   showMatchedLetter(letter){
        const allLetters = document.querySelectorAll('ul li');
        for(let i =0; i< allLetters.length; i++){
            if(allLetters[i].textContent === letter){
                allLetters[i].className = 'show'
            }
            // else{
            //     allLetters[i].className = 'hide'
            // }
        }
   }
}