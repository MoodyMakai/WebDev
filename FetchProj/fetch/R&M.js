const express = require('express');
const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

function htmlStart(res){
    res.write(`<!DOCTYPE html>
    <head>
        <title>Document</title>
    </head>
    <body>
`);
}

function htmlEnd(res){(`
    </body>
    </html>

`)}



/*
app.get('/', (req,res)=>{
htmlStart(res);
res.write(`<h1> cityville </h1>`)
fetch('https://rickandmortyapi.com/api/character').then(fres => {
    return fres.json();
}).then(data =>{
    for(let person of data.results){
        res.write(`<h1>${person.name}</h1>`);
    }
    htmlEnd(res);
})
.catch(err =>{
res.write(`<h1> uh oh ${err.message}</h1>`)})
})*/

app.get('/', async (req,res)=>{
    htmlStart(res);
    res.write(`<h1> R&M </h1>`)
    let fRes = await fetch('https://rickandmortyapi.com/api/character')
    console.log(fRes)
   let data = await fRes.json(); 
    for (let person of data.results){
        res.write(`<h1>${person.name}</h1>`)
        let eRes = await fetch('https://rickandmortyapi.com/api/episode')
        console.log(person.episode)/* 
        let data2 = await eRes.json()
            for(episode of data2.results){
                res.write(`<ul>${episode.name}</ul>`)}
            */}})
















app.listen(port, () => {
    console.log(`server on ${port}`)
});