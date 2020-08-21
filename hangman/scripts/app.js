//Htttp - Request is what do we want to do, Response is what was actually done
//step 5 - DOM element
const puzzleElement = document.querySelector('#puzzle')
const guessElement = document.querySelector('#guesses')
const statusElement = document.querySelector('#status')

//step 4 - when key is pressed browser will show what's happened
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)   //what you press with your keyboard
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleElement.innerHTML = ''
    guessElement.textContent = game1.statusMessage

    //for each character in the string, add a span into #puzzle - the span text should be the letter itself
    game1.puzzle.split('').forEach((letter) => {
        const letterElement = document.createElement('span')
        letterElement.textContent = letter
        puzzleElement.appendChild(letterElement)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2') //getting a random puzzle from the API
    game1 = new Hangman(puzzle, 7)
    render()
}

//click event listener when reset button gets clicked
document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {   //Asynchronous 
//     console.log(puzzle);
// }).catch((err) => {
//     console.log(err);
// })

// getCountry('GB').then((country) => {
//     console.log(country.name + ' is located in Europe');
// }).catch((err) => {
//     console.log(err);
// })

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch data')
//     }
// }).then((data) => {
//     console.log(data.puzzle);
// }).catch((err) => {
//     console.log(err);
// })

// getLocation().then((location) => {
//     console.log(`You are currently in ${location.city}, ${location.region} ${location.country}`);
//     return getCountry(location.country)
// }).then((country) => {
//     console.log(country.name);
// }).catch((err) => {
//     console.log(err);
// })

getCurrentCountry().then((country) => {
    console.log(country.name);
}).catch((error) => {
    console.log(error);
})


