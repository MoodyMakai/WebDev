const express = require('express');
const app = express()
const port = 3080
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))


let deck = [

]
let game = {
    playerHand: [],
    dealerHand: []
}

function deckBuild() {
    s = 0;
    d = 0;
    c = 0;
    for (let n = 1; n < 14; n++) {
        deck.push({
            rank: n,
            suite: "heart"
        })
        deck.push({
            rank: n,
            suite: "clubs"
        })
        deck.push({
            rank: n,
            suite: "spades"
        })
        deck.push({
            rank: n,
            suite: "diamonds"
        })
    }
}
/* 
 deck.push({
     rank: n,
     suite: "heart"
 })
  else{
     s++
     if(s < 14){
         deck.push({
             rank: s,
             suite: "spades"
         })
         }else {
             d++
             if(d < 14){
                 deck.push({
                     rank: d,
                     suite: "diamonds"
                 })
         }else{
             c++
             if(c < 14){
                 deck.push({
                     rank: c,
                     suite: "clubs"
                 })}}
         }
 }
}*/


function dealCard() {
    s = Math.floor(Math.random() * deck.length)
    game.playerHand.push(deck[s])
    //console.log(s)
    deck.splice(s, 1)
}
function dealerCard() {
    s = Math.floor(Math.random() * deck.length)
    game.dealerHand.push(deck[s])
    //console.log(s)
    deck.splice(s, 1)
}
function restartGame() {
    game.dealerHand.splice(0, 4)
    game.playerHand.splice(0, 4)
    deckBuild()
    console.log(deck)
    dealCard()
    dealCard()
    dealerCard()
    dealerCard()
}
function scoreCount(hand) {
    let pPoints = 0
    console.log(hand)
    for (x of hand) {
        if (x.rank === 1 && pPoints < 11) {
            pPoints += 11
        } else {
            pPoints = pPoints + x.rank
        }
        if (pPoints === 21) {
            console.log("Victory has been achieved")
        }
    }
    return pPoints
}
function stand() {
    while (scoreCount(game.dealerHand) < 17) {
        dealerCard()
        console.log('dealer hand')
        console.log(scoreCount(game.dealerHand))
    }

    if (scoreCount(game.dealerHand) > scoreCount(game.playerHand) && scoreCount(game.dealerHand) < 22) {
        console.log("dealer victory")
        //restartGame()
    } else {
        console.log("dealer busts, player wins")
        //restartGame()
    }
}





/*
restartGame()
console.log(game)
console.log('Player & dealer points')
console.log(scoreCount(game.playerHand), scoreCount(game.dealerHand))
stand()*/


app.post('/stand', (req, res) => {
    stand()
    game.Pvalue = scoreCount(game.playerHand)
    game.Dvalue = scoreCount(game.dealerHand)
    res.json(game)
})
app.post('/reset', (req, res) => {
    console.log('reset')
    restartGame()
    console.log('reset done')
    game.Pvalue = scoreCount(game.playerHand)
    game.Dvalue = scoreCount(game.dealerHand)
    res.json(game);
    
})
app.post('/hit', (req,res)=> {
    dealCard()
    game.Pvalue = scoreCount(game.playerHand)
    game.Dvalue = scoreCount(game.dealerHand)
    res.json(game)
})





app.listen(port, () => {
    console.log(`server on ${port}`)
});