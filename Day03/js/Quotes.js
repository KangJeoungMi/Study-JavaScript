const quotes = [
    {
        quote : "You will face many defeats in life, but never let yourself be defeated.",
        autohor : "Maya Angelou",
    },
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        autohor : "Nelson Mandela",
    },
    {
        quote : "In the end, it’s not the years in your life that count. It’s the life in your years.",
        autohor : "Abraham Lincoln",
    },
    {
        quote : "Life is either a daring adventure or nothing at all",
        autohor : "Helen Keller",
    },
    {
        quote : "Many of life’s failures are people who did not realize how close they were to success when they gave up. ",
        autohor : "Thomas A. Edison",
    },
    {
        quote : "Life is either a great adventure or nothing.",
        autohor : "Helen Keller",
    },
    {
        quote : "If you spend too much time thinking about a thing, you’ll never get it done.",
        autohor : "Bruce Lee",
    },
    {
        quote : "Keep your eyes on the stars and your feet on the ground.",
        autohor : "Theodore Roosevelt",
    },
    {
        quote : "Despite the forecast, live like it’s spring.",
        autohor : "Lilly Pulitzer",
    },
    {
        quote : "The two most important days in your life are the day you are born and the day you find out why. ",
        autohor : "Mark Twain",
    },
]
const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.autohor;
//random
// round 반올림
// ceil 올림
// floor 내림
