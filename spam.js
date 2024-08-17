// Function to preprocess text
function preprocessText(text) {
    return text.toLowerCase().replace(/\W/g, ' ') // Convert to lowercase and remove non-word characters
}

// Increasing this decreases the likelihood message is flagged
// Functions with values [-0.5, 0.5]
// To make weight 0.7, for instance, make this 0.2
const SPAM_WEIGHT = 0.0

async function loadJSON() {
    const response = await fetch('data/data.json') // Relative path to data.json
    if (!response.ok) {
        alert('Error getting JSON data.')
        throw new Error('Network response was not ok ' + response.statusText)
    }
    return await response.json()
}

function log(x) {
    return x > 0 ? Math.log(x) : -Infinity // To handle log(0)
}

async function detectSpam() {
    // Grab the words and probabilities
    const resultElement = document.getElementById('result')
    resultElement.textContent = 'Loading...'

    const data = await loadJSON()
    const message = document.getElementById('message-input').value

    wordsAndProbabilities = data.words_and_probabilities
    let hamProbability = log(data.ham_probability)
    let spamProbability = log(data.spam_probability)

    // Factor in all our words
    const messageWords = preprocessText(message).split(' ')
    for (const word of messageWords) {
        if (wordsAndProbabilities[word]) {
            const [wordSpam, wordHam] = wordsAndProbabilities[word]
            spamProbability += log(wordSpam)
            hamProbability += log(wordHam)
        }
    }

    spamProbability -= SPAM_WEIGHT

    if (spamProbability > hamProbability) {
        resultElement.textContent = 'SPAM'
    } else {
        resultElement.textContent = 'NOT SPAM'
    }
}

// Attach detectSpam to button click
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('check-message').addEventListener('click', detectSpam)
})
