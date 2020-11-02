const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show loading
function loading() {
	loader.hidden = false;
	quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
	if(!loader.hidden) {
		quoteContainer.hidden = false;
		loader.hidden = true;
	}
}

// Show new quote
function newQuote() {
	// Pick a random quote from apiQuotes array
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	if(quote.author === '') {
		authorText.innerText = 'Unknown';
	} else {
		authorText.innerText = quote.author;
	}

	// Reduce font size for long quotes
	if(quote.text.length > 120) {
		quoteText.classList.add('long-quote')
	} else {
		quoteText.classList.remove('long-quote');
	}
	
	quoteText.innerText = quote.text;
	
	// Stop loader and show the quote
	complete();
}

// Get Quotes From Api
async function getQuotes() {
	loading();
	const apiUrl = 'https://type.fit/api/quotes';
	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();
	} catch (error) {
		// Catch Error Here
		console.log('whoops, no quote', error);
	}
}

// Tweet Quote
function tweetQuote() {
	const quote = quoteText.innerText;
	const author = authorText.innerText;
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
	window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuotes);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes()
