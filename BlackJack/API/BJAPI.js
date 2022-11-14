const express = require('express');
const app = express()
const port = 3080
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))


let deck = [1,2,3,4,5,,6,7,8,9,10,11,12,13];

let game = {
    plyerHand: [],
    dealerHand: []
}

function restartGame(){
    
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