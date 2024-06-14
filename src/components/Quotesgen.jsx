import React from 'react'

const Quotesgen = () => {



    let quotes = [
        "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "Do not watch the clock. Do what it does. Keep going. - Sam Levenson",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "Act as if what you do makes a difference. It does. - William James",
        "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
        "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson"
    ];
const randomIndex = Math.floor(Math.random()*quotes.length)
const quote = quotes[randomIndex]

  return (
    <div>{quote}</div>
    
  )
}

export default Quotesgen