    // let finished = true
    // this.word.forEach((letter) => {
    //     if (this.guessedLetters.includes(letter)) {
    //     } else {
    //         finished = false
    //     }
    // })

    // const letternotGuessed = this.word.filter((letter) => {  alternative method
    //     return !this.guessedLetters.includes(letter)
    // })

    // const finished = letternotGuessed.length === 0

Hangman.prototype.getStatus = function(){
    const finished = this.word.every((letter) => {
        return this.guessedLetters.includes(letter)
    })
}
