const express = require('express');
const app = express()
const port = 3080
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))


let deck = [
            {rank: '', suite: ""}
        ]  
let game = {
            playerHand: [],
            dealerHand: []
        }

function deckBuild(){
    n=0;
    s = 0;
    d = 0;
    c = 0;
    for(x of deck){
        n++
        if(n < 14){
        deck.push({
            rank: n,
            suite: "heart"
        })
        } else{
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
    }
        
}
function dealCard(){
            s = Math.floor(Math.random()*52)
            game.playerHand.push(deck[s]) 
            console.log(s)
            deck.splice(s, 1) 
} 
function dealerCard(){
    s = Math.floor(Math.random()*52)
    game.dealerHand.push(deck[s]) 
    console.log(s)
    deck.splice(s, 1) 
} 
function restartGame(){
    game.dealerHand.splice(0,4)
    game.playerHand.splice(0,4)
    deckBuild()
    dealCard()
    dealCard()
    dealerCard()
    dealerCard()
    //scoreCount()
}

function scoreCount(hand){
    let pPoints = 0
    for(x of hand){
        if (x.rank === 1){
            pPoints += 11
        } else{
        pPoints = pPoints + x.rank}
    }
    console.log(pPoints)
    return pPoints
}



restartGame()
console.log(game)



app.get('/hit', (req,res)=>{
    game.Pvalue=scoreCount(game.playerHand)
    game.Dvalue=scoreCount(game.dealerHand)
    res.json(game)
})
app.get('/b', (req,res)=>{
    res.json('grangry'); 
})






app.listen(port, () => {
    console.log(`server on ${port}`)
});