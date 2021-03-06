const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to get country')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=1a11bd55cc8f9c')

    if (response.status === 200) {
        return response.json()

    } else {
        throw new Error('Unable to fetch data of location')
    }
}

//return a promise that resolves the country object for your current location
const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country) //in JSON it's GB
}
