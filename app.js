const quotes = ["“With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.”",
    "“Think 100 times before you take a decision, But once that decision is taken, stand by it as one man.”",
    "“Expect the best, Prepare for the worst”",
    "“No struggle can ever succeed without women participating side by side with men.”",
    "“I do not believe in taking the right decision, I take a decision and make it right.”",
    "“You are free; you are free to go to your temples. You are free to go to your mosques or to any other places of worship in this State of Pakistan. You may belong to any religion, caste or creed—that has nothing to do with the business of the state.”",
    "“India is not a nation, nor a country. It is a subcontinent of nationalities.”",
    "“With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.”",
    "“No nation can ever be worthy of its existence that cannot take its women along with the men. No struggle can ever succeed without women participating side by side with men. There are two powers in the world; one is the sword and the other is the pen. There is a great competition and rivalry between the two. There is a third power stronger than both, that of the women.”",
    "“Any idea of a United India could never have worked and in my judgment it would have led us to terrific disaster.”",
    "“Pakistan not only means freedom and independence but the Muslim Ideology which has to be preserved, which has come to us as a precious gift and treasure and which, we hope other will share with us.”",

]

const usedIndexes = new Set()
const quoteElement = document.querySelector('.quote')



function generateQuote(){

    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }

    while (true){
    // quoteElement.innerHTML = "hello world"
    const randomIdx = Math.floor(Math.random()*quotes.length)

    if (usedIndexes.has(randomIdx)) continue

    const quote = quotes[randomIdx]
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx)
    break
    }
}


