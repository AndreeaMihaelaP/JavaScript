const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show new quote
function newQuote() {
	// Pick a random quote from apiQuotes array
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	if(quote.author === '') {
		authorText.innerText = 'Unknown';
	} else {
		authorText.innerText = quote.author;
	}
	console.log(quote);
}

// Get Quotes From Api
async function getQuotes() {
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

// On Load
getQuotes()