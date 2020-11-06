
const button = document.getElementById('button');
const audioElement = document.getElementById('audio');
const apiUrl = `https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist`;

// Disable/enable Button
function toggleButton(){ 
    button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
function tellMe(joke) {
    VoiceRSS.speech({
        key: 'b3eac3aecab84134b1194b2113b518d6',
        src: joke,
        hl: 'en-us',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false,
    });
}

// Get jokes from Joke API
async function getJokes() {
    let joke = '';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if( data.setup ) {
            joke = `${data.setup} ... ${data.delivery}`
        } else {
            joke = data.joke;
        }
        // Text-to-Speech
        tellMe(joke);
        // Disabled Button
        toggleButton();
    } catch(error) {
        console.log('Error', error);
    }
}

// Event Listeners
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);