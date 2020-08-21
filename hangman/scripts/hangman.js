//step 1
class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')  //set up the word instance property as an array of lower case letters
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    //method for Hangman getPuzzle - show the words in letters ****  //step 2 
    get puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {   //include means if the string contains the letter or not
                puzzle += letter //so if guessedletter is in the letter puzzle = current value + actual letter
            } else {
                puzzle += '*'
            }
        })
        return puzzle
    }
    //step 4 - method for making a guess
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const uniqueGuess = !this.guessedLetters.includes(guess) //ensure guess does not exist in guessedLetters array
        const badGuess = !this.word.includes(guess) //does that word array not include guess

        if (this.status !== 'playing') {
            return      //remainingGuesses are disabled 
        }

        if (uniqueGuess) {  //add unique guesses to list of guesses 
            this.guessedLetters.push(guess)
        }

        //bad guess - decrement remaining guesses
        if (uniqueGuess && badGuess) {
            this.remainingGuesses--
        }
        this.getStatus()
    }
    //step 6 - create method for recalculating status to playing, finished or failed
    getStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    //step 7 - uses status to create messages
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Wrong answer! Correct word was "${this.word.join('')}"`           //this.word.join('')
        } else {
            return 'Great Work! You guessed correct.'
        }
    }
}
