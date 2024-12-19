var quotes = [
    {
        quote: " “You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ",
        writer: "― Dr. Seuss",
    },
    {
        quote: " “If you tell the truth, you don't have to remember anything.” ",
        writer: "― Mark Twain",
    },
    {
        quote: " “A friend is someone who knows all about you and still loves you.” ",
        writer: "― Elbert Hubbard",
    },
    {
        quote: " “Live as if you were to die tomorrow. Learn as if you were to live forever.” ",
        writer: "― Mahatma Gandhi",
    },
    {
        quote: " “I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” ",
        writer: "― Maya Angelou",
    },
]

var quote = document.getElementById("quote");
var writer = document.getElementById("writer");
var btn = document.getElementById("Qbtn");

btn.addEventListener("click" , function newQuote(){
    var random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    writer .innerHTML = quotes[random].writer;
})
