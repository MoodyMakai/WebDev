const express = require('express');
const app = express()
const port = 3080
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))


let deck = [
            {rank: '', suite: ""}
        ]  
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
deckBuild()
console.log(deck)
let game = [{
    playerHand: '',
    dealerHand: ''
}]

    


function dealCard(){
    z=0
    for (x of game){
        z++
        if (z<3){
            s = Math.floor(Math.random()*52)
            game.push({
            playerHand: deck[s] 
        }) 
        console.log(s)  
    }} 
}
dealCard()
console.log(game)





app.get('/a', (req,res)=>{
    res.json('grungis');
})
app.get('/b', (req,res)=>{
    res.json('grangry'); 
})






app.listen(port, () => {
    console.log(`server on ${port}`)
});