const express = require('express');
const app = express()
const port = 3080
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))


let deck = [{ Hearts: [1,2,3,4,5,6,7,8,9,10,11,12,13],
              Clubs: [1,2,3,4,5,6,7,8,9,10,11,12,13],
              Spades: [1,2,3,4,5,6,7,8,9,10,11,12,13],
              Diamonds: [1,2,3,4,5,6,7,8,9,10,11,12,13]
            }]
let game = {
    plyerHand: [],
    dealerHand: []
}

function restartGame(){
    //set pDeck to 0
    //set gDeck to default
    
}

function shuffleDeck(){
    
}

function dealCard(){
    
}









app.get('/a', (req,res)=>{
    res.json('grungis');
})
app.get('/b', (req,res)=>{
    res.json('grangry'); 
})






app.listen(port, () => {
    console.log(`server on ${port}`)
});