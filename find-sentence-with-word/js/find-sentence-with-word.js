const text = "5 facts about the Golden Gate Bridge. The bridge is actually not golden at all. " +
    "It's a bright red-orange. It was named one of the Seven Wonders of the Modern World." +
    " It took four years to build. There are approximately 600,000 rivets in each of the bridge's towers." +
    " It's the most photographed bridge in the world."

function findSentenceWithWord(word) {
    return text.split('.').filter(sentence => sentence.includes(word)).join('.')
}

findSentenceWithWord('gold')
